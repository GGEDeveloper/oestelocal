import { NextResponse } from "next/server";

// Handler do formulário de contacto.
// MVP: aceita POST (FormData ou JSON), valida campos, e:
//   - se CONTACT_WEBHOOK_URL estiver definido, faz forward (Slack/Discord/Make/n8n)
//   - se CONTACT_EMAIL_TO + RESEND_API_KEY estiverem definidos, envia email via Resend
//   - caso contrário regista no log do servidor e devolve 200
// Em produção (Waphix) pode ser facilmente substituído por nodemailer + SMTP local.

export const runtime = "nodejs";

type Payload = {
  name: string;
  email: string;
  message: string;
  source?: string;
};

async function readPayload(req: Request): Promise<Payload | null> {
  const ct = req.headers.get("content-type") ?? "";
  try {
    if (ct.includes("application/json")) {
      const j = await req.json();
      return {
        name: String(j.name ?? "").trim(),
        email: String(j.email ?? "").trim(),
        message: String(j.message ?? "").trim(),
        source: j.source,
      };
    }
    const fd = await req.formData();
    return {
      name: String(fd.get("name") ?? "").trim(),
      email: String(fd.get("email") ?? "").trim(),
      message: String(fd.get("message") ?? "").trim(),
      source: String(fd.get("source") ?? "") || undefined,
    };
  } catch {
    return null;
  }
}

function isValid(p: Payload | null): p is Payload {
  if (!p) return false;
  if (p.name.length < 2 || p.name.length > 120) return false;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.email)) return false;
  if (p.message.length < 10 || p.message.length > 4000) return false;
  return true;
}

async function forwardToWebhook(p: Payload) {
  const url = process.env.CONTACT_WEBHOOK_URL;
  if (!url) return;
  await fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      text: `Novo contacto Oeste Local — ${p.name} <${p.email}>\n\n${p.message}`,
      payload: p,
    }),
  }).catch(() => {});
}

async function sendEmail(p: Payload) {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL_TO;
  const from = process.env.CONTACT_EMAIL_FROM ?? "Oeste Local <noreply@oestelocal.com>";
  if (!key || !to) return;
  await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: p.email,
      subject: `Novo contacto · ${p.name}`,
      text: `Nome: ${p.name}\nEmail: ${p.email}\nFonte: ${p.source ?? "-"}\n\n${p.message}`,
    }),
  }).catch(() => {});
}

export async function POST(req: Request) {
  const payload = await readPayload(req);
  if (!isValid(payload)) {
    return NextResponse.json({ ok: false, error: "invalid_payload" }, { status: 400 });
  }

  await Promise.all([forwardToWebhook(payload), sendEmail(payload)]);

  if (!process.env.CONTACT_WEBHOOK_URL && !process.env.RESEND_API_KEY) {
    console.log("[contact] (no integrations configured) →", payload);
  }

  return NextResponse.json({ ok: true });
}
