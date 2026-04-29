import type { Metadata } from "next";
import { DestinationsBlock } from "@/components/DestinationsBlock";
import { ContactCTA } from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Destinos do Oeste",
  description:
    "Óbidos, Peniche, Nazaré, Caldas da Rainha, Foz do Arelho, Baleal e Bombarral — sete sítios que conhecemos pelo nome.",
};

export default function DestinationsPage() {
  return (
    <>
      <section className="container pt-12 md:pt-20">
        <p className="pill">Destinos</p>
        <h1 className="mt-6 font-display tracking-tighter2 text-fluid-h1 leading-[1] max-w-3xl">
          O Oeste em sete sítios — e mil pequenas obsessões.
        </h1>
      </section>
      <DestinationsBlock />
      <ContactCTA />
    </>
  );
}
