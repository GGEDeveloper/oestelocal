"use client";
import * as React from "react";
import Image from "next/image";
import { useLang } from "@/lib/i18n";

type Post = {
  id: string;
  media_url: string;
  permalink: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  thumbnail_url?: string;
};

// Editorial fallback (entra automaticamente quando o token IG não está configurado).
// Estes 6 itens espelham os reels reais do @oestelocal (mock — actualizam-se via /api/instagram/feed).
const fallbackPosts: Post[] = [
  {
    id: "1",
    media_url: "/img/trilho.jpg",
    permalink: "https://instagram.com/oestelocal/reel/DXZab_gDIHQ/",
    caption: "Save this for your next trip to Portugal.",
    media_type: "VIDEO",
  },
  {
    id: "2",
    media_url: "/img/baleal.jpg",
    permalink: "https://instagram.com/oestelocal/reel/DW8_OjmjCS7/",
    caption: "Vacation mode: ON. Baleal.",
    media_type: "VIDEO",
  },
  {
    id: "3",
    media_url: "/img/ceramica.jpg",
    permalink: "https://instagram.com/oestelocal/reel/DXfUIFFjIXm/",
    caption: "Caldas hits different. Local craft. No filters.",
    media_type: "VIDEO",
  },
  {
    id: "4",
    media_url: "/img/bombarral.jpg",
    permalink: "https://instagram.com/oestelocal/reel/DXAGG9YjPyE/",
    caption: "This hidden place in Portugal feels unreal.",
    media_type: "VIDEO",
  },
  {
    id: "5",
    media_url: "/img/foz.jpg",
    permalink: "https://instagram.com/oestelocal/reel/DXcjlRxDLai/",
    caption: "Sometimes you just stop... and life surprises you.",
    media_type: "VIDEO",
  },
  {
    id: "6",
    media_url: "/img/concerto.jpg",
    permalink: "https://instagram.com/oestelocal/reel/DXT-OXLDHD-/",
    caption: "Kumpania Algazarra at Latitudes. Óbidos no mapa.",
    media_type: "VIDEO",
  },
];

export function InstagramFeed() {
  const { t, lang } = useLang();
  const [posts, setPosts] = React.useState<Post[]>(fallbackPosts);
  const [live, setLive] = React.useState(false);

  React.useEffect(() => {
    let active = true;
    fetch("/api/instagram/feed")
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (!active || !data?.data?.length) return;
        setPosts(data.data.slice(0, 6));
        setLive(true);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);

  return (
    <section className="container py-24 md:py-32">
      <div className="flex items-end justify-between gap-6 mb-10">
        <div>
          <p className="pill">
            <span className={`inline-block h-1.5 w-1.5 rounded-full ${live ? "bg-emerald-500" : "bg-sunset-500"}`} />
            {live ? (lang === "pt" ? "Ao vivo do Instagram" : "Live from Instagram") : "@oestelocal"}
          </p>
          <h2 className="mt-6 font-display tracking-tighter2 text-fluid-h1 leading-[1]">{t("feed.title")}</h2>
          <p className="mt-4 text-ink/70 max-w-xl">{t("feed.lede")}</p>
        </div>
        <a
          href="https://instagram.com/oestelocal"
          target="_blank"
          rel="noopener"
          className="hidden md:inline-flex link-under text-[13px]"
        >
          {t("cta.instagram")} →
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
        {posts.map((p) => (
          <a
            key={p.id}
            href={p.permalink}
            target="_blank"
            rel="noopener"
            className="group relative block overflow-hidden rounded-xl bg-cream-100"
            title={p.caption}
          >
            <div className="relative ratio-9-16">
              <Image
                src={p.thumbnail_url || p.media_url}
                alt={p.caption ?? "Instagram post"}
                fill
                sizes="(min-width: 1024px) 16vw, 33vw"
                className="object-cover transition duration-700 group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent" />
              {p.caption && (
                <div className="absolute inset-x-0 bottom-0 p-3 text-cream-50 text-[11px] line-clamp-2 leading-snug">
                  {p.caption}
                </div>
              )}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
