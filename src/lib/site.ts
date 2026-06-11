export const site = {
  name: "Kin Interior Design & Consulting PLC",
  shortName: "Kin",
  tagline: "Interiors, considered.",
  email: "hello@kininterior.com",
  phone: "+251 11 000 0000",
  address: "Bole Road, Addis Ababa, Ethiopia",
  hours: "Mon – Fri · 9:00 – 18:00",
  social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Pinterest", href: "https://pinterest.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
};

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/#services" },
  { label: "Process", href: "/#process" },
  { label: "Contact", href: "/#contact" },
];

export interface Service {
  title: string;
  description: string;
}

export const services: Service[] = [
  {
    title: "Residential Design",
    description:
      "Full-home and single-room design for homeowners who want spaces that feel calm, personal and effortless to live in.",
  },
  {
    title: "Commercial & Workplace",
    description:
      "Offices, showrooms and retail interiors that balance brand, function and the wellbeing of the people who use them.",
  },
  {
    title: "Hospitality",
    description:
      "Restaurants, spas and resorts designed to create atmosphere and a memorable sense of arrival for every guest.",
  },
  {
    title: "Design Consulting",
    description:
      "Focused advice on layout, materials, lighting and styling — perfect when you need expert direction, not a full project.",
  },
];

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We listen first — understanding how you live or work, your taste, your budget and the way the space needs to perform.",
  },
  {
    step: "02",
    title: "Concept",
    description:
      "We translate the brief into a clear design direction: layouts, mood, materials and a considered palette.",
  },
  {
    step: "03",
    title: "Design & Detail",
    description:
      "We develop every detail — joinery, lighting, finishes and furniture — into a precise, buildable scheme.",
  },
  {
    step: "04",
    title: "Delivery",
    description:
      "We manage procurement and installation, then style the finished space so it is ready to be enjoyed.",
  },
];

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Kin understood our home better than we did. The result is calm, warm and unmistakably ours.",
    author: "Selam & Daniel",
    role: "Serene Residence",
  },
  {
    quote:
      "Our showroom finally feels like the brand. Footfall and dwell time are both up since the redesign.",
    author: "M. Tadesse",
    role: "Maison Showroom",
  },
  {
    quote:
      "Professional, precise and genuinely creative. They delivered the resort on time and beyond the brief.",
    author: "A. Bekele",
    role: "Azure Resort",
  },
];

export const serviceOptions = [
  "Residential Design",
  "Commercial & Workplace",
  "Hospitality",
  "Design Consulting",
  "Not sure yet",
];

export const budgetOptions = [
  "Under 250,000 ETB",
  "250,000 – 750,000 ETB",
  "750,000 – 2,000,000 ETB",
  "Over 2,000,000 ETB",
];
