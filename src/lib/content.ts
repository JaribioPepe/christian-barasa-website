// Single source of truth for the site. All copy is derived from Christian Mark
// Barasa's CV (2026) and supporting certificates. Edit here to update the site.

export const site = {
  name: "Christian Mark Barasa",
  shortName: "Christian Barasa",
  monogram: "CMB",
  role: "Luxury Hospitality Professional",
  titles: ["Butler", "Suite Ambassador", "Guest Experience Specialist"],
  tagline:
    "Creating unforgettable guest experiences through personalized service, discretion, and world-class hospitality.",
  email: "christianfitlife99@gmail.com",
  phone: "+254 795 501 711",
  phoneHref: "+254795501711",
  location: "Available worldwide · Based in Nairobi, Kenya",
  nationality: "Kenyan",
  languages: ["Swahili", "Fluent English"],
  url: "https://christianbarasa.com",
};

export const nav = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Voyage", href: "#voyage" },
  { label: "Journey", href: "#journey" },
  { label: "Expertise", href: "#expertise" },
  { label: "Gallery", href: "#gallery" },
  { label: "Connect", href: "#connect" },
];

export const hero = {
  eyebrow: "Butler · Suite Ambassador · Guest Experience",
  headlineTop: "Exceptional Service.",
  headlineBottom: "Memorable Experiences.",
  subheadline:
    "International luxury hospitality professional with experience across yachts, cruise lines, and world-renowned hotels.",
  ctaPrimary: { label: "Explore My Journey", href: "#journey" },
  ctaSecondary: { label: "View Experience", href: "#expertise" },
  image: "/images/yacht-aerial.jpg",
};

export const philosophy = {
  index: "01",
  eyebrow: "My Philosophy of Service",
  title: "Service is an art of anticipation.",
  paragraphs: [
    "Luxury is rarely about grandeur. It lives in the quiet details: the preference remembered before it is spoken, the room prepared exactly as the guest left it in mind, the moment of arrival made effortless.",
    "Across more than a decade aboard private yachts, ultra-luxury cruise suites, and five-star hotels, my work has been to read the unspoken and answer it with grace, discretion, and genuine warmth.",
  ],
  image: "/images/table-detail.jpg",
  imageCaption: "Private dining, prepared to the smallest detail.",
  principles: [
    {
      n: "I",
      title: "Anticipation",
      body: "Reading each guest, learning their rhythms, and meeting needs before they are voiced.",
    },
    {
      n: "II",
      title: "Attention to Detail",
      body: "Tracking preferences, occasions, and personal touches that turn a stay into a memory.",
    },
    {
      n: "III",
      title: "Personalization",
      body: "Shaping every experience around the individual, never the template.",
    },
    {
      n: "IV",
      title: "Discretion",
      body: "Moving quietly and professionally through private spaces, always trusted.",
    },
    {
      n: "V",
      title: "Genuine Hospitality",
      body: "Warmth that is felt, not performed: the heart of service done well.",
    },
  ],
};

export type VoyageNode = {
  id: string;
  place: string;
  region: string;
  period: string;
  role: string;
  blurb: string;
  x: number; // equirectangular %, left
  y: number; // equirectangular %, top
};

