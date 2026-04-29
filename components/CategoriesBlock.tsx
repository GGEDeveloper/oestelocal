"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

const cats = [
  { key: "desacelerar", art: "var(--ocean)", emoji: "↡" },
  { key: "descobrir", art: "#7B9569", emoji: "✦" },
  { key: "mergulhar", art: "#1F4E66", emoji: "≋" },
  { key: "celebrar", art: "#E86A3A", emoji: "❍" },
] as const;

export function CategoriesBlock() {
  const { t, lang } = useLang();
  const [a, b] = t("categories.title").split("\n");
  return (
    <section className="container py-24 md:py-32">
      <div className="max-w-3xl">
        <p className="pill">{lang === "pt" ? "Quatro maneiras de habitar o Oeste" : "Four ways to inhabit the West"}</p>
        <h2 className="mt-6 font-display tracking-tighter2 text-fluid-h1 leading-[1]">
          {a}
          <br />
          <span className="font-serif-display italic text-sunset-600">{b}</span>
        </h2>
        <p className="mt-6 max-w-xl text-ink/70 text-[16px] leading-relaxed">{t("categories.lede")}</p>
      </div>

      <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {cats.map((c, i) => (
          <motion.div
            key={c.key}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: i * 0.07, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <Link
              href={`/experiencias?c=${c.key}`}
              className="group relative block overflow-hidden rounded-card border hairline bg-cream-100 hover:bg-cream-200 transition"
            >
              <div className="aspect-[4/5] p-7 flex flex-col justify-between">
                <span
                  className="inline-grid h-10 w-10 place-items-center rounded-full text-cream-50 text-[18px]"
                  style={{ background: c.art }}
                  aria-hidden
                >
                  {c.emoji}
                </span>
                <div>
                  <h3 className="font-display text-[28px] tracking-tightish leading-none">
                    {t(`categories.${c.key}.name`)}
                  </h3>
                  <p className="mt-3 text-[14px] text-ink/65">{t(`categories.${c.key}.text`)}</p>
                  <span className="mt-6 inline-flex items-center gap-1 text-[12px] uppercase tracking-[0.18em] text-ink/55 group-hover:text-ink transition">
                    {t("cta.explore")} →
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
