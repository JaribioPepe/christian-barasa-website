import type { Metadata, Viewport } from "next";
import { Playfair_Display, Cormorant_Garamond, Inter } from "next/font/google";
import { site } from "@/lib/content";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const description =
  "Christian Mark Barasa — international luxury hospitality professional. Butler, Suite Ambassador, and Guest Experience Specialist with experience across private yachts, ultra-luxury cruise lines, and five-star hotels.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description,
  keywords: [
    "luxury hospitality",
    "butler",
    "suite ambassador",
    "guest experience",
    "private yacht service",
    "luxury cruise butler",
    "VIP concierge",
    "Ritz-Carlton Yacht Collection",
    "Christian Mark Barasa",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — ${site.role}`,
    description,
    images: [
      {
        url: "/images/yacht-aerial.jpg",
        width: 1280,
        height: 853,
        alt: `${site.name}, luxury hospitality professional`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description,
    images: ["/images/yacht-aerial.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#1A1A1A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
