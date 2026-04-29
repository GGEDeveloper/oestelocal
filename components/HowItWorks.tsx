"use client";
import { useLang } from "@/lib/i18n";
import { motion } from "framer-motion";

export function HowItWorks() {
  const { lang } = useLang();

  const stories =
    lang === "pt"
      ? [
          {
            handle: "@silvercoastspa",
            title: "O refúgio da Sandra",
            body: "Transformou um espaço pequeno em Caldas num lugar que não se esquece. Silêncio a sério.",
          },
          {
            handle: "@oestelocal · 17K views",
            title: "O trilho que parou Portugal",
            body: "Um caminho fora do mapa. A 30 minutos de Óbidos. O reel de 17K views não te conta metade.",
          },
          {
            handle: "@tablescarvalhal",
            title: "Carvalhal tem uma mesa",
            body: "O chef sai da cozinha para te perguntar como correu o dia. Isto não se inventa.",
          },
          {
            handle: "@kumpaniaalgazarra · Latitudes",
            title: "Muralhas medievais com folk cigano",
            body: "Festival Latitudes, Óbidos. A Kumpania dentro do castelo é uma coisa que não se explica.",
          },
        ]
      : [
          {
            handle: "@silvercoastspa",
            title: "Sandra's refuge",
            body: "She turned a small space in Caldas into a place you don't forget. Real silence.",
          },
          {
            handle: "@oestelocal · 17K views",
            title: "The trail that stopped people",
            body: "An off-map path 30 minutes from Óbidos. The 17K-view reel doesn't tell half of it.",
          },
          {
            handle: "@tablescarvalhal",
            title: "Carvalhal has a table",
            body: "The chef walks out of the kitchen to ask how your day went. You can't make this up.",
          },
          {
            handle: "@kumpaniaalgazarra · Latitudes",
            title: "Medieval walls with gypsy folk",
            body: "Latitudes Festival, Óbidos. Kumpania inside the castle is something you can't describe.",
          },
        ];

  return (
    <section className="bg-ocean-900 text-cream-50">
      <div className="container py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.22em] text-cream-50/60">
            {lang === "pt" ? "Histórias do Oeste" : "Stories from the West"}
          </p>
          <h2 className="mt-5 font-display tracking-tighter2 text-fluid-h1 leading-[1]">
            {lang === "pt" ? (
              <>
                Momentos que vivemos.
                <br />
                <span className="font-serif-display italic text-sunset-200">
                  Que queres viver.
                </span>
              </>
            ) : (
              <>
                Moments we lived.
                <br />
                <span className="font-serif-display italic text-sunset-200">
                  That you'll want to live.
                </span>
              </>
            )}
          </h2>
          <p className="mt-6 text-cream-50/70 text-[16px] leading-relaxed max-w-xl">
            {lang === "pt"
              ? "O Oeste Local é um blog de lifestyle e uma rede de parceiros no Oeste de Portugal. Não vendemos tours. Contamos histórias e apresentamos as pessoas que fazem este território ser único."
              : "Oeste Local is a lifestyle blog and a local partner network on Portugal's West Coast. We don't sell tours. We tell stories and introduce the people who make this territory unique."}
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stories.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="border-t border-cream-50/15 pt-5"
            >
              <div className="text-[11px] uppercase tracking-[0.18em] text-sunset-200/80 mb-3">
                {s.handle}
              </div>
              <div className="font-display text-[20px] leading-tight">{s.title}</div>
              <p className="mt-2 text-[14px] text-cream-50/70 leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}