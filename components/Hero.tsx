"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";

export function Hero() {
  const { t, lang } = useLang();
  const titleLines = t("hero.title").split("\n");

  return (
    <section className="relative isolate overflow-hidden">
      {/* Atmosphere */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1200px 600px at 80% -10%, rgba(232,106,58,0.18), transparent 60%), radial-gradient(900px 700px at 0% 30%, rgba(31,78,102,0.12), transparent 65%), linear-gradient(180deg, #FBF7F0 0%, #F5EFE2 100%)",
        }}
      />
      <div aria-hidden className="grain absolute inset-0 -z-10" />

      <div className="container pt-16 md:pt-20 pb-16 md:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          className="pill"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-sunset-500" />
          {t("hero.eyebrow")}
        </motion.div>

        <h1 className="mt-7 font-display font-medium tracking-tighter2 text-fluid-hero leading-[0.95]">
          {titleLines.map((line, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 + i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
              className="block"
            >
              {i === titleLines.length - 1 ? (
                <span className="font-serif-display italic text-ocean-600">{line}</span>
              ) : (
                line
              )}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-7 max-w-2xl text-[16px] md:text-[18px] leading-relaxed text-ink/75"
        >
          {t("hero.lede")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <Link href="/experiencias" className="btn-primary">
            {lang === "pt" ? "Ver experiências" : "Browse experiences"}
            <span aria-hidden>→</span>
          </Link>
          <a
            className="btn-ghost"
            href="https://wa.me/351961325834"
            target="_blank"
            rel="noopener"
          >
            {t("cta.whatsapp")}
          </a>
        </motion.div>

        <motion.dl
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.7 } } }}
          className="mt-14 grid grid-cols-3 max-w-2xl gap-6 border-t hairline pt-7"
        >
          {[t("hero.stat1"), t("hero.stat2"), t("hero.stat3")].map((s, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
              className="text-[12px] uppercase tracking-[0.14em] text-ink/55"
            >
              {s}
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
