import { destinations, experiences, partners } from "@/lib/data";

const BASE = "https://oestelocal.com";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Oeste Local",
    url: BASE,
    logo: `${BASE}/brand/logo_oestelocal_icon.png`,
    description:
      "Blog de lifestyle sobre o Oeste de Portugal — histórias, destinos e parceiros locais na Costa de Prata (Óbidos, Peniche, Nazaré, Caldas e arredores).",
    areaServed: ["Óbidos", "Peniche", "Nazaré", "Caldas da Rainha", "Bombarral", "Baleal", "Foz do Arelho", "Carvalhal"],
    sameAs: ["https://instagram.com/oestelocal"],
    address: {
      "@type": "PostalAddress",
      addressRegion: "Oeste",
      addressCountry: "PT",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function WebsiteJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Oeste Local",
    url: BASE,
    inLanguage: ["pt-PT", "en"],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function DestinationJsonLd({ slug }: { slug: string }) {
  const d = destinations.find((x) => x.slug === slug);
  if (!d) return null;
  const data = {
    "@context": "https://schema.org",
    "@type": "TouristDestination",
    name: d.name.pt,
    description: d.intro.pt,
    image: d.image,
    url: `${BASE}/destinos/${d.slug}`,
    touristType: ["Curious traveller", "Slow tourism", "Cultural tourism"],
    geo: { "@type": "GeoCoordinates", addressCountry: "PT" },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ExperienceJsonLd({ slug }: { slug: string }) {
  const e = experiences.find((x) => x.slug === slug);
  if (!e) return null;
  const data = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: e.title.pt,
    description: e.story.pt,
    image: e.image,
    url: `${BASE}/experiencias/${e.slug}`,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function PartnerJsonLd({ slug }: { slug: string }) {
  const p = partners.find((x) => x.slug === slug);
  if (!p) return null;
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: p.name,
    description: p.description.pt,
    image: p.image,
    url: `${BASE}/parceiros/${p.slug}`,
    address: { "@type": "PostalAddress", addressLocality: p.city, addressCountry: "PT" },
    sameAs: [`https://instagram.com/${p.instagram}`],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
