import type { Metadata } from "next";
import Image from "next/image";
import { ContactCTA } from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "O Oeste Local nasceu da diferença entre o que o Google mostra e o que o Oeste é. Histórias, sítios e parceiros locais na Costa de Prata.",
};

export default function AboutPage() {
  return (
    <>
      <section className="container pt-12 md:pt-20 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-7">
          <p className="pill">Sobre nós</p>
          <h1 className="mt-6 font-display tracking-tighter2 text-fluid-hero leading-[0.96]">
            Crescemos aqui.
            <br />
            <span className="font-serif-display italic text-ocean-600">
              Conhecemos o Oeste quando fecha.
            </span>
          </h1>
          <p className="mt-7 font-serif-display text-[22px] md:text-[26px] leading-snug">
            Sabemos a hora do mar em Supertubos, o dia em que a Sandra do SilverCoast SPA
            tem janela, e a estrada que leva ao mural da @cmarie.pt sem turistas.
          </p>

          <div className="mt-10 space-y-5 text-[16px] leading-relaxed text-ink/80 max-w-2xl">
            <p>
              A Oeste Local nasceu da diferença entre o que o Google mostra e o que o Oeste
              é a sério. Os guias listam três restaurantes, dois castelos e um festival.
              Nós damos-te a noite em que a Kumpania Algazarra toca dentro de muralhas
              medievais, o caminho que levou 17 mil pessoas a parar o scroll, e a manhã em
              que o oceano fica de outro planeta.
            </p>
            <p>
              O que publicamos é editorial: texto, imagem e voz. Os parceiros que aqui
              aparecem são pessoas e negócios que conhecemos pelo nome — marcações,
              horários e conversas ficam sempre directamente entre ti e eles.
            </p>
          </div>
        </div>

        <aside className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-card">
            <Image
              src="/img/foz.jpg"
              alt="Foz do Arelho"
              fill
              sizes="40vw"
              className="object-cover"
            />
          </div>
          <dl className="mt-6 grid grid-cols-3 gap-4 text-[12px] uppercase tracking-[0.16em] text-ink/55">
            <div>
              <dt>Fundada em</dt>
              <dd className="mt-1 font-display text-[24px] tracking-tightish text-ink normal-case">2024</dd>
            </div>
            <div>
              <dt>Base</dt>
              <dd className="mt-1 font-display text-[24px] tracking-tightish text-ink normal-case">Caldas</dd>
            </div>
            <div>
              <dt>Idiomas</dt>
              <dd className="mt-1 font-display text-[24px] tracking-tightish text-ink normal-case">PT · EN</dd>
            </div>
          </dl>
        </aside>
      </section>

      <ContactCTA />
    </>
  );
}