export const voyage = {
  index: "02",
  eyebrow: "A Global Voyage",
  title: "Ports of call across three continents.",
  intro:
    "From the highlands of Nairobi to the Arabian Gulf, the Mediterranean, and the open waters of the Caribbean — a career charted across the world's most discerning destinations.",
  nodes: [
    {
      id: "nairobi",
      place: "Nairobi",
      region: "Kenya · East Africa",
      period: "2013 — 2014",
      role: "Where it began · The Panari Hotel",
      blurb:
        "The first chapter. Learning the discipline of the dining room and the foundations of refined service.",
      x: 60.2,
      y: 50.7,
    },
    {
      id: "dubai",
      place: "Dubai",
      region: "United Arab Emirates · Arabian Gulf",
      period: "2014 — 2023",
      role: "Five-star mastery · The Oberoi & Caesars Palace",
      blurb:
        "Nine years in the world's most competitive luxury market, rising from refined dining service to high-touch butler care for VIP and long-stay guests.",
      x: 65.4,
      y: 36.0,
    },
    {
      id: "mediterranean",
      place: "The Mediterranean",
      region: "Silversea Cruises",
      period: "2023",
      role: "Ultra-luxury at sea · Butler",
      blurb:
        "Bringing the suite experience aboard: bespoke in-suite dining, afternoon tea, canapé service, and private events to USPH standards.",
      x: 53.5,
      y: 26.7,
    },
    {
      id: "caribbean",
      place: "Caribbean & Beyond",
      region: "The Ritz-Carlton Yacht Collection",
      period: "2025 — Present",
      role: "Suite Ambassador & Butler",
      blurb:
        "End-to-end personalized service aboard a Forbes Five-Star yacht: concierge, destination expertise, and bespoke guest journeys.",
      x: 31.7,
      y: 40.0,
    },
  ] as VoyageNode[],
};

export type Chapter = {
  index: string;
  years: string;
  company: string;
  location: string;
  role: string;
  narrative: string;
  highlights: string[];
  image: string;
  accent?: boolean;
};

// Career, told as a chronological ascent from first role to present.
export const journey = {
  index: "03",
  eyebrow: "The Career Journey",
  title: "Five chapters, one standard.",
  chapters: [
    {
      index: "01",
      years: "2013 — 2014",
      company: "The Panari Hotel",
      location: "Nairobi, Kenya",
      role: "Assistant Waiter",
      narrative:
        "Every great career has a first table. In Nairobi, I learned the choreography of fine service: the pace of a dining room, the weight of a guest's first impression, and the pride of getting the small things exactly right.",
      highlights: [
        "Set and styled dining areas to exacting standards",
        "Supported senior service staff through busy service",
        "Anticipated and answered guest needs promptly",
      ],
      image: "/images/table-setting.jpg",
    },
    {
      index: "02",
      years: "2014 — 2018",
      company: "The Oberoi",
      location: "Dubai, UAE",
      role: "Waiter",
      narrative:
        "At one of Dubai's most celebrated addresses, refinement became second nature. I guided guests through menus, mastered service standards worthy of a global five-star name, and was recognized with a Certificate of Appreciation for my contribution.",
      highlights: [
        "Refined à la carte and fine-dining service",
        "Personalized menu guidance and pairings",
        "Awarded a Certificate of Appreciation by the General Manager",
      ],
      image: "/images/fine-dining.jpg",
    },
    {
      index: "03",
      years: "2018 — 2023",
      company: "Caesars Palace",
      location: "Dubai, UAE",
      role: "Butler",
      narrative:
        "Stepping into the role of Butler, service became personal. For five years I cared for VIP and long-stay guests, learning that true luxury is built on trust, discretion, and the confidence that every request will be handled, quietly and completely.",
      highlights: [
        "High-touch butler care for VIP and long-stay guests",
        "Daily guest check-ins to refine preferences",
        "Discretion and professionalism within private suites",
      ],
      image: "/images/dubai-burj.jpg",
      accent: true,
    },
    {
      index: "04",
      years: "2023",
      company: "Silversea Cruises",
      location: "Ultra-Luxury Cruising",
      role: "Butler",
      narrative:
        "The sea called. Aboard Silversea, I brought the discipline of the suite to the open ocean: preparing accommodations to each guest's historical profile, curating in-suite dining and private events, and holding every pantry to USPH standards.",
      highlights: [
        "Suites prepared to guest preference and history",
        "In-suite dining, afternoon tea, and private events",
        "Packing, unpacking, and bespoke concierge care",
      ],
      image: "/images/cruise-sunset.jpg",
    },
    {
      index: "05",
      years: "2025 — Present",
      company: "The Ritz-Carlton Yacht Collection",
      location: "Worldwide",
      role: "Suite Ambassador & Butler",
      narrative:
        "Today, I serve aboard one of the world's finest yachts as a Suite Ambassador, delivering bespoke, end-to-end journeys. I was part of the team aboard the first yacht in the world to earn a Forbes Travel Guide Five-Star rating, a milestone that reflects service at the highest international standard.",
      highlights: [
        "Bespoke, end-to-end personalized guest journeys",
        "Concierge, destination expertise, and excursion planning",
        "Part of a Forbes Travel Guide Five-Star team (2026)",
      ],
      image: "/images/yacht-sea.jpg",
      accent: true,
    },
  ] as Chapter[],
};

