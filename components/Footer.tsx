"use client";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { Logo } from "./Logo";

export function Footer() {
  const { t, lang } = useLang();
  return (
    <footer className="mt-32 border-t hairline bg-cream-100">
      <div className="container py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <Logo />
          <p className="mt-4 max-w-sm text-[14px] text-ink/70">{t("footer.tagline")}</p>
          <p className="mt-3 max-w-sm font-serif italic text-[15px] text-ink/80">
            {lang === "pt"
              ? "“O Oeste que os guias não sabem que existe.”"
              : "“The West Coast Portugal doesn't put on the map.”"}
          </p>
        </div>

        <div className="md:col-span-3 text-[13px]">
          <div className="text-ink/50 uppercase tracking-[0.18em] text-[11px] mb-3">
            {lang === "pt" ? "Navegar" : "Browse"}
          </div>
          <ul className="space-y-2">
            <li><Link href="/experiencias" className="link-under">{t("nav.experiencias")}</Link></li>
            <li><Link href="/destinos" className="link-under">{t("nav.destinos")}</Link></li>
            <li><Link href="/parceiros" className="link-under">{t("nav.parceiros")}</Link></li>
            <li><Link href="/diario" className="link-under">{t("nav.diario")}</Link></li>
            <li><Link href="/sobre" className="link-under">{t("nav.sobre")}</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4 text-[13px]">
          <div className="text-ink/50 uppercase tracking-[0.18em] text-[11px] mb-3">
            {lang === "pt" ? "Falar connosco" : "Reach us"}
          </div>
          <ul className="space-y-2">
            <li>
              <a className="link-under" href="https://instagram.com/oestelocal" target="_blank" rel="noopener">
                @oestelocal · Instagram
              </a>
            </li>
            <li>
              <a className="link-under" href="https://wa.me/351000000000" target="_blank" rel="noopener">
                WhatsApp
              </a>
            </li>
            <li>
              <Link href="/contacto" className="link-under">{t("nav.contacto")}</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t hairline">
        <div className="container py-5 flex flex-col md:flex-row gap-3 justify-between text-[11px] uppercase tracking-[0.16em] text-ink/50">
          <span>© {new Date().getFullYear()} Oeste Local. {t("footer.rights")}</span>
          <span>{lang === "pt" ? "Costa de Prata · Portugal" : "Silver Coast · Portugal"}</span>
        </div>
      </div>
    </footer>
  );
}
