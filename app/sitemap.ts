import type { MetadataRoute } from "next";
import { destinations, experiences, partners } from "@/lib/data";

const BASE = "https://oestelocal.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes = [
    "",
    "/experiencias",
    "/destinos",
    "/parceiros",
    "/sobre",
    "/contacto",
    "/diario",
  ].map((p) => ({
    url: `${BASE}${p}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.8,
  }));

  const dyn = [
    ...experiences.map((e) => ({
      url: `${BASE}/experiencias/${e.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...destinations.map((d) => ({
      url: `${BASE}/destinos/${d.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...partners.map((p) => ({
      url: `${BASE}/parceiros/${p.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];

  return [...staticRoutes, ...dyn];
}
