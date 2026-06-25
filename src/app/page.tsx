import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/components/Hero";
import Portrait from "@/components/Portrait";
import Philosophy from "@/components/Philosophy";
import GlobalVoyage from "@/components/GlobalVoyage";
import CareerJourney from "@/components/CareerJourney";
import SignatureExpertise from "@/components/SignatureExpertise";
import DayInLuxury from "@/components/DayInLuxury";
import Credentials from "@/components/Credentials";
import Gallery from "@/components/Gallery";
import Values from "@/components/Values";
import Connect from "@/components/Connect";
import Footer from "@/components/Footer";
import { site } from "@/lib/content";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  description:
    "International luxury hospitality professional — Butler, Suite Ambassador, and Guest Experience Specialist across private yachts, ultra-luxury cruise lines, and five-star hotels.",
  email: `mailto:${site.email}`,
  telephone: site.phoneHref,
  nationality: site.nationality,
  knowsLanguage: site.languages,
  url: site.url,
  image: `${site.url}/images/christian-portrait.jpg`,
  worksFor: {
    "@type": "Organization",
    name: "The Ritz-Carlton Yacht Collection",
  },
  knowsAbout: [
    "Luxury Hospitality",
    "Butler Service",
    "VIP Guest Relations",
    "Fine Dining Service",
    "Concierge Services",
    "Private Yacht Hospitality",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // Escape "<" so the JSON can never break out of the <script> tag.
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Portrait />
        <Philosophy />
        <GlobalVoyage />
        <CareerJourney />
        <SignatureExpertise />
        <DayInLuxury />
        <Credentials />
        <Gallery />
        <Values />
        <Connect />
      </main>
      <Footer />
    </>
  );
}
