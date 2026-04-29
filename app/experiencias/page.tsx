import { Suspense } from "react";
import type { Metadata } from "next";
import { experiences } from "@/lib/data";
import { ExperiencesGrid } from "./ExperiencesGrid";

export const metadata: Metadata = {
  title: "Experiências",
  description:
    "Histórias e momentos no Oeste de Portugal — surf, gastronomia, bem-estar, cultura e natureza, em parceria com quem cá vive.",
};

export default function ExperiencesIndex() {
  return (
    <section className="container pt-12 md:pt-20 pb-24">
      <div className="max-w-3xl">
        <p className="pill">Experiências</p>
        <h1 className="mt-6 font-display tracking-tighter2 text-fluid-h1 leading-[1]">
          Cada história nasce com{" "}
          <span className="font-serif-display italic text-ocean-600">um parceiro que conhecemos</span>.
        </h1>
        <p className="mt-6 text-ink/70 max-w-xl text-[16px] leading-relaxed">
          Isto é arquivo editorial, não catálogo de pacotes. Filtra por categoria — ou segue o que te chama hoje.
        </p>
      </div>
      <Suspense fallback={<div className="mt-12 h-32" />}>
        <ExperiencesGrid items={experiences} />
      </Suspense>
    </section>
  );
}
