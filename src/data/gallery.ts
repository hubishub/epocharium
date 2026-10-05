export type GalleryPiece = {
  id: string;
  title: string;
  caption: string;
  wing: string;
  kind: "diagram" | "placard-art" | "timeline-strip";
};

export const galleryPieces: GalleryPiece[] = [
  { id: "packet-flow", title: "Packet Flow Diagram", caption: "Original SVG: a message splits across alternate routes, then reassembles — the ARPANET insight.", wing: "Connectivity Hall", kind: "diagram" },
  { id: "osi-stack-lite", title: "Layers at a Glance", caption: "Simplified stack poster: physical links up through application protocols — teaching aid, not a standards replica.", wing: "Connectivity Hall", kind: "placard-art" },
  { id: "mainframe-silhouette", title: "Glass House Silhouette", caption: "CSS/SVG silhouette of cabinets and a raised floor — institutional computing mood.", wing: "Computation Hall", kind: "placard-art" },
  { id: "pc-anatomy", title: "PC Anatomy Sketch", caption: "Labeled blocks: CPU, memory, bus, storage, display — hobbyist-era mental model.", wing: "Computation Hall", kind: "diagram" },
  { id: "phone-timeline-strip", title: "Handset Proportions", caption: "Three rectangles tracking screen-to-body ratio across generations.", wing: "Pocket Hall", kind: "timeline-strip" },
  { id: "cell-hex", title: "Cellular Hex Idea", caption: "Abstract hex grid suggesting cells and handoff — not a carrier map.", wing: "Pocket Hall", kind: "diagram" },
  { id: "neural-layers", title: "Layer Cake Sketch", caption: "Stacked feature maps as a metaphor for deep networks — interpretive art.", wing: "Intelligence Hall", kind: "diagram" },
  { id: "gpu-grid", title: "Accelerator Grid", caption: "Repeated tiles hinting at parallel cores powering training runs.", wing: "Intelligence Hall", kind: "placard-art" },
  { id: "agi-question", title: "Open Questions Board", caption: "Typographic placard listing unresolved AGI evaluation questions.", wing: "Horizon Gallery", kind: "placard-art" },
  { id: "winter-summer", title: "Winter / Summer Bars", caption: "Abstract bars for AI funding enthusiasm cycles — humility exhibit.", wing: "Horizon Gallery", kind: "timeline-strip" },
];
