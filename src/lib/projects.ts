export type ProjectCategory =
  | "Residential"
  | "Commercial"
  | "Hospitality"
  | "Architecture";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  year: number;
  /** short tagline for the gallery card */
  summary: string;
  /** longer narrative for the detail page */
  description: string;
  scope: string[];
  /** key/value facts shown on the detail page */
  facts: { label: string; value: string }[];
  image: string;
  imageWide: string;
}

export const projects: Project[] = [
  {
    slug: "serene-residence-living",
    title: "Serene Residence",
    category: "Residential",
    location: "Bole, Addis Ababa",
    year: 2024,
    summary: "A calm, light-filled living room built around a single gold accent.",
    description:
      "A young family asked for a living space that felt restful rather than busy. We stripped the palette back to warm whites and natural oak, then introduced one decisive gesture — a sculptural mustard armchair — so the eye always has a place to rest. Layered textiles and a hand-finished plaster wall keep the room soft to the touch.",
    scope: ["Space planning", "Custom joinery", "Lighting design", "Styling"],
    facts: [
      { label: "Type", value: "Private residence" },
      { label: "Area", value: "120 m²" },
      { label: "Duration", value: "14 weeks" },
    ],
    image: "/projects/serene-residence-living.jpg",
    imageWide: "/projects/serene-residence-living-wide.jpg",
  },
  {
    slug: "nordic-loft",
    title: "Nordic Loft",
    category: "Residential",
    location: "Kazanchis, Addis Ababa",
    year: 2024,
    summary: "Scandinavian restraint with grounded, earthy leather tones.",
    description:
      "An open-plan loft reimagined for slow living. We anchored the volume with a low linen sofa and a pair of tan leather poufs, balancing the cool daylight with warm tactile materials. Every storage element is concealed so the architecture — not the clutter — stays in view.",
    scope: ["Open-plan layout", "Furniture curation", "Material palette"],
    facts: [
      { label: "Type", value: "Loft apartment" },
      { label: "Area", value: "95 m²" },
      { label: "Duration", value: "10 weeks" },
    ],
    image: "/projects/nordic-loft.jpg",
    imageWide: "/projects/nordic-loft-wide.jpg",
  },
  {
    slug: "atelier-bedroom",
    title: "Atelier Bedroom",
    category: "Residential",
    location: "Old Airport, Addis Ababa",
    year: 2023,
    summary: "A tailored primary suite layered in neutral, hotel-grade comfort.",
    description:
      "A primary suite designed to feel like a private retreat. A deep upholstered headboard sets a quiet, tailored tone, while a considered mix of bedside cabinetry and a foot-of-bed bench gives the room a sense of generous, hotel-grade calm.",
    scope: ["Bespoke headboard", "Wardrobe joinery", "Soft furnishings"],
    facts: [
      { label: "Type", value: "Primary suite" },
      { label: "Area", value: "38 m²" },
      { label: "Duration", value: "8 weeks" },
    ],
    image: "/projects/atelier-bedroom.jpg",
    imageWide: "/projects/atelier-bedroom-wide.jpg",
  },
  {
    slug: "warm-minimal-dining",
    title: "Émeraude Dining",
    category: "Residential",
    location: "CMC, Addis Ababa",
    year: 2024,
    summary: "An emerald-and-brass dining room made for long evenings.",
    description:
      "A formal dining room with a confident jewel-tone palette. Velvet emerald chairs gather around a marble-topped table beneath a sculptural pendant, with brass detailing tying the room to the home's wider material story.",
    scope: ["Concept design", "Furniture & lighting", "Art direction"],
    facts: [
      { label: "Type", value: "Dining room" },
      { label: "Seats", value: "8 guests" },
      { label: "Duration", value: "9 weeks" },
    ],
    image: "/projects/warm-minimal-dining.jpg",
    imageWide: "/projects/warm-minimal-dining-wide.jpg",
  },
  {
    slug: "garden-sunroom",
    title: "Garden Sunroom",
    category: "Residential",
    location: "Sululta",
    year: 2023,
    summary: "An indoor-outdoor lounge framed by timber and greenery.",
    description:
      "A sunroom conceived as a bridge between house and garden. A warm timber ceiling and floor-to-ceiling glazing dissolve the boundary to the landscape, while a low modular sofa keeps the space relaxed and endlessly re-arrangeable.",
    scope: ["Indoor-outdoor flow", "Modular seating", "Planting scheme"],
    facts: [
      { label: "Type", value: "Sunroom" },
      { label: "Area", value: "44 m²" },
      { label: "Duration", value: "11 weeks" },
    ],
    image: "/projects/garden-sunroom.jpg",
    imageWide: "/projects/garden-sunroom-wide.jpg",
  },
  {
    slug: "skyline-penthouse",
    title: "Skyline Penthouse",
    category: "Residential",
    location: "Mexico Square, Addis Ababa",
    year: 2025,
    summary: "A full-home concept where architecture and interior speak as one.",
    description:
      "A complete penthouse program delivered from shell to styling. Working alongside the architects, we tuned the interior volumes, lighting and material transitions so the spaces read as a single, continuous gesture from the entry through to the terrace.",
    scope: ["Full-home design", "Architectural liaison", "FF&E", "Turnkey delivery"],
    facts: [
      { label: "Type", value: "Penthouse" },
      { label: "Area", value: "280 m²" },
      { label: "Duration", value: "28 weeks" },
    ],
    image: "/projects/skyline-penthouse.jpg",
    imageWide: "/projects/skyline-penthouse-wide.jpg",
  },
  {
    slug: "studio-workspace",
    title: "Studio Workspace",
    category: "Commercial",
    location: "Bole, Addis Ababa",
    year: 2024,
    summary: "A bright, focused office that puts people before partitions.",
    description:
      "A workspace for a growing consultancy that wanted to feel open without being noisy. We used a restrained black-framed glazing system to define zones while keeping daylight and sightlines intact, and chose hard-wearing, low-maintenance finishes throughout.",
    scope: ["Workplace strategy", "Glazed partitions", "Lighting", "Acoustics"],
    facts: [
      { label: "Type", value: "Office" },
      { label: "Area", value: "210 m²" },
      { label: "Capacity", value: "32 desks" },
    ],
    image: "/projects/studio-workspace.jpg",
    imageWide: "/projects/studio-workspace-wide.jpg",
  },
  {
    slug: "maison-showroom",
    title: "Maison Showroom",
    category: "Commercial",
    location: "Sarbet, Addis Ababa",
    year: 2023,
    summary: "A retail-meets-living showroom that lets product breathe.",
    description:
      "A flagship showroom designed to display furniture in lifelike vignettes. A warm timber feature wall and an open, gallery-like plan give each piece room to breathe, while a seamless transition to the outdoor deck extends the journey for visitors.",
    scope: ["Retail concept", "Display systems", "Indoor-outdoor flow"],
    facts: [
      { label: "Type", value: "Showroom" },
      { label: "Area", value: "180 m²" },
      { label: "Duration", value: "12 weeks" },
    ],
    image: "/projects/maison-showroom.jpg",
    imageWide: "/projects/maison-showroom-wide.jpg",
  },
  {
    slug: "harvest-restaurant",
    title: "Harvest Restaurant",
    category: "Hospitality",
    location: "Kazanchis, Addis Ababa",
    year: 2024,
    summary: "A warm, textured dining room engineered for atmosphere.",
    description:
      "A farm-to-table restaurant where the interior had to do as much storytelling as the menu. Slatted timber, warm pools of light and a layered seating mix create intimacy at every table, while a robust back-of-house layout keeps service effortless.",
    scope: ["FF&E", "Lighting design", "Acoustic treatment", "Seating layout"],
    facts: [
      { label: "Type", value: "Restaurant" },
      { label: "Covers", value: "90 seats" },
      { label: "Duration", value: "16 weeks" },
    ],
    image: "/projects/harvest-restaurant.jpg",
    imageWide: "/projects/harvest-restaurant-wide.jpg",
  },
  {
    slug: "azure-resort",
    title: "Azure Resort",
    category: "Hospitality",
    location: "Bishoftu",
    year: 2025,
    summary: "A resort arrival sequence built around water and light.",
    description:
      "A boutique resort where the pool terrace is the social heart of the property. We choreographed the arrival sequence, shading and furniture so that guests are drawn naturally from the lobby to the water, with a relaxed material palette that ages gracefully outdoors.",
    scope: ["Concept masterplan", "Outdoor FF&E", "Lighting", "Wayfinding"],
    facts: [
      { label: "Type", value: "Resort" },
      { label: "Keys", value: "48 rooms" },
      { label: "Duration", value: "34 weeks" },
    ],
    image: "/projects/azure-resort.jpg",
    imageWide: "/projects/azure-resort-wide.jpg",
  },
  {
    slug: "lumen-spa",
    title: "Lumen Spa",
    category: "Hospitality",
    location: "Old Airport, Addis Ababa",
    year: 2023,
    summary: "A wellness sanctuary tuned for stillness and touch.",
    description:
      "A day spa designed entirely around the senses. Soft, indirect lighting, natural stone and a hushed acoustic envelope create a sense of stillness from the moment guests arrive, while a carefully zoned plan keeps treatment rooms private and calm.",
    scope: ["Wellness concept", "Lighting design", "Material palette", "Acoustics"],
    facts: [
      { label: "Type", value: "Day spa" },
      { label: "Rooms", value: "6 treatment suites" },
      { label: "Duration", value: "18 weeks" },
    ],
    image: "/projects/lumen-spa.jpg",
    imageWide: "/projects/lumen-spa-wide.jpg",
  },
  {
    slug: "verdant-courtyard",
    title: "Verdant Courtyard",
    category: "Architecture",
    location: "Sululta",
    year: 2025,
    summary: "A timber-and-glass pavilion that frames the landscape.",
    description:
      "An architectural collaboration for a private courtyard pavilion. Warm timber cladding and generous glazing frame views across the garden, while the interior fit-out continues the same restrained material language to make the building feel of a single piece.",
    scope: ["Architectural collaboration", "Facade material", "Interior fit-out"],
    facts: [
      { label: "Type", value: "Pavilion" },
      { label: "Area", value: "160 m²" },
      { label: "Duration", value: "26 weeks" },
    ],
    image: "/projects/verdant-courtyard.jpg",
    imageWide: "/projects/verdant-courtyard-wide.jpg",
  },
];

export const projectCategories: ProjectCategory[] = [
  "Residential",
  "Commercial",
  "Hospitality",
  "Architecture",
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
