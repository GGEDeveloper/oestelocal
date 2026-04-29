// Catálogo base — fontes: Space instructions + análise dos posts.
// Estes dados são editorial seeds. Mais tarde virão do Sanity CMS.

export type Locale = "pt" | "en";

type Bilingual = { pt: string; en: string };

export type Destination = {
  slug: string;
  name: Bilingual;
  region: Bilingual;
  tagline: Bilingual;
  intro: Bilingual;
  highlights: Bilingual[];
  image: string; // unsplash placeholder for now
};

export type Partner = {
  slug: string;
  name: string;
  role: Bilingual;
  city: string;
  instagram: string; // handle, no @
  description: Bilingual;
  category: "Hospedagem" | "Gastronomia" | "Bem-estar" | "Cultura" | "Arte" | "Vinho";
  image: string;
};

export type ExperienceCategory =
  | "desacelerar"
  | "descobrir"
  | "mergulhar"
  | "celebrar";

export type Experience = {
  slug: string;
  title: Bilingual;
  short: Bilingual;
  story: Bilingual;
  duration: Bilingual;
  group: Bilingual;
  destination: string; // slug
  partner?: string; // slug
  category: ExperienceCategory;
  image: string;
};

// Imagens locais (Wikimedia Commons — atribuição em /sobre).
// Substituir por fotografia editorial @oestelocal quando disponível.
const IMG = {
  obidos: "/img/obidos.jpg",
  peniche: "/img/peniche.jpg",
  nazare: "/img/nazare.jpg",
  caldas: "/img/caldas.jpg",
  foz: "/img/foz.jpg",
  baleal: "/img/baleal.jpg",
  bombarral: "/img/bombarral.jpg",
  spa: "/img/spa.jpg",
  ceramica: "/img/ceramica.jpg",
  trilho: "/img/trilho.jpg",
  vinho: "/img/vinho.jpg",
  surf: "/img/surf.jpg",
  concerto: "/img/concerto.jpg",
  mural: "/img/mural.jpg",
  flat23: "/img/flat23.jpg",
  tables: "/img/tables.jpg",
  buddha: "/img/bombarral.jpg",
};

