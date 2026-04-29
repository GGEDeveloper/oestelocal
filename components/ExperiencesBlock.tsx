"use client";
import Link from "next/link";
import { experiences } from "@/lib/data";
import { ExperienceCard } from "./ExperienceCard";
import { useLang } from "@/lib/i18n";

export function ExperiencesBlock() {
  const { t, lang } = useLang();
  const featured = experiences.slice(0, 3);
  return (
    <section className="container py-24 md:py-32">
      <div className="flex items-end justify-between gap-6 mb-12">
        <div className="max-w-2xl">
          <p className="pill">{t("places.title")}</p>
          <h2 className="mt-6 font-display tracking-tighter2 text-fluid-h1 leading-[1]">
            {t("places.lede")}
          </h2>
        </div>
        <Link href="/experiencias" className="hidden md:inline-flex link-under text-[13px]">
          {t("places.seeAll")} →
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {featured.map((e, i) => (
          <ExperienceCard key={e.slug} e={e} priority={i === 0} />
        ))}
      </div>

      <div className="mt-8 md:hidden">
        <Link href="/experiencias" className="link-under text-[13px]">
          {t("places.seeAll")} →
        </Link>
      </div>
    </section>
  );
}
