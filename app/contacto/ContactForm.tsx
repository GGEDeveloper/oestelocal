"use client";
import * as React from "react";
import { useLang } from "@/lib/i18n";

export function ContactForm() {
  const { t, lang } = useLang();
  const [state, setState] = React.useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const data = new FormData(e.currentTarget);
    try {
      const r = await fetch("/api/contact", { method: "POST", body: data });
      if (!r.ok) throw new Error();
      setState("sent");
      e.currentTarget.reset();
    } catch {
      setState("error");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-card border hairline bg-cream-50 p-6 md:p-8 shadow-card"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <Field name="name" label={t("contact.name")} required />
        <Field name="email" type="email" label={t("contact.email")} required />
      </div>
      <div className="mt-5">
        <Field name="message" label={t("contact.message")} as="textarea" rows={5} required />
      </div>
      <div className="mt-7 flex flex-wrap items-center gap-4">
        <button type="submit" disabled={state === "sending"} className="btn-primary disabled:opacity-60">
          {state === "sending" ? t("contact.sending") : t("contact.send")}
          <span aria-hidden>→</span>
        </button>
        {state === "sent" && (
          <span className="text-[13px] text-moss-600">{t("contact.sent")}</span>
        )}
        {state === "error" && (
          <span className="text-[13px] text-sunset-600">
            {lang === "pt" ? "Algo correu mal — tenta WhatsApp." : "Something went wrong — try WhatsApp."}
          </span>
        )}
      </div>
      <p className="mt-6 text-[12px] text-ink/55 leading-relaxed">
        {lang === "pt"
          ? "Ao enviar, aceitas que te respondamos por email ou WhatsApp. Não partilhamos os teus dados."
          : "By sending, you agree we may reply by email or WhatsApp. We don't share your data."}
      </p>
    </form>
  );
}

type FieldProps = {
  name: string;
  label: string;
  type?: string;
  as?: "input" | "textarea";
  rows?: number;
  required?: boolean;
};

function Field({ name, label, type = "text", as = "input", rows, required }: FieldProps) {
  const className =
    "mt-1.5 w-full rounded-xl border hairline bg-cream-100 px-4 py-3 text-[15px] outline-none focus:bg-cream-50 focus:border-ocean-600 transition";
  return (
    <label className="block text-[12px] uppercase tracking-[0.16em] text-ink/55">
      {label}
      {as === "textarea" ? (
        <textarea name={name} required={required} rows={rows} className={className} />
      ) : (
        <input name={name} type={type} required={required} className={className} />
      )}
    </label>
  );
}
