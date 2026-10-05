export type GlossaryTerm = {
  id: string;
  term: string;
  phonetic?: string;
  epoch: string;
  definition: string;
  seeAlso?: string[];
};

export const glossary: GlossaryTerm[] = [
  { id: "arpanet", term: "ARPANET", epoch: "internet", definition: "Early US packet-switched research network (from 1969) that pioneered techniques later used on the internet.", seeAlso: ["Packet switching", "TCP/IP"] },
  { id: "tcpip", term: "TCP/IP", epoch: "internet", definition: "Suite of communications protocols that became the internet’s standard language after the 1983 ARPANET transition.", seeAlso: ["ARPANET", "DNS"] },
  { id: "dns", term: "DNS", epoch: "internet", definition: "Domain Name System — the hierarchical directory that maps human-readable names to network addresses.", seeAlso: ["TCP/IP"] },
  { id: "http", term: "HTTP", epoch: "internet", definition: "Hypertext Transfer Protocol — the Web’s request/response protocol for fetching resources.", seeAlso: ["World Wide Web"] },
  { id: "www", term: "World Wide Web", epoch: "internet", definition: "Hypertext system of linked documents invented at CERN; popularized with graphical browsers in the 1990s.", seeAlso: ["HTTP", "URL"] },
  { id: "url", term: "URL", epoch: "internet", definition: "Uniform Resource Locator — a standardized address for a web resource.", seeAlso: ["World Wide Web"] },
  { id: "cdn", term: "CDN", epoch: "internet", definition: "Content Delivery Network — geographically distributed caches that serve static (and sometimes dynamic) content closer to users." },
  { id: "cloud", term: "Cloud computing", epoch: "internet", definition: "On-demand rental of compute, storage, and services over the network, typically billed metered." },
  { id: "packet", term: "Packet switching", epoch: "internet", definition: "Method of splitting data into packets that can travel independently and reassemble — robust to partial link failure." },
  { id: "mainframe", term: "Mainframe", epoch: "computers", definition: "Large institutional computer designed for high-volume transaction and batch workloads, historically centralized in data centers." },
  { id: "microprocessor", term: "Microprocessor", epoch: "computers", definition: "CPU on a single chip; the breakthrough that enabled affordable personal computers." },
  { id: "ibm-pc", term: "IBM PC", epoch: "computers", definition: "1981 personal computer whose architecture (and clones) became a business software standard.", seeAlso: ["GUI"] },
  { id: "gui", term: "GUI", epoch: "computers", definition: "Graphical User Interface — windows, icons, menus, pointer — lowering the skill floor for computer use." },
  { id: "os", term: "Operating system", epoch: "computers", definition: "System software that manages hardware resources and provides services for applications." },
  { id: "ultrabook", term: "Ultrabook", epoch: "computers", definition: "Marketing/category term for thin, light laptops with strong battery life aimed at mobile professionals." },
  { id: "gsm", term: "GSM", epoch: "mobiles", definition: "Global System for Mobile Communications — widely deployed digital cellular standard originating in Europe." },
  { id: "sms", term: "SMS", epoch: "mobiles", definition: "Short Message Service — text messaging over cellular networks that created a major cultural medium." },
  { id: "feature-phone", term: "Feature phone", epoch: "mobiles", definition: "Mobile phone with voice/SMS and limited apps/camera, predating modern app-store smartphones." },
  { id: "smartphone", term: "Smartphone", epoch: "mobiles", definition: "Handheld computer with cellular radios, app platforms, and rich sensors (GPS, cameras, etc.)." },
  { id: "app-store", term: "App store", epoch: "mobiles", definition: "Curated marketplace for installing and updating mobile applications, with review and payment systems." },
  { id: "upi", term: "UPI", epoch: "mobiles", definition: "Unified Payments Interface — India’s real-time payment system enabling phone-based transfers between banks." },
  { id: "android", term: "Android", epoch: "mobiles", definition: "Mobile operating system led by Google; dominant by global unit volume across price tiers." },
  { id: "symbolic-ai", term: "Symbolic AI", epoch: "ai", definition: "AI approaches based on explicit symbols, logic, and hand-authored rules/search — prominent in early decades." },
  { id: "ml", term: "Machine learning", epoch: "ai", definition: "Field that builds systems that improve performance on tasks from data rather than only fixed rules." },
  { id: "deep-learning", term: "Deep learning", epoch: "ai", definition: "Machine learning using multi-layer neural networks, especially successful in perception and language." },
  { id: "transformer", term: "Transformer", epoch: "ai", definition: "Neural architecture (2017) using attention mechanisms; foundation of many large language models." },
  { id: "llm", term: "Large language model", epoch: "ai", definition: "Neural model trained on vast text corpora to predict tokens — used for drafting, Q&A, coding aid, etc." },
  { id: "gpu", term: "GPU", epoch: "ai", definition: "Graphics Processing Unit — highly parallel processor that accelerated deep learning training and inference." },
  { id: "agi", term: "AGI", epoch: "agi", definition: "Artificial General Intelligence — contested term for AI with broad, human-level (or beyond) cognitive competence across tasks.", seeAlso: ["Narrow AI"] },
  { id: "narrow-ai", term: "Narrow AI", epoch: "agi", definition: "AI systems specialized for particular tasks (translation, vision, recommendations) without general competence." },
  { id: "alignment", term: "AI alignment", epoch: "agi", definition: "Research and engineering aimed at making AI systems behave in accordance with intended goals and constraints." },
  { id: "benchmark", term: "Benchmark", epoch: "agi", definition: "Standardized evaluation suite; useful but incomplete proxies for real-world capability." },
  { id: "ai-winter", term: "AI winter", epoch: "agi", definition: "Period of reduced funding and enthusiasm after AI promises outpaced results — historically cyclical." },
];
