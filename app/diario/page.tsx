import type { Metadata } from "next";
import { InstagramFeed } from "@/components/InstagramFeed";
import { ContactCTA } from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Diário",
  description:
    "Reels, lugares e momentos no Oeste de Portugal. Direto do Instagram @oestelocal, em tempo real.",
};

export default function JournalPage() {
  return (
    <>
      <section className="container pt-12 md:pt-20">
        <p className="pill">Diário</p>
        <h1 className="mt-6 font-display tracking-tighter2 text-fluid-h1 leading-[1] max-w-3xl">
          O Oeste{" "}
          <span className="font-serif-display italic text-sunset-600">
            tal como acontece
          </span>
          .
        </h1>
        <p className="mt-6 max-w-xl text-ink/70 text-[16px] leading-relaxed">
          Reels, registos, fragmentos. Quando o Instagram publica, isto publica. Direto.
        </p>
      </section>

      <InstagramFeed />
      <ContactCTA />
    </>
  );
}
