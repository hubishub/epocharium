export type TourStop = { label: string; href: string; minutes: number; note: string };

export type Tour = {
  id: string;
  audience: string;
  title: string;
  duration: string;
  blurb: string;
  stops: TourStop[];
};

export const tours: Tour[] = [
  {
    id: "recruiter-us-eu",
    audience: "US / EU tech recruiters & hiring managers",
    title: "Systems Literacy Tour",
    duration: "~25–35 min",
    blurb:
      "A walkthrough that shows the builder can narrate full-stack history — networks, devices, and modern AI — with museum-quality depth rather than buzzwords.",
    stops: [
      { label: "Entrance Hall", href: "/", minutes: 3, note: "Orientation & featured exhibits" },
      { label: "Civilization Timeline", href: "/timeline", minutes: 6, note: "Cross-wing chronology" },
      { label: "Connectivity Hall", href: "/epochs/internet", minutes: 5, note: "Protocols & cloud" },
      { label: "Network Metaphor (3D)", href: "/exhibits/network-metaphor", minutes: 4, note: "Interactive sculpture" },
      { label: "Intelligence Hall", href: "/epochs/ai", minutes: 5, note: "Non-hype AI arc" },
      { label: "AI Rack (3D)", href: "/exhibits/ai-server-rack", minutes: 4, note: "Physical footprint of models" },
      { label: "Compare Desk", href: "/compare", minutes: 5, note: "Side-by-side eras" },
    ],
  },
  {
    id: "india-hiring",
    audience: "India hiring managers (Mohali / Chandigarh / remote teams)",
    title: "Leapfrog & Delivery Tour",
    duration: "~20–30 min",
    blurb:
      "Emphasizes mobile-first India, practical AI tooling, and portable computing — the stack behind remote delivery and ops coordination.",
    stops: [
      { label: "Visitor Guide", href: "/guide", minutes: 3, note: "Choose your path" },
      { label: "Pocket Hall", href: "/epochs/mobiles", minutes: 6, note: "Feature → smartphone → payments" },
      { label: "Phone Generations (3D)", href: "/exhibits/phone-generations", minutes: 4, note: "Visual progression" },
      { label: "India Leapfrog article", href: "/articles/india-mobile-leapfrog", minutes: 5, note: "UPI & data shock" },
      { label: "Computation Hall", href: "/epochs/computers", minutes: 4, note: "Laptops as workplaces" },
      { label: "Archive reading", href: "/articles/generative-ai-workplace", minutes: 5, note: "AI in delivery work" },
    ],
  },
  {
    id: "students",
    audience: "Students & career switchers",
    title: "Foundations Tour",
    duration: "~30–40 min",
    blurb:
      "Start with timeline and glossary, then deep halls — build vocabulary before diving into AGI debates.",
    stops: [
      { label: "Glossary", href: "/glossary", minutes: 5, note: "Search key terms" },
      { label: "Timeline", href: "/timeline", minutes: 8, note: "Century of inflection points" },
      { label: "Early PC (3D)", href: "/exhibits/early-pc", minutes: 4, note: "Hands-on orbit" },
      { label: "Mainframe→PC article", href: "/articles/mainframe-to-pc", minutes: 6, note: "Long read" },
      { label: "Horizon Gallery", href: "/epochs/agi", minutes: 6, note: "Careful AGI framing" },
      { label: "Illustration Gallery", href: "/gallery", minutes: 5, note: "SVG diagrams" },
    ],
  },
];
