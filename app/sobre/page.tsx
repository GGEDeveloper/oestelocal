import type { Metadata } from "next";
import Image from "next/image";
import { ContactCTA } from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Blog de lifestyle sobre o Oeste de Portugal — histórias, sítios e parceiros locais, sem posição de agência de viagens.",
};

export default function AboutPage() {
  return (
    <>
      <section className="container pt-12 md:pt-20 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-7">
          <p className="pill">Sobre nós</p>
          <h1 className="mt-6 font-display tracking-tighter2 text-fluid-hero leading-[0.96]">
            Não somos uma agência de viagens.
            <br />
            <span className="font-serif-display italic text-ocean-600">Somos um blog de lifestyle com parceiros no Oeste.</span>
          </h1>
          <p className="mt-7 font-serif-display text-[22px] md:text-[26px] leading-snug">
            Crescemos aqui. Conhecemos os locais quando fecham. Sabemos a hora do mar para Supertubos, o dia em que a
            Sandra do SilverCoast SPA tem janela e a estrada que leva ao mural da @cmarie.pt sem turistas.
          </p>

          <div className="mt-10 space-y-5 text-[16px] leading-relaxed text-ink/80 max-w-2xl">
            <p>
              A Oeste Local nasceu da diferença entre o que o Google mostra e o que o Oeste é. Os guias listam três
              restaurantes, dois castelos e um festival. Nós damos-te a noite em que a Kumpania Algazarra toca dentro
              de muralhas medievais, o caminho que levou 17 mil pessoas a parar o scroll, e a manhã em que o oceano fica
              de outro planeta.
            </p>
            <p>
              O que publicamos é curadoria editorial: texto, imagem e voz. Quando há parceiros envolvidos, são pessoas e
              negócios que conhecemos — mas marcações, horários e acertos ficam sempre na conversa contigo e com eles.
              Não montamos grupos nem roteiros fechados; sugerimos o que vale a pena sentir.
            </p>
          </div>
        </div>

        <aside className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-card">
            <Image
              src="https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?auto=format&fit=crop&w=1200&q=80"
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
