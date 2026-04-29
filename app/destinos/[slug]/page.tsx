import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { destinations, getDestination, experiences } from "@/lib/data";
import { ExperienceCard } from "@/components/ExperienceCard";
import { ContactCTA } from "@/components/ContactCTA";
import { DestinationJsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const d = getDestination(slug);
  if (!d) return { title: "Não encontrado" };
  return {
    title: `${d.name.pt} — o que fazer`,
    description: d.tagline.pt,
    openGraph: { title: d.name.pt, description: d.tagline.pt, images: [d.image] },
  };
}

export default async function DestinationDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const d = getDestination(slug);
  if (!d) return notFound();
  const local = experiences.filter((e) => e.destination === d.slug);

  return (
    <article>
      <DestinationJsonLd slug={d.slug} />
      <section className="relative">
        <div className="relative h-[64vh] min-h-[520px] w-full">
          <Image src={d.image} alt={d.name.pt} fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />
        </div>
        <div className="container -mt-44 relative pb-10">
          <div className="max-w-3xl text-cream-50">
            <Link href="/destinos" className="text-[12px] uppercase tracking-[0.18em] text-cream-50/80 link-under">
              ← Destinos
            </Link>
            <p className="mt-3 text-[12px] uppercase tracking-[0.18em] text-cream-50/80">{d.region.pt}</p>
            <h1 className="mt-2 font-display text-fluid-hero leading-[0.95] tracking-tighter2">{d.name.pt}</h1>
            <p className="mt-4 font-serif-display italic text-[20px] md:text-[22px] text-sunset-200">
              {d.tagline.pt}
            </p>
          </div>
        </div>
      </section>

      <section className="container grid md:grid-cols-12 gap-10 pb-20">
        <div className="md:col-span-7">
          <p className="font-serif-display text-[22px] md:text-[26px] leading-snug">{d.intro.pt}</p>
        </div>
        <aside className="md:col-span-5 md:pl-8 md:border-l hairline">
          <p className="text-[11px] uppercase tracking-[0.2em] text-ink/55">Imperdível</p>
          <ul className="mt-4 space-y-3">
            {d.highlights.map((h, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sunset-500 flex-none" aria-hidden />
                <span className="text-[15px] leading-relaxed">{h.pt}</span>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      {local.length > 0 && (
        <section className="container py-16 border-t hairline">
          <h2 className="font-display text-fluid-h2 tracking-tightish">Experiências aqui</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {local.map((e) => (
              <ExperienceCard key={e.slug} e={e} />
            ))}
          </div>
        </section>
      )}

      <ContactCTA />
    </article>
  );
}
