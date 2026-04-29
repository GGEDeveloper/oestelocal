import { Hero } from "@/components/Hero";
import { OrganizationJsonLd, WebsiteJsonLd } from "@/components/JsonLd";
import { CategoriesBlock } from "@/components/CategoriesBlock";
import { ExperiencesBlock } from "@/components/ExperiencesBlock";
import { DestinationsBlock } from "@/components/DestinationsBlock";
import { PartnersBlock } from "@/components/PartnersBlock";
import { InstagramFeed } from "@/components/InstagramFeed";
import { HowItWorks } from "@/components/HowItWorks";
import { ContactCTA } from "@/components/ContactCTA";

export default function HomePage() {
  return (
    <>
      <OrganizationJsonLd />
      <WebsiteJsonLd />
      <Hero />
      <CategoriesBlock />
      <ExperiencesBlock />
      <DestinationsBlock />
      <HowItWorks />
      <PartnersBlock />
      <InstagramFeed />
      <ContactCTA />
    </>
  );
}