export const destinations: Destination[] = [
  {
    slug: "obidos",
    name: { pt: "Óbidos", en: "Óbidos" },
    region: { pt: "Costa de Prata", en: "Silver Coast" },
    tagline: {
      pt: "Vila medieval, ginja, festivais à noite.",
      en: "Medieval village, ginja, festivals at night.",
    },
    intro: {
      pt: "Muralhas brancas com janelas azuis e amarelas, livrarias dentro de igrejas, ruas de pedra que cheiram a chocolate quando chega o festival. À noite, o castelo perde o turismo e ganha música — é aí que entramos.",
      en: "White walls with blue and yellow windows, bookstores inside churches, stone alleys smelling of chocolate during the festival. At night, the castle sheds the tourists and finds music — that's our cue.",
    },
    highlights: [
      { pt: "Festival Latitudes (16-19.04.26)", en: "Latitudes Festival (Apr 16-19, 2026)" },
      { pt: "Concertos noturnos no castelo", en: "Night concerts at the castle" },
      { pt: "Livraria Santiago", en: "Santiago bookstore-church" },
      { pt: "Caminhos do mural de @cmarie.pt", en: "Walks of @cmarie.pt's mural" },
    ],
    image: IMG.obidos,
  },
  {
    slug: "peniche",
    name: { pt: "Peniche", en: "Peniche" },
    region: { pt: "Costa de Prata", en: "Silver Coast" },
    tagline: {
      pt: "Supertubos, Berlengas, peixe direto da lota.",
      en: "Supertubos, Berlengas, fish straight from the dock.",
    },
    intro: {
      pt: "A península que aponta para o Atlântico como um cais. A ondulação é internacional, mas há uma manhã específica — luz baixa, vento parado — em que o mar fica de outro planeta. É aí que vamos.",
      en: "The peninsula that points into the Atlantic like a pier. The swell is world class, but there's one specific morning — low light, no wind — when the ocean turns alien. That's when we go.",
    },
    highlights: [
      { pt: "Supertubos (MEO Rip Curl Pro)", en: "Supertubos (MEO Rip Curl Pro)" },
      { pt: "Ilhas Berlengas (Reserva UNESCO)", en: "Berlengas islands (UNESCO Reserve)" },
      { pt: "Manhã de surf com instrutor local", en: "Sunrise surf with a local coach" },
      { pt: "Almoço no porto, sem ementa", en: "Harbor lunch, no menu, just the catch" },
    ],
    image: IMG.peniche,
  },
  {
    slug: "nazare",
    name: { pt: "Nazaré", en: "Nazaré" },
    region: { pt: "Costa de Prata", en: "Silver Coast" },
    tagline: {
      pt: "As ondas que mudaram o surf mundial.",
      en: "The waves that rewrote world surfing.",
    },
    intro: {
      pt: "O farol em cima da falésia onde se vêm partir gigantes do tamanho de prédios. No verão é vila piscatória, em Outubro é teatro. Levamos-te quando o mar faz sentido.",
      en: "The lighthouse atop the cliff where you watch building-sized giants break. In summer, a fishing village; in October, a theater. We take you when the ocean makes sense.",
    },
    highlights: [
      { pt: "Farol e Forte de São Miguel", en: "São Miguel lighthouse & fort" },
      { pt: "Praia do Norte (Big Wave)", en: "Praia do Norte (Big Wave)" },
      { pt: "Sítio velho — bordados e sete saias", en: "Sítio old town — embroideries & seven skirts" },
    ],
    image: IMG.nazare,
  },
  {
    slug: "caldas-da-rainha",
    name: { pt: "Caldas da Rainha", en: "Caldas da Rainha" },
    region: { pt: "Costa de Prata", en: "Silver Coast" },
    tagline: {
      pt: "Cerâmica, banhos termais e arte urbana.",
      en: "Ceramics, thermal baths and street art.",
    },
    intro: {
      pt: "A cidade onde o Bordallo fez história e onde a Sandra do SilverCoast SPA reescreve a tarde com vapor e silêncio. Nos azulejos da feira, na ginja do mercado, na cor inventada dos guarda-chuvas — Caldas é diferente.",
      en: "The city where Bordallo made history and where Sandra at SilverCoast SPA rewrites your afternoon with steam and silence. In the market tiles, the ginja stand, the impossible colors of hanging umbrellas — Caldas is different.",
    },
    highlights: [
      { pt: "SilverCoast SPA — pequeno, raw, intencional", en: "SilverCoast SPA — small, raw, intentional" },
      { pt: "Loja do Calho — cerâmica artesanal", en: "Loja do Calho — handcrafted ceramics" },
      { pt: "Parque D. Carlos I", en: "Parque D. Carlos I" },
      { pt: "Mural urbano da @cmarie.pt", en: "@cmarie.pt's mural" },
    ],
    image: IMG.caldas,
  },
  {
    slug: "foz-do-arelho",
    name: { pt: "Foz do Arelho", en: "Foz do Arelho" },
    region: { pt: "Costa de Prata", en: "Silver Coast" },
    tagline: {
      pt: "A lagoa de um lado, o Atlântico do outro.",
      en: "Lagoon on one side, Atlantic on the other.",
    },
    intro: {
      pt: "Há uma falésia onde, se parares, percebes que Portugal te surpreendeu sem aviso. Foi este reel que fez 17 mil views — e há muito mais que ele não mostra.",
      en: "There's a cliff where, if you stop, you realize Portugal surprised you without warning. This is the reel that hit 17K views — and it doesn't show half of what's there.",
    },
    highlights: [
      { pt: "Falésias e passadiços", en: "Cliffs and boardwalks" },
      { pt: "Lagoa de Óbidos — paddle ao pôr-do-sol", en: "Óbidos lagoon — sunset paddle" },
      { pt: "Praia da Bafureira (escondida)", en: "Bafureira beach (hidden)" },
    ],
    image: IMG.foz,
  },
  {
    slug: "baleal",
    name: { pt: "Baleal", en: "Baleal" },
    region: { pt: "Costa de Prata", en: "Silver Coast" },
    tagline: {
      pt: "Península de surf com vibe de aldeia.",
      en: "Surf peninsula with a village heart.",
    },
    intro: {
      pt: "Casas brancas, ondas dos dois lados, e bares onde o pôr-do-sol é a banda sonora. Vacation mode: ON.",
      en: "White houses, waves on both sides, bars where the sunset is the soundtrack. Vacation mode: ON.",
    },
    highlights: [
      { pt: "Lições de surf para iniciantes e intermédios", en: "Surf lessons — beginners & intermediate" },
      { pt: "Pôr-do-sol no istmo", en: "Sunset at the isthmus" },
      { pt: "Mariscada no Baleal Wave", en: "Seafood at Baleal Wave" },
    ],
    image: IMG.baleal,
  },
  {
    slug: "bombarral",
    name: { pt: "Bombarral", en: "Bombarral" },
    region: { pt: "Costa de Prata", en: "Silver Coast" },
    tagline: {
      pt: "Pera Rocha, vinho e Buddha Eden.",
      en: "Pera Rocha pears, wine, and Buddha Eden.",
    },
    intro: {
      pt: "O interior do Oeste — vinhas, frutas, e o maior jardim escultórico oriental da Europa. Em Carvalhal, há um restaurante onde o chef sai da cozinha para te perguntar como correu o dia.",
      en: "The inland West — vineyards, orchards, and Europe's largest oriental sculpture garden. In Carvalhal, there's a restaurant where the chef walks out to ask how your day went.",
    },
    highlights: [
      { pt: "Buddha Eden — 35 ha de esculturas", en: "Buddha Eden — 35 ha of sculpture park" },
      { pt: "Tables Carvalhal — cozinha de conforto", en: "Tables Carvalhal — comfort cooking" },
      { pt: "Flat23 — boutique apartment", en: "Flat23 — boutique apartment" },
      { pt: "Visitas a vinhas e licor de pera", en: "Vineyard visits & pear liqueur" },
    ],
    image: IMG.bombarral,
  },
];