export type Expertise = {
  n: string;
  title: string;
  body: string;
  image: string;
};

export const expertise = {
  index: "04",
  eyebrow: "Signature Expertise",
  title: "The full spectrum of luxury care.",
  intro:
    "A discipline refined across hotels, cruise lines, and private yachts — at the service of the world's most discerning guests.",
  items: [
    {
      n: "01",
      title: "VIP Guest Relations",
      body: "Building authentic relationships with high-profile guests, founded on trust and absolute discretion.",
      image: "/images/champagne.jpg",
    },
    {
      n: "02",
      title: "Luxury Suite Management",
      body: "Suites prepared and maintained to each guest's preferences, history, and personal touches.",
      image: "/images/suite-modern.jpg",
    },
    {
      n: "03",
      title: "Personal Butler Services",
      body: "End-to-end personal care: packing, unpacking, laundry, amenities, and the unspoken needs in between.",
      image: "/images/table-candle.jpg",
    },
    {
      n: "04",
      title: "Concierge Services",
      body: "Destination expertise, shore-excursion coordination, and activity planning tailored to every guest.",
      image: "/images/resort-ocean.jpg",
    },
    {
      n: "05",
      title: "Fine Dining Service",
      body: "Menu guidance, wine recommendations, and impeccable service standards drawn from five-star kitchens.",
      image: "/images/fine-dining2.jpg",
    },
    {
      n: "06",
      title: "Luxury Cruise Hospitality",
      body: "In-suite dining, afternoon tea, canapé service, and private events, all to exacting USPH standards.",
      image: "/images/cruise-sea.jpg",
    },
    {
      n: "07",
      title: "Guest Experience Excellence",
      body: "Proactively monitoring satisfaction and resolving concerns before they are ever felt.",
      image: "/images/yacht-deck.jpg",
    },
    {
      n: "08",
      title: "Private Event Coordination",
      body: "Curating in-suite celebrations and private occasions that feel effortless and entirely personal.",
      image: "/images/table-detail.jpg",
    },
  ] as Expertise[],
};

export type DayMoment = {
  time: string;
  title: string;
  body: string;
};

export const dayInLuxury = {
  index: "05",
  eyebrow: "A Day in Luxury Hospitality",
  title: "Behind the seamless experience.",
  intro:
    "The calm a guest feels is the product of a day choreographed long before they wake. A glimpse behind the service.",
  moments: [
    {
      time: "06:30",
      title: "Morning Preparation",
      body: "Suites refreshed, private bars and fruit displays replenished, the day's preferences reviewed before the first request is made.",
    },
    {
      time: "08:00",
      title: "Guest Coordination",
      body: "A quiet check-in to read the day ahead: breakfast just so, the schedule confirmed, special occasions noted.",
    },
    {
      time: "11:00",
      title: "Personalized Experiences",
      body: "Shore excursions, destination expertise, and bespoke arrangements shaped around each guest's mood and interests.",
    },
    {
      time: "13:00",
      title: "Fine Dining Service",
      body: "In-suite dining and private lunches, dietary needs anticipated, wines recommended, every detail considered.",
    },
    {
      time: "18:30",
      title: "Evening Turn-Down",
      body: "Suites set for the evening, lighting softened, the room prepared to welcome the guest into rest.",
    },
    {
      time: "21:00",
      title: "VIP Requests",
      body: "The unexpected, handled with calm: a private celebration, a late arrangement, a wish made effortless.",
    },
  ] as DayMoment[],
};

export type Credential = {
  title: string;
  detail: string;
  meta: string;
};

