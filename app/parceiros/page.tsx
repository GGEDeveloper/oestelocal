import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { partners } from "@/lib/data";
import { ContactCTA } from "@/components/ContactCTA";

export const metadata: Metadata = {
  title: "Parceiros locais",
  description:
    "Hospedagem, gastronomia, bem-estar, arte, cultura e vinho. Os parceiros locais que tornam a Oeste Local possível.",
};

export default function PartnersIndex() {
  return (
    <>
      <section className="container pt-12 md:pt-20">
        <p className="pill">Parceiros</p>
        <h1 className="mt-6 font-display tracking-tighter2 text-fluid-h1 leading-[1] max-w-3xl">
          As pessoas <span className="font-serif-display italic text-sunset-600">por trás dos sítios</span>.
        </h1>
        <p className="mt-6 max-w-xl text-ink/70 text-[16px] leading-relaxed">
          Conhecemos cada um pelo nome — e tu também vais conhecer.
        </p>
      </section>

      <section className="container py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {partners.map((p) => (
          <Link
            key={p.slug}
            href={`/parceiros/${p.slug}`}
            className="group rounded-card overflow-hidden border hairline bg-cream-50 shadow-card"
          >
            <div className="relative ratio-3-2">
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes="(min-width: 1024px) 33vw, 50vw"
                className="object-cover transition duration-700 group-hover:scale-[1.04]"
              />
            </div>
            <div className="p-5">
              <div className="text-[11px] uppercase tracking-[0.18em] text-ink/55">{p.category} · {p.city}</div>
              <h3 className="mt-1.5 font-display text-[22px] tracking-tightish leading-tight">{p.name}</h3>
              <p className="mt-2 text-[14px] text-ink/70 leading-relaxed">{p.description.pt}</p>
              <div className="mt-4 flex items-center justify-between text-[12px] uppercase tracking-[0.16em]">
                <span className="text-ink/50">@{p.instagram}</span>
                <span className="link-under">Conhecer →</span>
              </div>
            </div>
          </Link>
        ))}
      </section>

      <ContactCTA />
    </>
  );
}