export const partners: Partner[] = [
  {
    slug: "flat23-westcoast",
    name: "Flat23 Westcoast",
    role: { pt: "Boutique Apartment", en: "Boutique Apartment" },
    city: "Bombarral",
    instagram: "flat23westcoast",
    description: {
      pt: "Apartamento boutique a 45 min de Lisboa e 10 min de Óbidos. Pequeno, raro, sempre cheio.",
      en: "Boutique apartment 45 min from Lisbon, 10 min from Óbidos. Small, rare, always booked.",
    },
    category: "Hospedagem",
    image: IMG.flat23,
  },
  {
    slug: "tables-carvalhal",
    name: "Tables Carvalhal",
    role: { pt: "Bistrô · Café · Música ao vivo", en: "Bistro · Café · Live music" },
    city: "Carvalhal, Bombarral",
    instagram: "tablescarvalhal",
    description: {
      pt: "Cozinha portuguesa de conforto. O chef sai da cozinha para te conhecer. Avaliação 9.4.",
      en: "Portuguese comfort cooking. The chef walks out to meet you. Rated 9.4.",
    },
    category: "Gastronomia",
    image: IMG.tables,
  },
  {
    slug: "silvercoast-spa",
    name: "SilverCoast SPA",
    role: { pt: "SPA boutique", en: "Boutique SPA" },
    city: "Caldas da Rainha",
    instagram: "silvercoastspa",
    description: {
      pt: "Sandra Costa transformou um espaço pequeno num refúgio sensorial. Reserva é só por nós.",
      en: "Sandra Costa turned a tiny space into a sensory refuge. Booking only through us.",
    },
    category: "Bem-estar",
    image: IMG.spa,
  },
  {
    slug: "latitudes-obidos",
    name: "Festival Latitudes",
    role: { pt: "Festival de literatura e viajantes", en: "Literature & travel festival" },
    city: "Óbidos",
    instagram: "latitudesobidos",
    description: {
      pt: "16-19 Abril 2026. Quatro dias em que Óbidos vira aeroporto literário.",
      en: "April 16-19, 2026. Four days when Óbidos becomes a literary airport.",
    },
    category: "Cultura",
    image: IMG.concerto,
  },
  {
    slug: "kumpania-algazarra",
    name: "Kumpania Algazarra",
    role: { pt: "Banda folk portuguesa", en: "Portuguese folk band" },
    city: "Sintra · em digressão",
    instagram: "kumpaniaalgazarra",
    description: {
      pt: "Cigana, árabe, ska, latina. 10.8K seguidores. Conjugamos a tua viagem com os concertos deles.",
      en: "Gypsy, Arabic, ska, Latin. 10.8K followers. We sync your trip with their tour dates.",
    },
    category: "Cultura",
    image: IMG.concerto,
  },
  {
    slug: "cmarie-pt",
    name: "C Marie",
    role: { pt: "Artista visual — murais, ilustração, tattoo", en: "Visual artist — murals, illustration, tattoo" },
    city: "Caldas da Rainha · Lisboa",
    instagram: "cmarie.pt",
    description: {
      pt: "Constança Bettencourt. Pintou o mural que parou o trânsito em Caldas. 15.6K seguidores.",
      en: "Constança Bettencourt. Painted the mural that stopped Caldas traffic. 15.6K followers.",
    },
    category: "Arte",
    image: IMG.mural,
  },
  {
    slug: "loja-do-calho",
    name: "Loja do Calho",
    role: { pt: "Cerâmica artesanal", en: "Handcrafted ceramics" },
    city: "Caldas da Rainha",
    instagram: "lojadoca_lho",
    description: {
      pt: "Produção própria. Sem filtros. Não encontras isto em todo o lado.",
      en: "Made in-house. No filters. You don't find this everywhere.",
    },
    category: "Arte",
    image: IMG.ceramica,
  },
  {
    slug: "pera-no-peral",
    name: "Pera no Peral",
    role: { pt: "Produtor de pera Rocha & licor", en: "Pera Rocha grower & liqueur maker" },
    city: "Bombarral",
    instagram: "peranoperal",
    description: {
      pt: "A pera Rocha do Oeste tem DOP. Um licor a sério, em vinhas escondidas.",
      en: "Western Pera Rocha is DOP-protected. A serious liqueur, hidden among vineyards.",
    },
    category: "Vinho",
    image: IMG.vinho,
  },
];

