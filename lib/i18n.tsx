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
      primary: "Explorar o Oeste",
      whatsapp: "Falar connosco",
      instagram: "Ver no Instagram",
      explore: "Explorar",
      readMore: "Continuar a ler",
      back: "Voltar",
    },
    hero: {
      eyebrow: "Oeste Local — Costa de Prata",
      title: "O Oeste que os guias\ndeixam de fora.",
      lede:
        "Sítios, pessoas e momentos entre Óbidos, Peniche, Nazaré e Caldas da Rainha. Sem filtros. Sem pressa.",
      stat1: "27 lugares reais",
      stat2: "8 parceiros locais",
      stat3: "100% raw, sem filtros",
    },
    categories: {
      title: "Vem para sentir.\nNão para cumprir lista.",
      lede:
        "Quatro formas de estar no Oeste — escolhidas por quem vive aqui.",
      desacelerar: { name: "Desacelerar", text: "Spa, banhos, vinhas, lentidão." },
      descobrir: { name: "Descobrir", text: "Trilhos, falésias, sítios sem sinal." },
      mergulhar: { name: "Mergulhar", text: "Surf, ondas, oceano frio." },
      celebrar: { name: "Celebrar", text: "Concertos, festivais, mesas longas." },
    },
    experiences: {
      title: "Momentos que ficam",
      lede:
        "Sítios que descobrimos. Pessoas que conhecemos. Histórias que valem a viagem.",
      seeAll: "Explorar tudo",
    },
    partners: {
      title: "Quem faz o Oeste acontecer",
      lede:
        "Conhecemos cada parceiro pelo nome. São eles os protagonistas — nós só apontamos o caminho.",
    },
    feed: {
      title: "Diário de campo",
      lede: "Direto do nosso Instagram, atualizado em tempo real.",
    },
    contact: {
      title: "Vem partilhar o Oeste connosco.",
      lede:
        "Conta-nos o que descobriste ou o que procuras. Parceiros, sítios, histórias — estamos aqui.",
      name: "Nome",
      email: "Email",
      message: "O que procuras?",
      send: "Enviar",
      sending: "A enviar…",
      sent: "Recebido — falamos contigo em breve.",
    },
    about: {
      title: "Sobre o Oeste Local",
      lede:
        "Somos um blog de lifestyle sobre o Oeste de Portugal e uma rede leve de parceiros locais. Contamos histórias e damos a conhecer quem faz o território — marcações e combinações ficam sempre contigo e com eles, em conversa directa.",
    },
    footer: {
      tagline: "O Oeste que os guias deixam de fora.",
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
      primary: "Explore the West",
      whatsapp: "Talk to us",
      instagram: "See on Instagram",
      explore: "Explore",
      readMore: "Keep reading",
      back: "Back",
    },
    hero: {
      eyebrow: "Oeste Local — Portugal's Silver Coast",
      title: "The West Coast Portugal\nleaves off the map.",
      lede:
        "Places, people and moments between Óbidos, Peniche, Nazaré and Caldas da Rainha. No filters. No rush.",
      stat1: "27 real places",
      stat2: "8 local partners",
      stat3: "100% raw",
    },
    categories: {
      title: "Come to feel.\nNot to tick a list.",
      lede:
        "Four ways to be in the West — chosen by people who actually live here.",
      desacelerar: { name: "Slow down", text: "Spa, baths, vineyards, slowness." },
      descobrir: { name: "Discover", text: "Trails, cliffs, places off-grid." },
      mergulhar: { name: "Dive in", text: "Surf, swells, the cold Atlantic." },
      celebrar: { name: "Celebrate", text: "Concerts, festivals, long tables." },
    },
    experiences: {
      title: "Moments worth the trip",
      lede:
        "Places we found. People we met. Stories that make you pack your bag.",
      seeAll: "Explore all",
    },
    partners: {
      title: "The people making the West happen",
      lede:
        "We know every partner by name. They're the real protagonists — we just point the way.",
    },
    feed: {
      title: "Field journal",
      lede: "Live from our Instagram, updating in real time.",
    },
    contact: {
      title: "Come share the West with us.",
      lede:
        "Tell us what you found or what you're looking for. Partners, places, stories — we're here.",
      name: "Name",
      email: "Email",
      message: "What are you looking for?",
      send: "Send",
      sending: "Sending…",
      sent: "Got it — we'll be in touch shortly.",
    },
    about: {
      title: "About Oeste Local",
      lede:
        "We're a lifestyle blog about Portugal's West Coast and a light network of local partners we work with closely. We tell stories and introduce the people who shape the territory — bookings and arrangements stay between you and them, directly.",
    },
    footer: {
      tagline: "The West Coast Portugal leaves off the map.",
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
