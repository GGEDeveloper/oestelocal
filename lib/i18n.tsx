"use client";
import * as React from "react";

export type Lang = "pt" | "en";

type Dict = { [k: string]: string | Dict };

const dict: Record<Lang, Dict> = {
  pt: {
    nav: {
      experiencias: "Experiências",
      destinos: "Destinos",
      parceiros: "Parceiros",
      diario: "Diário",
      sobre: "Sobre",
      contacto: "Contacto",
    },
    cta: {
      primary: "Reservar a tua viagem",
      whatsapp: "Falar pelo WhatsApp",
      instagram: "Ver no Instagram",
      explore: "Explorar",
      readMore: "Continuar a ler",
      back: "Voltar",
    },
    hero: {
      eyebrow: "Experiências no Oeste — Costa de Prata",
      title: "O Oeste que os guias\nnão sabem que existe.",
      lede:
        "Curadoria emocional de lugares, pessoas e momentos entre Óbidos, Peniche, Nazaré e Caldas da Rainha. Tratamos de tudo — só tens de aparecer.",
      stat1: "27 lugares secretos",
      stat2: "8 parceiros locais",
      stat3: "100% raw, sem filtros",
    },
    categories: {
      title: "Vem para sentir.\nNão para cumprir uma checklist.",
      lede:
        "Não vendemos tours. Vendemos quatro maneiras de habitar o Oeste — escolhe a tua.",
      desacelerar: { name: "Desacelerar", text: "Spa, banhos, vinhas, lentidão." },
      descobrir: { name: "Descobrir", text: "Trilhos, falésias, sítios sem sinal." },
      mergulhar: { name: "Mergulhar", text: "Surf, ondas, oceano frio." },
      celebrar: { name: "Celebrar", text: "Concertos, festivais, mesas longas." },
    },
    experiences: {
      title: "Experiências em curadoria",
      lede:
        "Cada experiência é desenhada com um parceiro local. Pequenos grupos. Sem pressa.",
      seeAll: "Ver tudo",
    },
    partners: {
      title: "As pessoas por trás dos sítios",
      lede:
        "Não somos uma plataforma. Conhecemos cada parceiro pelo nome — e tu também vais conhecer.",
    },
    feed: {
      title: "Diário de campo",
      lede: "Direto do nosso Instagram, atualizado em tempo real.",
    },
    contact: {
      title: "Diz-nos quando vens.",
      lede:
        "Respondemos em poucas horas. Tratamos de transporte, reservas e dos sítios certos para ti.",
      name: "Nome",
      email: "Email",
      message: "O que procuras?",
      send: "Enviar",
      sending: "A enviar…",
      sent: "Recebido — falamos contigo em breve.",
    },
    footer: {
      tagline: "Experiências no Oeste de Portugal.",
      rights: "Todos os direitos reservados.",
    },
  },
  en: {
    nav: {
      experiencias: "Experiences",
      destinos: "Destinations",
      parceiros: "Partners",
      diario: "Journal",
      sobre: "About",
      contacto: "Contact",
    },
    cta: {
      primary: "Plan your trip",
      whatsapp: "Chat on WhatsApp",
      instagram: "See on Instagram",
      explore: "Explore",
      readMore: "Keep reading",
      back: "Back",
    },
    hero: {
      eyebrow: "Experiences on Portugal's West Coast",
      title: "The West Coast Portugal\ndoesn't put on the map.",
      lede:
        "Emotional curation of places, people and moments between Óbidos, Peniche, Nazaré and Caldas da Rainha. We take care of everything — you just show up.",
      stat1: "27 secret spots",
      stat2: "8 local partners",
      stat3: "100% raw, no filters",
    },
    categories: {
      title: "Come to feel.\nNot to tick a checklist.",
      lede:
        "We don't sell tours. We offer four ways to inhabit the West — pick yours.",
      desacelerar: { name: "Slow down", text: "Spa, baths, vineyards, slowness." },
      descobrir: { name: "Discover", text: "Trails, cliffs, places off-grid." },
      mergulhar: { name: "Dive in", text: "Surf, swells, the cold Atlantic." },
      celebrar: { name: "Celebrate", text: "Concerts, festivals, long tables." },
    },
    experiences: {
      title: "Curated experiences",
      lede:
        "Each experience is designed with a local partner. Small groups. No rush.",
      seeAll: "See all",
    },
    partners: {
      title: "The people behind the places",
      lede:
        "We're not a marketplace. We know every partner by name — and so will you.",
    },
    feed: {
      title: "Field journal",
      lede: "Live from our Instagram, updating in real time.",
    },
    contact: {
      title: "Tell us when you're coming.",
      lede:
        "We reply within a few hours. Transport, bookings, the right spots — handled.",
      name: "Name",
      email: "Email",
      message: "What are you looking for?",
      send: "Send",
      sending: "Sending…",
      sent: "Got it — we'll be in touch shortly.",
    },
    footer: {
      tagline: "Experiences on Portugal's West Coast.",
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
