"use client";
import * as React from "react";

export type Lang = "pt" | "en";

type Dict = { [k: string]: string | Dict };

const dict: Record<Lang, Dict> = {
  pt: {
    nav: {
      experiencias: "Descobrir",
      destinos: "Destinos",
      parceiros: "Parceiros",
      diario: "Diário",
      sobre: "Sobre",
      contacto: "Contacto",
    },
    cta: {
      primary: "Explorar o Oeste",
      whatsapp: "Falar pelo WhatsApp",
      instagram: "Ver no Instagram",
      explore: "Explorar",
      readMore: "Continuar a ler",
      back: "Voltar",
    },
    hero: {
      eyebrow: "Blog de lifestyle — Costa de Prata, Portugal",
      title: "O Oeste que os guias\nnão sabem que existe.",
      lede:
        "Lugares escondidos, pessoas reais e momentos que não cabem num roteiro. Entre Óbidos, Peniche, Nazaré e Caldas da Rainha — contamos o Oeste como ele é.",
      stat1: "27 lugares secretos",
      stat2: "8 parceiros locais",
      stat3: "100% raw, sem filtros",
    },
    categories: {
      title: "Vem para sentir.\nNão para cumprir uma checklist.",
      lede:
        "Quatro formas de habitar o Oeste — escolhe a que ressoa contigo e descobre o que não está nos guias.",
      desacelerar: { name: "Desacelerar", text: "SPA, banhos termais, vinhas, lentidão." },
      descobrir: { name: "Descobrir", text: "Trilhos, falésias, sítios sem sinal." },
      mergulhar: { name: "Mergulhar", text: "Surf, ondas, oceano frio." },
      celebrar: { name: "Celebrar", text: "Concertos, festivais, mesas longas." },
    },
    places: {
      title: "Lugares & momentos",
      lede:
        "Curadoria editorial de sítios, pessoas e experiências no Oeste de Portugal.",
      seeAll: "Ver tudo",
    },
    partners: {
      title: "As pessoas por trás dos sítios",
      lede:
        "Não somos uma plataforma. Conhecemos cada parceiro pelo nome — e apresentamo-los a ti.",
    },
    feed: {
      title: "Diário de campo",
      lede: "Direto do nosso Instagram, atualizado em tempo real.",
    },
    contact: {
      title: "Fala connosco.",
      lede:
        "Tens uma dica, queres ser parceiro, ou só queres saber mais sobre o Oeste? Estamos aqui.",
      name: "Nome",
      email: "Email",
      message: "O que tens em mente?",
      send: "Enviar",
      sending: "A enviar…",
      sent: "Recebido — respondemos em breve.",
    },
    about: {
      title: "Sobre o Oeste Local",
      lede:
        "Somos um blog de lifestyle e uma rede de parceiros locais no Oeste de Portugal. Descobrimos, escrevemos e apresentamos — o transporte fica ao teu critério, mas se precisares, temos uma app para isso.",
    },
    footer: {
      tagline: "Lifestyle e descoberta no Oeste de Portugal.",
      rights: "Todos os direitos reservados.",
    },
  },
  en: {
    nav: {
      experiencias: "Discover",
      destinos: "Destinations",
      parceiros: "Partners",
      diario: "Journal",
      sobre: "About",
      contacto: "Contact",
    },
    cta: {
      primary: "Explore the West",
      whatsapp: "Chat on WhatsApp",
      instagram: "See on Instagram",
      explore: "Explore",
      readMore: "Keep reading",
      back: "Back",
    },
    hero: {
      eyebrow: "Lifestyle blog — Silver Coast, Portugal",
      title: "The West Coast Portugal\ndoesn't put on the map.",
      lede:
        "Hidden places, real people and moments that don't fit in a guidebook. Between Óbidos, Peniche, Nazaré and Caldas da Rainha — we tell the West as it is.",
      stat1: "27 secret spots",
      stat2: "8 local partners",
      stat3: "100% raw, no filters",
    },
    categories: {
      title: "Come to feel.\nNot to tick a checklist.",
      lede:
        "Four ways to inhabit the West — choose the one that resonates and discover what's not in any guidebook.",
      desacelerar: { name: "Slow down", text: "Spa, thermal baths, vineyards, slowness." },
      descobrir: { name: "Discover", text: "Trails, cliffs, places off-grid." },
      mergulhar: { name: "Dive in", text: "Surf, swells, the cold Atlantic." },
      celebrar: { name: "Celebrate", text: "Concerts, festivals, long tables." },
    },
    places: {
      title: "Places & moments",
      lede:
        "Editorial curation of spots, people and experiences on Portugal's West Coast.",
      seeAll: "See all",
    },
    partners: {
      title: "The people behind the places",
      lede:
        "We're not a marketplace. We know every partner by name — and we'll introduce you.",
    },
    feed: {
      title: "Field journal",
      lede: "Live from our Instagram, updating in real time.",
    },
    contact: {
      title: "Talk to us.",
      lede:
        "Got a tip, want to become a partner, or just want to know more about the West? We're here.",
      name: "Name",
      email: "Email",
      message: "What's on your mind?",
      send: "Send",
      sending: "Sending…",
      sent: "Got it — we'll be in touch.",
    },
    about: {
      title: "About Oeste Local",
      lede:
        "We're a lifestyle blog and a network of local partners on Portugal's West Coast. We discover, write and introduce — transport is up to you, but if you need it, we have an app for that.",
    },
    footer: {
      tagline: "Lifestyle & discovery on Portugal's West Coast.",
      rights: "All rights reserved.",
    },
  },
};

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (path: string) => string;
};

const LangCtx = React.createContext<Ctx | null>(null);

function lookup(d: Dict, path: string): string {
  return path.split(".").reduce<any>((acc, k) => (acc && acc[k] !== undefined ? acc[k] : path), d) as string;
}

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = React.useState<Lang>("pt");
  React.useEffect(() => {
    const stored = typeof window !== "undefined" ? document.cookie.match(/lang=(pt|en)/)?.[1] as Lang | undefined : undefined;
    if (stored && stored !== lang) setLang(stored);
    // eslint-disable-next-line
  }, []);
  const handle = React.useCallback((l: Lang) => {
    setLang(l);
    if (typeof document !== "undefined") {
      document.cookie = `lang=${l}; path=/; max-age=31536000`;
      document.documentElement.lang = l === "pt" ? "pt-PT" : "en";
    }
  }, []);
  const t = React.useCallback(
    (path: string) => {
      const v = lookup(dict[lang], path);
      return typeof v === "string" ? v : path;
    },
    [lang]
  );
  return <LangCtx.Provider value={{ lang, setLang: handle, t }}>{children}</LangCtx.Provider>;
}

export function useLang() {
  const ctx = React.useContext(LangCtx);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
}
