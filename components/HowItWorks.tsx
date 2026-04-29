"use client";
import { useLang } from "@/lib/i18n";
import { motion } from "framer-motion";

export function HowItWorks() {
  const { lang } = useLang();
  const steps =
    lang === "pt"
      ? [
          { n: "01", t: "Falas connosco", d: "Por DM, WhatsApp ou formulário. Em poucas horas voltamos com uma proposta." },
          { n: "02", t: "Curamos", d: "Combinamos parceiros, transporte e timing. Tudo num plano simples." },
          { n: "03", t: "Conduzimos", d: "Buscamos-te, ficamos contigo, levamos-te de volta. Sem stress, sem mapa." },
          { n: "04", t: "Vives", d: "Tu só tens de aparecer. Nós tratamos do resto." },
        ]
      : [
          { n: "01", t: "Talk to us", d: "DM, WhatsApp or the form. We come back with a proposal within hours." },
          { n: "02", t: "We curate", d: "We coordinate partners, transport and timing in one simple plan." },
          { n: "03", t: "We drive", d: "We pick you up, stay with you, take you back. No stress, no map." },
          { n: "04", t: "You live it", d: "You just show up. We handle the rest." },
        ];

  return (
    <section className="bg-ocean-900 text-cream-50">
      <div className="container py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.22em] text-cream-50/60">
            {lang === "pt" ? "Como funciona" : "How it works"}
          </p>
          <h2 className="mt-5 font-display tracking-tighter2 text-fluid-h1 leading-[1]">
            {lang === "pt" ? (
              <>
                Tu vens.
                <br />
                <span className="font-serif-display italic text-sunset-200">Nós tratamos.</span>
              </>
            ) : (
              <>
                You come.
                <br />
                <span className="font-serif-display italic text-sunset-200">We handle it.</span>
              </>
            )}
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
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
