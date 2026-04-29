"use client";
import { useLang } from "@/lib/i18n";
import { motion } from "framer-motion";

export function HowItWorks() {
  const { lang } = useLang();

  const pillars =
    lang === "pt"
      ? [
          {
            n: "01",
            t: "Descobrimos",
            d: "Percorremos o Oeste à procura do que não está nos guias. Lugares, pessoas, momentos — raw e sem filtros.",
          },
          {
            n: "02",
            t: "Escrevemos",
            d: "Cada lugar ganha uma história. Não reviews. Não listas. Narrativa de quem conhece e respeita o território.",
          },
          {
            n: "03",
            t: "Apresentamos",
            d: "Ligamos o nosso público aos parceiros locais diretamente — sem intermédiarios, sem comissões escondidas.",
          },
          {
            n: "04",
            t: "Criamos comunidade",
            d: "Somos uma rede viva de criadores, produtores, chefs, artistas e viajantes que amam o Oeste de Portugal.",
          },
        ]
      : [
          {
            n: "01",
            t: "We discover",
            d: "We roam the West looking for what's not in any guidebook. Places, people, moments — raw and unfiltered.",
          },
          {
            n: "02",
            t: "We write",
            d: "Every place earns a story. Not reviews. Not lists. Narrative from people who know and respect the territory.",
          },
          {
            n: "03",
            t: "We introduce",
            d: "We connect our audience directly to local partners — no middlemen, no hidden commissions.",
          },
          {
            n: "04",
            t: "We build community",
            d: "We're a living network of creators, producers, chefs, artists and travellers who love Portugal's West Coast.",
          },
        ];

  return (
    <section className="bg-ocean-900 text-cream-50">
      <div className="container py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.22em] text-cream-50/60">
            {lang === "pt" ? "O que somos" : "What we are"}
          </p>
          <h2 className="mt-5 font-display tracking-tighter2 text-fluid-h1 leading-[1]">
            {lang === "pt" ? (
              <>
                Blog. Rede local.
                <br />
                <span className="font-serif-display italic text-sunset-200">Sem filtros.</span>
              </>
            ) : (
              <>
                Blog. Local network.
                <br />
                <span className="font-serif-display italic text-sunset-200">No filters.</span>
              </>
            )}
          </h2>
          <p className="mt-6 text-cream-50/70 text-[16px] leading-relaxed max-w-xl">
            {lang === "pt"
              ? "O Oeste Local é um blog de lifestyle e uma rede de parceiros no Oeste de Portugal. Não vendemos tours. Contamos histórias e apresentamos as pessoas que fazem este território ser único."
              : "Oeste Local is a lifestyle blog and a local partner network on Portugal's West Coast. We don't sell tours. We tell stories and introduce the people who make this territory unique."}
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-4 gap-6">
          {pillars.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="border-t border-cream-50/15 pt-5"
            >
              <div className="font-serif-display italic text-sunset-200 text-[42px] leading-none">{s.n}</div>
              <div className="mt-3 font-display text-[20px]">{s.t}</div>
              <p className="mt-2 text-[14px] text-cream-50/70 leading-relaxed">{s.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
