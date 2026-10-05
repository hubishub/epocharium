export type ExhibitSlug =
  | "early-pc"
  | "phone-generations"
  | "network-metaphor"
  | "ai-server-rack";

export type Exhibit = {
  slug: ExhibitSlug;
  hallCode: string;
  title: string;
  subtitle: string;
  epoch: string;
  years: string;
  placard: string;
  howToView: string;
  technicalNote: string;
  relatedArticles: string[];
};

export const exhibits: Exhibit[] = [
  {
    slug: "early-pc",
    hallCode: "EX-01",
    title: "Early Personal Computer",
    subtitle: "Abstract homage to the Altair / IBM PC era",
    epoch: "computers",
    years: "1975–1985",
    placard:
      "A low-poly reconstruction inspired by early micros: case, expansion slots metaphor, and CRT glow. Not a licensed replica — an interpretive model for orbit and study. Notice how ‘personal’ still meant assembling knowledge, cables, and patience.",
    howToView:
      "Drag to orbit. Scroll to zoom. Toggle auto-rotate from the placard controls. On touch devices, use one-finger drag.",
    technicalNote:
      "Procedural meshes in React Three Fiber — no scanned assets. Designed for laptop GPUs.",
    relatedArticles: ["mainframe-to-pc", "gui-revolution"],
  },
  {
    slug: "phone-generations",
    hallCode: "EX-02",
    title: "Phone Generations",
    subtitle: "Feature brick → candybar → smartphone slab",
    epoch: "mobiles",
    years: "1995–2020",
    placard:
      "Three stylized handsets in a chronological row. The jump is not only thinner glass — it is the shift from carrier portals to app platforms, cameras, and GPS as default sensors.",
    howToView:
      "Orbit the trio. Each pedestal is labeled by era. Compare thickness and screen proportion as proxies for capability leaps.",
    technicalNote:
      "Instanced-style simple boxes and rounded slabs; colors encode generation.",
    relatedArticles: ["feature-to-smartphone", "app-ecosystems"],
  },
  {
    slug: "network-metaphor",
    hallCode: "EX-03",
    title: "Network Metaphor",
    subtitle: "Nodes, links, and the idea of packet routes",
    epoch: "internet",
    years: "1969→",
    placard:
      "A kinetic graph of glowing nodes and arcs. Packets do not need a perfect wire — they need enough paths. This sculpture is a teaching metaphor for ARPANET-era packet switching and today’s mesh of CDNs and clouds.",
    howToView:
      "Orbit slowly; watch pulsing links. Density suggests hubs without naming any commercial CDN.",
    technicalNote:
      "Generated node positions + line segments; lightweight animation loop.",
    relatedArticles: ["arpanet-to-www", "broadband-and-cloud"],
  },
  {
    slug: "ai-server-rack",
    hallCode: "EX-04",
    title: "AI Server Rack",
    subtitle: "Stylized rack + neural glow",
    epoch: "ai",
    years: "2012→",
    placard:
      "Modern AI is not only algorithms — it is warehouses of accelerators, cooling, and power. This interpretive rack with a floating neural lattice reminds visitors that ‘the model’ has a physical footprint and an energy bill.",
    howToView:
      "Orbit to see rack bays and the lattice above. The glow is artistic, not a literal wiring diagram.",
    technicalNote:
      "Box stack + icosahedron lattice; emissive materials for museum drama.",
    relatedArticles: ["deep-learning-turn", "generative-ai-workplace", "agi-definitions"],
  },
];

export function getExhibit(slug: string): Exhibit | undefined {
  return exhibits.find((e) => e.slug === slug);
}
