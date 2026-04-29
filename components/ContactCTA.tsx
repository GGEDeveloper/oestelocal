"use client";
import Link from "next/link";
import { useLang } from "@/lib/i18n";

export function ContactCTA() {
  const { lang } = useLang();
  return (
    <section className="container py-20 md:py-28">
      <div
        className="relative overflow-hidden rounded-card p-8 md:p-14 text-cream-50"
        style={{
          background:
            "radial-gradient(800px 400px at 80% 0%, rgba(248,201,160,0.45), transparent 60%), linear-gradient(120deg, #1F4E66 0%, #0E2E40 60%, #082030 100%)",
        }}
      >
        <div className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.22em] text-cream-50/70">
            {lang === "pt" ? "Quando vens?" : "When are you coming?"}
          </p>
          <h3 className="mt-5 font-display tracking-tighter2 text-fluid-h1 leading-[1]">
            {lang === "pt" ? (
              <>
                Diz-nos quando.
                <br />
                <span className="font-serif-display italic text-sunset-200">Tratamos do resto.</span>
              </>
            ) : (
              <>
                Tell us when.
                <br />
                <span className="font-serif-display italic text-sunset-200">We'll handle the rest.</span>
              </>
            )}
          </h3>
          <p className="mt-5 max-w-xl text-cream-50/85 text-[16px] leading-relaxed">
            {lang === "pt"
              ? "Pequenos grupos. Sem ementa fixa. Pensamos a tua viagem em horas, não em dias."
              : "Small groups. No fixed menu. We design your trip in hours, not days."}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contacto" className="btn-primary bg-cream-50 text-ocean-900 hover:bg-sunset-200">
              {lang === "pt" ? "Começar conversa" : "Start a conversation"}
              <span aria-hidden>→</span>
            </Link>
            <a
              className="btn-ghost border-cream-50/30 text-cream-50 hover:bg-cream-50/10"
              href="https://wa.me/351000000000"
              target="_blank"
              rel="noopener"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
