import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { partners, getPartner, experiences } from "@/lib/data";
import { ExperienceCard } from "@/components/ExperienceCard";
import { ContactCTA } from "@/components/ContactCTA";
import { PartnerJsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return partners.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const p = getPartner(slug);
  if (!p) return { title: "Não encontrado" };
  return {
    title: `${p.name} — ${p.role.pt}`,
    description: p.description.pt,
    openGraph: { title: p.name, description: p.description.pt, images: [p.image] },
  };
}

export default async function PartnerDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getPartner(slug);
  if (!p) return notFound();
  const linked = experiences.filter((e) => e.partner === p.slug);

  return (
    <article>
      <PartnerJsonLd slug={p.slug} />
      <section className="container pt-10 md:pt-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-7">
          <Link href="/parceiros" className="text-[12px] uppercase tracking-[0.18em] text-ink/55 link-under">
            ← Parceiros
          </Link>
          <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-ink/55">
            {p.category} · {p.city}
          </p>
          <h1 className="mt-3 font-display text-fluid-h1 leading-[0.98] tracking-tighter2">{p.name}</h1>
          <p className="mt-3 font-serif-display italic text-[20px] text-ocean-600">{p.role.pt}</p>
          <p className="mt-7 text-[18px] leading-relaxed text-ink/85 max-w-xl">{p.description.pt}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="btn-primary"
              href={`https://instagram.com/${p.instagram}`}
              target="_blank"
              rel="noopener"
            >
              @{p.instagram}
            </a>
            <Link href="/contacto" className="btn-ghost">
              Reservar via Oeste Local
            </Link>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] overflow-hidden rounded-card">
            <Image src={p.image} alt={p.name} fill sizes="40vw" className="object-cover" />
          </div>
        </div>
      </section>

      {linked.length > 0 && (
        <section className="container py-20 mt-12 border-t hairline">
          <h2 className="font-display text-fluid-h2 tracking-tightish">Experiências com {p.name}</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {linked.map((e) => (
              <ExperienceCard key={e.slug} e={e} />
            ))}
          </div>
        </section>
      )}

      <ContactCTA />
    </article>
  );
}