export const experiences: Experience[] = [
  {
    slug: "spa-secreto-caldas",
    title: { pt: "SPA secreto em Caldas", en: "The hidden spa in Caldas" },
    short: {
      pt: "Reset sensorial com a Sandra. Recolha em Lisboa ou Óbidos.",
      en: "Sensory reset with Sandra. Pickup in Lisbon or Óbidos.",
    },
    story: {
      pt: "Buscamos-te ao alojamento. Conduzimos pela estrada das vinhas. Quando chegas, já está tudo pronto: vapor, silêncio e duas horas em que ninguém te interrompe. Voltamos buscar-te.",
      en: "We pick you up at your stay. Drive through the vineyard road. When you arrive, everything is ready: steam, silence and two hours where nobody interrupts you. Then we drive you back.",
    },
    duration: { pt: "Meio-dia", en: "Half day" },
    group: { pt: "1–4 pessoas", en: "1–4 people" },
    destination: "caldas-da-rainha",
    partner: "silvercoast-spa",
    category: "desacelerar",
    image: IMG.spa,
  },
  {
    slug: "supertubos-sunrise",
    title: { pt: "Supertubos ao amanhecer", en: "Supertubos sunrise surf" },
    short: {
      pt: "Aula com instrutor local quando o mar acorda perfeito.",
      en: "Lesson with a local coach when the ocean wakes up perfect.",
    },
    story: {
      pt: "Mensagem na noite anterior: amanhã às 6h45. Vem-te buscar uma carrinha. Pranchas dentro. Aula privada na praia onde o MEO Rip Curl Pro acontece. Pequeno-almoço a seguir, no porto, com pescadores.",
      en: "Text the night before: tomorrow at 6:45 a.m. A van picks you up. Boards inside. Private session on the beach where MEO Rip Curl Pro is held. Breakfast next, at the harbor, with fishermen.",
    },
    duration: { pt: "Manhã (4h)", en: "Morning (4h)" },
    group: { pt: "1–6 pessoas", en: "1–6 people" },
    destination: "peniche",
    category: "mergulhar",
    image: IMG.surf,
  },
  {
    slug: "trilho-secreto-do-oeste",
    title: { pt: "Trilho secreto do Oeste", en: "The West's secret trail" },
    short: {
      pt: "O reel de 17K views — e o que ele não te conta.",
      en: "The 17K-view reel — and what it didn't tell you.",
    },
    story: {
      pt: "Caminho fora do mapa, a meia hora de Óbidos. Termina com café no Tables Carvalhal. Dormida no Flat23, se quiseres ficar.",
      en: "Off-map trail, 30 minutes from Óbidos. Ends with coffee at Tables Carvalhal. Stay over at Flat23 if you fall in love.",
    },
    duration: { pt: "Dia inteiro", en: "Full day" },
    group: { pt: "2–6 pessoas", en: "2–6 people" },
    destination: "foz-do-arelho",
    partner: "tables-carvalhal",
    category: "descobrir",
    image: IMG.trilho,
  },
  {
    slug: "noite-no-castelo-obidos",
    title: { pt: "Noite no castelo — Latitudes", en: "A night at the castle — Latitudes" },
    short: {
      pt: "Concerto da Kumpania Algazarra dentro de muralhas medievais.",
      en: "Kumpania Algazarra concert inside medieval walls.",
    },
    story: {
      pt: "Jantar prévio em Óbidos. Bilhete e transfer incluídos. Levamos-te a casa quando acabar — sem stress, sem condutor designado.",
      en: "Pre-show dinner in Óbidos. Ticket and transfer included. We drive you home when it ends — no stress, no designated driver.",
    },
    duration: { pt: "Tarde + noite", en: "Afternoon + night" },
    group: { pt: "2–8 pessoas", en: "2–8 people" },
    destination: "obidos",
    partner: "latitudes-obidos",
    category: "celebrar",
    image: IMG.concerto,
  },
  {
    slug: "ceramica-com-loja-do-calho",
    title: { pt: "Cerâmica com a Loja do Calho", en: "Ceramics at Loja do Calho" },
    short: {
      pt: "Mesa de roda, mãos sujas, peça que levas para casa.",
      en: "Wheel, dirty hands, the piece you take home.",
    },
    story: {
      pt: "Workshop de duas horas no atelier. Levas a peça depois de cozida — enviamos para a tua morada se já tiveres voltado.",
      en: "Two-hour studio workshop. We send your piece after firing — to wherever you've gone home to.",
    },
    duration: { pt: "2h", en: "2h" },
    group: { pt: "2–6 pessoas", en: "2–6 people" },
    destination: "caldas-da-rainha",
    partner: "loja-do-calho",
    category: "desacelerar",
    image: IMG.ceramica,
  },
  {
    slug: "vinhas-escondidas",
    title: { pt: "Vinhas escondidas", en: "Hidden vineyards" },
    short: {
      pt: "Pera Rocha, ginja, vinho do Oeste — sem turismo.",
      en: "Pera Rocha, ginja, wines of the West — no tourism.",
    },
    story: {
      pt: "Visita a três produtores que não estão em nenhuma rota. Provas longas. Conversa devagar. Voltamos a Lisboa quando quiseres.",
      en: "Three producers who aren't on any route. Long tastings. Slow conversation. We drive back to Lisbon whenever you say so.",
    },
    duration: { pt: "Meio-dia", en: "Half day" },
    group: { pt: "2–4 pessoas", en: "2–4 people" },
    destination: "bombarral",
    partner: "pera-no-peral",
    category: "descobrir",
    image: IMG.vinho,
  },
];

export function getDestination(slug: string) {
  return destinations.find((d) => d.slug === slug) ?? null;
}
export function getExperience(slug: string) {
  return experiences.find((e) => e.slug === slug) ?? null;
}
export function getPartner(slug: string) {
  return partners.find((p) => p.slug === slug) ?? null;
}
export function pickBy<T extends { destination: string }>(arr: T[], dest: string) {
  return arr.filter((x) => x.destination === dest);
}
