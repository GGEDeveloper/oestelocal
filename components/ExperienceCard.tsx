"use client";
import Image from "next/image";
import Link from "next/link";
import type { Experience } from "@/lib/data";
import { useLang } from "@/lib/i18n";

const labels: Record<Experience["category"], { pt: string; en: string }> = {
  desacelerar: { pt: "Desacelerar", en: "Slow down" },
  descobrir: { pt: "Descobrir", en: "Discover" },
  mergulhar: { pt: "Mergulhar", en: "Dive in" },
  celebrar: { pt: "Celebrar", en: "Celebrate" },
};

export function ExperienceCard({ e, priority = false }: { e: Experience; priority?: boolean }) {
  const { lang } = useLang();
  return (
    <Link
      href={`/experiencias/${e.slug}`}
      className="group block rounded-card overflow-hidden border hairline bg-cream-50 shadow-card"
    >
      <div className="relative ratio-4-5 overflow-hidden">
        <Image
          src={e.image}
          alt={e.title[lang]}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-x-0 bottom-0 p-4 flex justify-between text-[11px] uppercase tracking-[0.16em] text-cream-50">
          <span className="bg-ink/65 backdrop-blur-sm rounded-full px-3 py-1">
            {labels[e.category][lang]}
          </span>
          <span className="bg-ink/65 backdrop-blur-sm rounded-full px-3 py-1">
            {e.duration[lang]}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-display text-[22px] leading-tight tracking-tightish">{e.title[lang]}</h3>
        <p className="mt-2 text-[14px] text-ink/70 leading-relaxed">{e.short[lang]}</p>
        <div className="mt-4 flex justify-end text-[12px] text-ink/55 uppercase tracking-[0.16em]">
          <span className="link-under">{lang === "pt" ? "Ler mais" : "Read more"} →</span>
        </div>
      </div>
    </Link>
  );
}