export const credentials = {
  index: "06",
  eyebrow: "Professional Credentials",
  title: "Certified to the highest standard.",
  intro:
    "Maritime and hospitality credentials that keep me ready to serve at the world's finest addresses, on land and at sea.",
  forbes: {
    label: "Forbes Travel Guide",
    rating: "Five-Star",
    year: "2026",
    note:
      "Part of the team aboard the first yacht in the world to achieve a Forbes Travel Guide Five-Star rating.",
  },
  items: [
    {
      title: "STCW Basic Safety Training",
      detail: "Crowd Management & Security Awareness certified for maritime service.",
      meta: "Valid · Maritime",
    },
    {
      title: "Certificate in Butler & Hospitality Services",
      detail: "Formal training in the discipline and etiquette of professional butler service.",
      meta: "Professional",
    },
    {
      title: "Seaman's Book",
      detail: "Valid seafarer documentation for international cruise and yacht operations.",
      meta: "Valid · Maritime",
    },
    {
      title: "C1/D Visa",
      detail: "Valid United States crew visa for international maritime travel.",
      meta: "Valid",
    },
    {
      title: "Food & Beverage Operations",
      detail: "Kenya Utalii College — the foundation of a hospitality career.",
      meta: "2012 · Diploma",
    },
    {
      title: "Certificate of Appreciation",
      detail: "Awarded by the General Manager of The Oberoi, Dubai, for service excellence.",
      meta: "The Oberoi, Dubai",
    },
  ] as Credential[],
};

export const gallery = {
  index: "07",
  eyebrow: "The Gallery",
  title: "A world of refined moments.",
  intro: "The environments, details, and destinations that define luxury hospitality.",
  images: [
    { src: "/images/yacht-aerial.jpg", caption: "Private yacht, open water", span: "wide" },
    { src: "/images/suite-modern.jpg", caption: "The luxury suite", span: "tall" },
    { src: "/images/champagne.jpg", caption: "A moment of celebration", span: "" },
    { src: "/images/table-detail.jpg", caption: "Private dining", span: "" },
    { src: "/images/cruise-sunset.jpg", caption: "Cruising at golden hour", span: "wide" },
    { src: "/images/fine-dining.jpg", caption: "Fine dining, plated", span: "" },
    { src: "/images/yacht-deck.jpg", caption: "On deck", span: "tall" },
    { src: "/images/resort-ocean.jpg", caption: "Ocean retreat", span: "" },
    { src: "/images/dubai-burj.jpg", caption: "Dubai, after dark", span: "" },
    { src: "/images/table-candle.jpg", caption: "By candlelight", span: "" },
    { src: "/images/yacht-sea.jpg", caption: "The voyage continues", span: "wide" },
    { src: "/images/champagne2.jpg", caption: "Poured to perfection", span: "" },
  ],
};

export type Value = { n: string; title: string; body: string };

export const values = {
  index: "08",
  eyebrow: "Personal Values",
  title: "The principles behind the service.",
  items: [
    { n: "01", title: "Excellence", body: "Nothing leaves my hands that is not the very best I can give." },
    { n: "02", title: "Discretion", body: "Trusted with the private worlds of those I serve." },
    { n: "03", title: "Reliability", body: "Composed and dependable, especially under pressure." },
    { n: "04", title: "Attention to Detail", body: "The difference between good service and the unforgettable." },
    { n: "05", title: "Guest Satisfaction", body: "The single measure that matters, every time." },
    { n: "06", title: "Professional Integrity", body: "Doing it right, even when no one is watching." },
  ] as Value[],
};

export const connect = {
  index: "09",
  eyebrow: "Let's Connect",
  title: "An invitation to begin a conversation.",
  intro:
    "For private engagements, luxury hospitality opportunities, or to discuss how I can elevate your guest experience, I would be delighted to hear from you.",
  reasons: [
    "Private yacht & estate placements",
    "Ultra-luxury hotel & cruise opportunities",
    "VIP & private household service",
    "Guest experience consultation",
  ],
};
