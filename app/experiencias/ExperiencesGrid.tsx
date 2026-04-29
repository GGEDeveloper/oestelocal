"use client";
import * as React from "react";
import { useSearchParams } from "next/navigation";
import type { Experience } from "@/lib/data";
import { ExperienceCard } from "@/components/ExperienceCard";
import { useLang } from "@/lib/i18n";

const CATS: Experience["category"][] = ["desacelerar", "descobrir", "mergulhar", "celebrar"];

const labels: Record<Experience["category"], { pt: string; en: string }> = {
  desacelerar: { pt: "Desacelerar", en: "Slow down" },
  descobrir: { pt: "Descobrir", en: "Discover" },
  mergulhar: { pt: "Mergulhar", en: "Dive in" },
  celebrar: { pt: "Celebrar", en: "Celebrate" },
};

export function ExperiencesGrid({ items }: { items: Experience[] }) {
  const sp = useSearchParams();
  const initial = (sp.get("c") as Experience["category"] | null) ?? null;
  const [active, setActive] = React.useState<Experience["category"] | null>(initial);
  const { lang } = useLang();

  const filtered = active ? items.filter((e) => e.category === active) : items;

  return (
    <>
      <div className="mt-10 flex flex-wrap items-center gap-2">
        <button
          onClick={() => setActive(null)}
          className={`rounded-full border hairline px-4 py-2 text-[12px] uppercase tracking-[0.16em] transition ${
            !active ? "bg-ink text-cream-50 border-ink" : "hover:bg-cream-100"
          }`}
        >
          {lang === "pt" ? "Tudo" : "All"}
        </button>
        {CATS.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`rounded-full border hairline px-4 py-2 text-[12px] uppercase tracking-[0.16em] transition ${
              active === c ? "bg-ink text-cream-50 border-ink" : "hover:bg-cream-100"
            }`}
          >
            {labels[c][lang]}
          </button>
        ))}
      </div>

      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((e) => (
          <ExperienceCard key={e.slug} e={e} />
        ))}
      </div>
    </>
  );
}
