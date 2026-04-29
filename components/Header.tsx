"use client";
import Link from "next/link";
import * as React from "react";
import { useLang } from "@/lib/i18n";
import { Logo } from "./Logo";
import { LangSwitcher } from "./LangSwitcher";

export function Header() {
  const { t } = useLang();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/experiencias", label: t("nav.experiencias") },
    { href: "/destinos", label: t("nav.destinos") },
    { href: "/parceiros", label: t("nav.parceiros") },
    { href: "/diario", label: t("nav.diario") },
    { href: "/sobre", label: t("nav.sobre") },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-cream-50/85 backdrop-blur border-b hairline"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="z-50">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-[13px]">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="link-under text-ink/80 hover:text-ink">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LangSwitcher />
          <Link
            href="/contacto"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-2 text-[12px] font-medium text-cream-50 hover:bg-ocean-600 transition"
          >
            {t("cta.primary")}
            <span aria-hidden>→</span>
          </Link>
          <button
            className="md:hidden rounded-full border hairline p-2"
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="block h-px w-5 bg-ink" />
            <span className="block h-px w-5 bg-ink mt-1.5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t hairline bg-cream-50">
          <nav className="container flex flex-col gap-4 py-6 text-[15px]">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-ink" onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
            <Link href="/contacto" onClick={() => setOpen(false)} className="btn-primary justify-center">
              {t("cta.primary")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
