"use client";
import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/lib/data";
import { useLang } from "@/lib/i18n";

export function DestinationsBlock() {
  const { lang } = useLang();
  return (
    <section className="container py-24 md:py-32">
      <div className="max-w-2xl">
        <p className="pill">{lang === "pt" ? "Geografia emocional" : "Emotional geography"}</p>
        <h2 className="mt-6 font-display tracking-tighter2 text-fluid-h1 leading-[1]">
          {lang === "pt" ? (
            <>
              Sete sítios que <span className="font-serif-display italic text-ocean-600">conhecemos pelo nome</span>.
            </>
          ) : (
            <>
              Seven places we <span className="font-serif-display italic text-ocean-600">know by name</span>.
            </>
          )}
        </h2>
      </div>

      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {destinations.map((d, i) => (
          <Link
            key={d.slug}
            href={`/destinos/${d.slug}`}
            className={`group relative block overflow-hidden rounded-card border hairline ${
              i === 0 ? "lg:col-span-2 lg:row-span-2" : ""
            }`}
          >
            <div className={`relative ${i === 0 ? "aspect-[16/12] lg:aspect-[16/10]" : "aspect-[4/5]"}`}>
              <Image
                src={d.image}
                alt={d.name[lang]}
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-cream-50">
                <div className="text-[11px] uppercase tracking-[0.18em] opacity-75">{d.region[lang]}</div>
                <div className="font-display text-[28px] mt-1 leading-tight tracking-tightish">{d.name[lang]}</div>
                <div className="text-[14px] opacity-90 mt-1 max-w-md">{d.tagline[lang]}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
