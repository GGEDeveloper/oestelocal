import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: "https://oestelocal.com/sitemap.xml",
    host: "https://oestelocal.com",
  };
}
