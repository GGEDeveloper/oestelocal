import type { Metadata } from "next";
import { DM_Sans, Lora, Fraunces } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LangProvider } from "@/lib/i18n";

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-body",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://oestelocal.com"),
  title: {
    default: "Oeste Local — O Oeste que os guias não sabem que existe",
    template: "%s · Oeste Local",
  },
  description:
    "Curadoria de experiências autênticas no Oeste de Portugal. Óbidos, Peniche, Nazaré, Caldas da Rainha, Foz do Arelho, Baleal e Bombarral.",
  alternates: { canonical: "/", languages: { "pt-PT": "/", "en": "/en" } },
  openGraph: {
    title: "Oeste Local",
    description:
      "O Oeste que os guias não sabem que existe. Experiências, parceiros e sítios escondidos da Costa de Prata.",
    url: "https://oestelocal.com",
    siteName: "Oeste Local",
    locale: "pt_PT",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Oeste Local" },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-PT" className={`${dmSans.variable} ${fraunces.variable} ${lora.variable}`}>
      <body>
        <LangProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}
