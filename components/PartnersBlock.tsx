"use client";
import Image from "next/image";
import Link from "next/link";
import { partners } from "@/lib/data";
import { useLang } from "@/lib/i18n";

export function PartnersBlock() {
  const { t, lang } = useLang();
  return (
    <section className="bg-cream-100 border-y hairline">
      <div className="container py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="pill">{lang === "pt" ? "Quem está connosco" : "Who walks with us"}</p>
          <h2 className="mt-6 font-display tracking-tighter2 text-fluid-h1 leading-[1]">
            {t("partners.title")}
          </h2>
          <p className="mt-6 text-ink/70 max-w-xl text-[16px] leading-relaxed">{t("partners.lede")}</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {partners.slice(0, 8).map((p) => (
            <Link
              key={p.slug}
              href={`/parceiros/${p.slug}`}
              className="group relative block overflow-hidden rounded-card border hairline bg-cream-50"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-4 text-cream-50">
                  <div className="text-[11px] uppercase tracking-[0.18em] opacity-80">{p.category}</div>
                  <div className="font-display text-[20px] mt-1 leading-tight">{p.name}</div>
                  <div className="text-[12px] opacity-80 mt-0.5">{p.role[lang]}</div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
