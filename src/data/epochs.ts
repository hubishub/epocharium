export type EpochSlug = "internet" | "computers" | "mobiles" | "ai" | "agi";

export type Milestone = {
  year: string;
  title: string;
  summary: string;
};

export type Epoch = {
  slug: EpochSlug;
  wing: string;
  title: string;
  subtitle: string;
  span: string;
  accent: string;
  /** Lighter accent for Evening (dark placards) — ≥4.5:1 on stone-800 */
  accentEvening: string;
  hallIntro: string;
  whyItMattered: string[];
  dualMarket: string;
  milestones: Milestone[];
  keySystems: { name: string; era: string; note: string }[];
  relatedExhibits: string[];
  relatedArticles: string[];
};

export const epochs: Epoch[] = [
  {
    slug: "internet",
    wing: "Wing A — Connectivity Hall",
    title: "The Internet",
    subtitle: "From packet switching to a planetary nervous system",
    span: "1969 → present",
    accent: "#5b7c99",
    accentEvening: "#94a3b8",
    hallIntro:
      "This hall traces how machines learned to talk across distance: military research nets, academic collaboration, the World Wide Web, broadband in living rooms, and the mobile-first web that remade daily life from Silicon Valley to Tier-2 Indian cities.",
    whyItMattered: [
      "Packet switching proved unreliable links could still carry reliable conversation — the foundation of everything online.",
      "Open protocols (TCP/IP, HTTP, DNS) let strangers interconnect without a single owner of the whole network.",
      "The Web made publishing and discovery accessible to non-engineers, collapsing distribution costs for media, commerce, and software.",
      "Broadband and later 4G/5G turned the network from a destination into an always-on utility — enabling cloud software, remote work, and dispatch tools used daily in US dry-van logistics.",
    ],
    dualMarket:
      "US/EU labs and standards bodies invented much of the early stack; India’s later leapfrog via cheap smartphones and UPI-class digital rails showed how mobile-first internet can skip desktop eras entirely.",
    milestones: [
      { year: "1969", title: "ARPANET first nodes", summary: "UCLA and SRI exchange packets — the first working wide-area packet network." },
      { year: "1974", title: "TCP sketched", summary: "Cerf & Kahn publish Transmission Control Protocol ideas that become the internet’s traffic rules." },
      { year: "1983", title: "TCP/IP flag day", summary: "ARPANET switches to TCP/IP; the modern internet’s common tongue arrives." },
      { year: "1989–91", title: "WWW proposed & released", summary: "Tim Berners-Lee’s hypertext system at CERN — browsers, URLs, HTTP." },
      { year: "1993", title: "Mosaic & public curiosity", summary: "Graphical browsing sparks mainstream interest beyond research campuses." },
      { year: "1998–2005", title: "Search, broadband, Web 2.0", summary: "Google-scale search, DSL/cable, then user-generated platforms." },
      { year: "2007–15", title: "Mobile web & cloud", summary: "Smartphones + AWS/Azure-class clouds make always-online software normal." },
      { year: "2015→", title: "Edge, 5G, platform gravity", summary: "CDN edges, app ecosystems, and encrypted-by-default expectations." },
    ],
    keySystems: [
      { name: "ARPANET", era: "1969–90", note: "Prototype packet network funded by US defense research." },
      { name: "NSFNET", era: "1980s–90s", note: "Academic backbone that helped scale the early internet." },
      { name: "DNS", era: "1983→", note: "Human names for machines — critical global directory." },
      { name: "HTTP/HTML", era: "1991→", note: "Web’s transfer and markup pair; still evolving (HTTP/3)." },
      { name: "CDNs & cloud", era: "2000s→", note: "Content and compute moved closer to users worldwide." },
    ],
    relatedExhibits: ["network-metaphor"],
    relatedArticles: ["arpanet-to-www", "broadband-and-cloud", "india-mobile-leapfrog"],
  },
  {
    slug: "computers",
    wing: "Wing B — Computation Hall",
    title: "Computers & Laptops",
    subtitle: "Mainframes to notebooks — personal computing becomes portable",
    span: "1940s → present",
    accent: "#a16207",
    accentEvening: "#eab308",
    hallIntro:
      "Walk from room-sized calculators to machines that fit in a backpack. This wing covers mainframes, the personal computer revolution, graphical interfaces, and the laptop/ultrabook lineage that made knowledge work mobile — including the machines logistics coordinators and remote developers carry today.",
    whyItMattered: [
      "Mainframes centralized expensive compute for governments, banks, and airlines.",
      "Microprocessors + affordable PCs democratized programming and office software.",
      "GUIs lowered the skill floor so non-specialists could use powerful tools.",
      "Laptops and later ultrabooks untethered professional work from fixed desks — essential for hybrid offices and traveling operators.",
    ],
    dualMarket:
      "US/EU chip and OS industries defined mass PC standards; India’s IT services boom trained millions on those same stacks, while price-sensitive laptop markets in Asia pushed value designs that still run modern browsers and IDEs.",
    milestones: [
      { year: "1940s–50s", title: "Electronic computers", summary: "ENIAC-era machines; vacuum tubes; institutional compute." },
      { year: "1964", title: "IBM System/360", summary: "Compatible mainframe family — enterprise computing standard." },
      { year: "1975–77", title: "Hobbyist micros", summary: "Altair, Apple II, Commodore — personal machines enter homes." },
      { year: "1981", title: "IBM PC", summary: "Open-ish architecture seeds the Wintel ecosystem." },
      { year: "1984–95", title: "GUI mainstream", summary: "Macintosh influence; Windows 3.x/95 bring windows to offices." },
      { year: "1990s", title: "Notebook boom", summary: "ThinkPad-class business laptops become road warriors’ tools." },
      { year: "2008→", title: "Ultrabooks & SoCs", summary: "Thin lids, long battery, ARM/x86 efficiency races." },
    ],
    keySystems: [
      { name: "IBM System/360", era: "1964", note: "Compatible family that locked in enterprise software investment." },
      { name: "Altair 8800", era: "1975", note: "Kit microcomputer that ignited hobbyist culture." },
      { name: "IBM PC / clones", era: "1981→", note: "Volume PC standard for business software." },
      { name: "Macintosh", era: "1984→", note: "Popularized desktop metaphor and design craft." },
      { name: "Modern ultrabooks", era: "2010s→", note: "All-day battery, SSD, Wi‑Fi 6 — the default knowledge-work device." },
    ],
    relatedExhibits: ["early-pc"],
    relatedArticles: ["mainframe-to-pc", "gui-revolution", "laptop-as-workplace"],
  },
  {
    slug: "mobiles",
    wing: "Wing C — Pocket Hall",
    title: "Mobiles",
    subtitle: "Feature phones to app platforms in every pocket",
    span: "1980s → present",
    accent: "#c2410c",
    accentEvening: "#fb923c",
    hallIntro:
      "Telephony left the wall and entered the pocket. This gallery follows analog bricks, SMS-era feature phones, the smartphone rupture, and app ecosystems that turned phones into primary computers — nowhere more dramatically than in India’s mobile-first adoption curve.",
    whyItMattered: [
      "Cellular networks made voice (then data) available away from landlines.",
      "SMS and simple apps proved tiny screens could still host useful services.",
      "Smartphones + app stores created a new software distribution channel overnight.",
      "Cameras, GPS, and sensors made phones the default sensor suite for maps, payments, and field work.",
    ],
    dualMarket:
      "Nordic and US/EU vendors led early handsets and OS experiments; India’s Jio-era data shock and UPI payments showed how mobile can become the default bank branch, browser, and job board for hundreds of millions.",
    milestones: [
      { year: "1973–83", title: "Handheld cellular demos", summary: "Prototype mobiles; commercial networks follow." },
      { year: "1990s", title: "GSM & SMS culture", summary: "Europe-led digital cellular; text becomes a medium." },
      { year: "2000s", title: "Feature-phone apps", summary: "Java ME, BlackBerry, early cameras and WAP." },
      { year: "2007–08", title: "iPhone & App Store", summary: "Multi-touch smartphone + curated apps." },
      { year: "2008–15", title: "Android scale", summary: "Open handset alliance; global volume leadership." },
      { year: "2016→", title: "Payments & super-apps", summary: "Mobile becomes wallet, ID, and workplace in many markets." },
    ],
    keySystems: [
      { name: "GSM", era: "1991→", note: "Digital cellular standard that scaled globally." },
      { name: "BlackBerry", era: "1999–2010s", note: "Enterprise email on the go — cultural icon of the era." },
      { name: "iOS + App Store", era: "2007–08→", note: "Touch UI + developer marketplace model." },
      { name: "Android", era: "2008→", note: "Volume OS across price tiers worldwide." },
      { name: "UPI / mobile payments", era: "2016→ (India)", note: "Real-time payments via phone — leapfrog case study." },
    ],
    relatedExhibits: ["phone-generations"],
    relatedArticles: ["feature-to-smartphone", "app-ecosystems", "india-mobile-leapfrog"],
  },
  {
    slug: "ai",
    wing: "Wing D — Intelligence Hall",
    title: "Artificial Intelligence",
    subtitle: "Symbolic dreams, statistical learning, generative systems",
    span: "1950s → present",
    accent: "#57534e",
    accentEvening: "#d6d3d1",
    hallIntro:
      "This hall resists hype. It documents AI as a research program with winters and summers: logic and search, machine learning on data, deep neural nets, and generative models that draft text, code, and images — tools already used in customer ops, coding assistants, and logistics forecasting experiments.",
    whyItMattered: [
      "Early AI clarified what ‘intelligence’ tasks computers might automate — and where they failed.",
      "Machine learning shifted the craft from hand-coded rules to learning from examples.",
      "Deep learning unlocked perception (vision, speech) at practical accuracy.",
      "Generative models changed knowledge work interfaces — copilots rather than only classifiers.",
    ],
    dualMarket:
      "US/EU universities and labs drove many foundational papers; open-source models and cloud GPUs let Indian startups and global remote teams experiment without owning a research lab — while enterprises everywhere wrestle with accuracy, cost, and governance.",
    milestones: [
      { year: "1950", title: "Turing’s question", summary: "Can machines think? A lasting framing for the field." },
      { year: "1956", title: "Dartmouth workshop", summary: "‘Artificial intelligence’ named as a research agenda." },
      { year: "1970s–80s", title: "Expert systems", summary: "Rule-based commercial attempts; brittle outside narrow domains." },
      { year: "1990s–2000s", title: "Statistical ML", summary: "SVMs, boosting; data + features over pure logic." },
      { year: "2012", title: "Deep learning surge", summary: "AlexNet-era vision results; GPU training becomes practical." },
      { year: "2017–20", title: "Transformers", summary: "Attention architectures reshape NLP and beyond." },
      { year: "2022→", title: "Generative mainstream", summary: "Chat interfaces put large models in everyday workflows." },
    ],
    keySystems: [
      { name: "Lisp machines / early labs", era: "1960s–80s", note: "Symbolic AI toolchains and research culture." },
      { name: "Expert systems", era: "1980s", note: "Commercial rule engines with limited generality." },
      { name: "ImageNet + CNNs", era: "2010s", note: "Benchmark + architectures that unlocked vision." },
      { name: "Transformer LLMs", era: "2017→", note: "Scale + data + attention → generative assistants." },
      { name: "MLOps stacks", era: "2015→", note: "Pipelines to ship, monitor, and govern models." },
    ],
    relatedExhibits: ["ai-server-rack"],
    relatedArticles: ["symbolic-to-statistical", "deep-learning-turn", "generative-ai-workplace"],
  },
  {
    slug: "agi",
    wing: "Wing E — Horizon Gallery",
    title: "AGI — Open Questions",
    subtitle: "Definitions, debates, timelines — careful and non-hype",
    span: "Concepts → contested future",
    accent: "#78716c",
    accentEvening: "#d6d3d1",
    hallIntro:
      "This gallery is a reading room, not a prophecy chamber. Artificial General Intelligence (AGI) usually means AI that can match or exceed human performance across a wide range of cognitive tasks. Researchers disagree on definitions, timelines, and risks. Epocharium presents the arguments — not a product pitch.",
    whyItMattered: [
      "Clarifying ‘general’ vs ‘narrow’ AI helps buyers and policymakers avoid category errors.",
      "Timeline debates shape investment, safety research, and education priorities.",
      "Evaluation remains hard: benchmarks saturate; real-world robustness lags demos.",
      "Governance questions (labor, misuse, concentration of compute) are already practical — even before any consensus AGI arrives.",
    ],
    dualMarket:
      "Policy discussions in the US/EU and growing AI talent pipelines in India share the same unresolved questions: how to measure capability, who sets norms, and how smaller firms compete when frontier training is capital-intensive.",
    milestones: [
      { year: "1950s–60s", title: "Early optimism", summary: "Some pioneers expected human-level AI within a generation — underestimating complexity." },
      { year: "1970s–90s", title: "Winters & resets", summary: "Funding crashes taught the field about hype cycles." },
      { year: "2000s–10s", title: "Narrow AI wins", summary: "Spectacular specialty systems without general intelligence." },
      { year: "2010s–20s", title: "Scaling hypotheses", summary: "Debate: does more data/compute yield generality, or only better narrow tools?" },
      { year: "Today", title: "Open evaluation", summary: "No agreed AGI test; capability profiles differ by task family." },
    ],
    keySystems: [
      { name: "Turing Test (critique)", era: "1950→", note: "Conversation mimicry ≠ general competence." },
      { name: "Cognitive architectures", era: "1980s→", note: "SOAR/ACT-R-style attempts at unified minds." },
      { name: "Benchmark suites", era: "2010s→", note: "MMLU-class tests — useful, but gameable and incomplete." },
      { name: "Alignment & safety research", era: "2010s→", note: "Trying to make powerful systems reliable and controllable." },
      { name: "Open-weight models", era: "2020s", note: "Distribute capability — and dual-use concerns — more widely." },
    ],
    relatedExhibits: ["ai-server-rack"],
    relatedArticles: ["agi-definitions", "timelines-and-uncertainty", "generative-ai-workplace"],
  },
];

export function getEpoch(slug: string): Epoch | undefined {
  return epochs.find((e) => e.slug === slug);
}

export function allEpochSlugs(): EpochSlug[] {
  return epochs.map((e) => e.slug);
}
