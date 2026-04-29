import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { experiences, getExperience, getDestination, getPartner } from "@/lib/data";
import { ExperienceCard } from "@/components/ExperienceCard";
import { ContactCTA } from "@/components/ContactCTA";
import { ExperienceJsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return experiences.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const e = getExperience(slug);
  if (!e) return { title: "Não encontrado" };
  return {
    title: e.title.pt,
    description: e.short.pt,
    openGraph: { title: e.title.pt, description: e.short.pt, images: [e.image] },
  };
}

export default async function ExperienceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const e = getExperience(slug);
  if (!e) return notFound();
  const dest = getDestination(e.destination);
  const partner = e.partner ? getPartner(e.partner) : null;
  const related = experiences.filter((x) => x.category === e.category && x.slug !== e.slug).slice(0, 3);

  return (
    <article>
      <ExperienceJsonLd slug={e.slug} />
      {/* Hero */}
      <section className="relative isolate">
        <div className="relative h-[60vh] min-h-[480px] w-full">
          <Image src={e.image} alt={e.title.pt} fill priority className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />
        </div>
        <div className="container -mt-32 relative pb-12">
          <div className="max-w-3xl text-cream-50">
            <Link href="/experiencias" className="text-[12px] uppercase tracking-[0.18em] text-cream-50/80 link-under">
              ← Experiências
            </Link>
            <h1 className="mt-4 font-display text-fluid-h1 leading-[0.98] tracking-tighter2">{e.title.pt}</h1>
            <p className="mt-4 text-[18px] text-cream-50/85 max-w-2xl">{e.short.pt}</p>
          </div>
        </div>
      </section>

      <section className="container grid md:grid-cols-12 gap-10 pb-20">
        <div className="md:col-span-7">
          <p className="text-[11px] uppercase tracking-[0.2em] text-ink/55">A história</p>
          <p className="mt-4 font-serif-display text-[22px] md:text-[26px] leading-snug">{e.story.pt}</p>

          <div className="mt-10 grid sm:grid-cols-2 gap-3">
            <a className="btn-primary justify-center" href="https://wa.me/351000000000" target="_blank" rel="noopener">
              Reservar pelo WhatsApp →
            </a>
            <Link href="/contacto" className="btn-ghost justify-center">
              Pedir proposta personalizada
            </Link>
          </div>
        </div>

        <aside className="md:col-span-5 md:pl-8 md:border-l hairline">
          <dl className="grid grid-cols-2 gap-y-5 gap-x-6 text-[14px]">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.18em] text-ink/55">Categoria</dt>
              <dd className="mt-1 capitalize">{e.category}</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.18em] text-ink/55">Duração</dt>
              <dd className="mt-1">{e.duration.pt}</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.18em] text-ink/55">Grupo</dt>
              <dd className="mt-1">{e.group.pt}</dd>
            </div>
            {dest && (
              <div>
                <dt className="text-[11px] uppercase tracking-[0.18em] text-ink/55">Destino</dt>
                <dd className="mt-1">
                  <Link href={`/destinos/${dest.slug}`} className="link-under">
                    {dest.name.pt}
                  </Link>
                </dd>
              </div>
            )}
            {partner && (
              <div className="col-span-2">
                <dt className="text-[11px] uppercase tracking-[0.18em] text-ink/55">Parceiro</dt>
                <dd className="mt-1">
                  <Link href={`/parceiros/${partner.slug}`} className="link-under">
                    {partner.name}
                  </Link>{" "}
                  · <span className="text-ink/65">{partner.role.pt}</span>
                </dd>
              </div>
            )}
          </dl>

          <p className="mt-10 text-[13px] text-ink/55 leading-relaxed">
            Sem custos escondidos. O preço inclui transporte porta-a-porta na região, curadoria personalizada e a
            ligação direta ao parceiro local.
          </p>
        </aside>
      </section>

      {related.length > 0 && (
        <section className="container py-16 border-t hairline">
          <h2 className="font-display text-fluid-h2 tracking-tightish">Continua a explorar</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {related.map((r) => (
              <ExperienceCard key={r.slug} e={r} />
            ))}
          </div>
        </section>
      )}

      <ContactCTA />
    </article>
  );
}
