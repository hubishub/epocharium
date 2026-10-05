export type Article = {
  slug: string;
  title: string;
  deck: string;
  epoch: string;
  readingMinutes: number;
  publishedLabel: string;
  tags: string[];
  body: string[];
};

export const articles: Article[] = [
  {
    slug: "arpanet-to-www",
    title: "From ARPANET to the World Wide Web",
    deck: "How packet networks and hypertext turned research links into a public library of pages.",
    epoch: "internet",
    readingMinutes: 12,
    publishedLabel: "Museum Archive",
    tags: ["networking", "protocols", "WWW"],
    body: [
      "The internet did not begin as a consumer product. It began as an experiment in surviving broken links. In 1969, ARPANET connected a handful of research machines. Messages were split into packets that could take different paths and reassemble — a design suited to imperfect wires and, later, a planet of imperfect politics.",
      "Through the 1970s and early 1980s, engineers refined the rules of conversation between machines. The critical standardization moment arrived in 1983 when ARPANET adopted TCP/IP. Those protocols remain the shared language beneath today’s encrypted browsers and cloud APIs.",
      "Yet TCP/IP alone did not make the network feel like a place. That required the World Wide Web, proposed by Tim Berners-Lee at CERN (1989) and released in the early 1990s: URLs to name resources, HTTP to fetch them, and HTML to structure documents with links. Mosaic and successors turned that system into something you could click.",
      "For US and European research communities, the Web collapsed the cost of publishing papers and software docs. For later adopters — including India’s booming IT services and startup scenes — it meant joining a global documentation culture without owning a printing press. The museum’s Network Metaphor exhibit abstracts the idea: many paths, one conversation.",
      "What to remember on the gallery floor: open protocols scaled because no single company owned the whole stack. That lesson still frames debates about app stores, cloud regions, and AI model distribution.",
    ],
  },
  {
    slug: "broadband-and-cloud",
    title: "Broadband, Always-On, and the Cloud Utility",
    deck: "When the network stopped being a visit and became electricity for software.",
    epoch: "internet",
    readingMinutes: 10,
    publishedLabel: "Museum Archive",
    tags: ["broadband", "cloud", "SaaS"],
    body: [
      "Dial-up taught a generation that the internet was a temporary session. Broadband — DSL, cable, fiber, and later mobile data — flipped the expectation: connections stay up, software can phone home, and collaboration tools assume presence.",
      "Cloud infrastructure (popularized mid-2000s onward) rented compute and storage by the hour. Startups stopped buying racks before finding customers. Enterprises moved email, CRM, and later ML training jobs into regions operated by hyperscalers.",
      "For logistics and dispatch teams in the US dry-van market, always-on networks meant load boards, ELD data, and check-call workflows could live in browsers and phones rather than only on office desktops. For Indian delivery and remote engineering teams, cloud IDEs and SaaS ops tools made distributed work financially plausible.",
      "The museum point is not brand preference. It is architectural: when bandwidth and rented GPUs are utilities, product speed shifts from hardware procurement to software design and reliability culture.",
    ],
  },
  {
    slug: "mainframe-to-pc",
    title: "Mainframes to Personal Computers",
    deck: "From glass-house temples of compute to a beige box on a desk.",
    epoch: "computers",
    readingMinutes: 11,
    publishedLabel: "Museum Archive",
    tags: ["mainframe", "PC", "IBM"],
    body: [
      "Mid-century electronic computers filled rooms and payrolls. Institutions — governments, universities, airlines — batched jobs through operators. IBM’s System/360 (1964) mattered because software investment could survive hardware upgrades inside a compatible family.",
      "The 1970s hobbyist wave (Altair 8800 and kin) reframed computers as things individuals might own and program. Apple II, Commodore, and others brought BASIC and games into homes. Then the IBM PC (1981) and its clones locked in a business software market: spreadsheets, word processors, and later networked offices.",
      "India’s IT services industry later trained vast cohorts on these same PC and server stacks, exporting project delivery worldwide. The Early PC exhibit in Epocharium is an interpretive sculpture of that hinge decade — not a licensed museum replica, but a teaching object you can orbit.",
      "Takeaway: personal computing was a social reorganization of who gets to schedule the machine’s time.",
    ],
  },
  {
    slug: "gui-revolution",
    title: "The GUI Revolution",
    deck: "Windows, icons, and mice — when computers stopped demanding you speak their language first.",
    epoch: "computers",
    readingMinutes: 9,
    publishedLabel: "Museum Archive",
    tags: ["GUI", "Macintosh", "Windows"],
    body: [
      "Command lines remain powerful, but graphical user interfaces changed the addressable market for software. Research at Xerox PARC informed Apple’s Macintosh (1984), which demonstrated overlapping windows, menus, and a desktop metaphor to a broad audience.",
      "Microsoft Windows brought similar ideas into the dominant PC ecosystem through the 1990s, culminating in consumer moments like Windows 95. Office suites and browsers rode that usability wave.",
      "For museums of technology, the GUI is a reminder that adoption curves track cognitive load as much as FLOPS. The same lesson reappears in mobile multi-touch and in today’s AI chat surfaces: interfaces that invite exploration expand who can participate.",
    ],
  },
  {
    slug: "laptop-as-workplace",
    title: "The Laptop as Workplace",
    deck: "How notebooks turned knowledge work into something you carry.",
    epoch: "computers",
    readingMinutes: 8,
    publishedLabel: "Museum Archive",
    tags: ["laptop", "remote work", "ultrabook"],
    body: [
      "Portable computers existed as curiosities before they became default. Business notebooks in the 1990s — ThinkPad-class machines among them — made email and documents possible on aircraft trays and hotel desks.",
      "SSDs, better batteries, and Wi‑Fi turned ultrabooks into primary devices. Remote engineering, design, and operations roles now assume a laptop-shaped workplace. In Mohali and Chandigarh hiring markets, as in Berlin or Austin, the interview often begins with what you can ship from a 14-inch screen.",
      "Epocharium pairs this article with the Computation Hall: the endpoint of a journey that started with room-sized machines.",
    ],
  },
  {
    slug: "feature-to-smartphone",
    title: "Feature Phones to Smartphones",
    deck: "From SMS bricks to multi-touch computers that happen to call.",
    epoch: "mobiles",
    readingMinutes: 10,
    publishedLabel: "Museum Archive",
    tags: ["mobile", "iPhone", "Android"],
    body: [
      "Early mobiles prioritized voice and battery. GSM networks and SMS created a text culture in the 1990s. Feature phones added cameras, J2ME apps, and WAP browsers — useful, but constrained by keypads and carrier portals.",
      "The 2007–2008 smartphone rupture combined capacitive multi-touch, app stores, and always-on data. iOS and Android became platforms where developers could reach global users without negotiating each carrier’s deck.",
      "Visit the Phone Generations exhibit to see form-factor change as a proxy for capability. The thicker ‘brick’ and the thin slab tell a story about radios, glass, and software distribution.",
    ],
  },
  {
    slug: "app-ecosystems",
    title: "App Ecosystems and Software Distribution",
    deck: "When installing a program became tapping a store icon.",
    epoch: "mobiles",
    readingMinutes: 9,
    publishedLabel: "Museum Archive",
    tags: ["apps", "platforms", "distribution"],
    body: [
      "App stores solved discovery, payment, and update mechanics for mobile software — and introduced gatekeeping debates that continue today. Developers gained reach; platforms gained review power and revenue share.",
      "Enterprise mobility management, sideloading policies, and regional store rules show that ‘the mobile OS’ is also a political economy. For portfolio visitors, the lesson is product sense: distribution channels shape which features ship.",
    ],
  },
  {
    slug: "india-mobile-leapfrog",
    title: "India’s Mobile Leapfrog",
    deck: "Cheap data, smartphones, and UPI — skipping the desktop-first era.",
    epoch: "mobiles",
    readingMinutes: 11,
    publishedLabel: "Museum Archive",
    tags: ["India", "UPI", "leapfrog"],
    body: [
      "Many markets experienced desktops before phones. Large parts of India inverted the sequence: the first personal computer was a smartphone. Aggressive data pricing in the mid-late 2010s, combined with Android device diversity, put browsers, video, and chat in hundreds of millions of hands.",
      "UPI (launched 2016) made real-time payments a phone-native habit, reshaping merchants and consumer expectations faster than card-centric histories elsewhere. For hiring managers in Punjab’s Mohali–Chandigarh corridor, this context matters: candidates grew up mobile-first, and products must respect intermittent networks, vernacular UX, and payment defaults.",
      "Epocharium includes this gallery note because leapfrogging is a first-class technology story — not a footnote to Silicon Valley chronology.",
    ],
  },
  {
    slug: "symbolic-to-statistical",
    title: "From Symbolic AI to Statistical Learning",
    deck: "Rules, search, and the turn toward data-driven models.",
    epoch: "ai",
    readingMinutes: 12,
    publishedLabel: "Museum Archive",
    tags: ["AI history", "ML", "expert systems"],
    body: [
      "Early AI emphasized symbols, logic, and search. Researchers wrote rules and heuristics. Expert systems briefly commercialized that style in the 1980s, then hit brittleness walls outside narrow domains — one fuel for AI winters.",
      "Statistical machine learning reframed the craft: specify a model family, feed examples, optimize metrics. Features still needed craft; later deep learning would learn representations too.",
      "The museum’s tone: neither era was ‘wrong.’ Symbolic methods remain useful in compilers, verification, and some planning. Statistical methods dominate perception and language today. Understanding both is literacy.",
    ],
  },
  {
    slug: "deep-learning-turn",
    title: "The Deep Learning Turn",
    deck: "GPUs, benchmarks, and neural nets that finally worked on messy perception.",
    epoch: "ai",
    readingMinutes: 10,
    publishedLabel: "Museum Archive",
    tags: ["deep learning", "GPU", "ImageNet"],
    body: [
      "Around 2012, deep convolutional networks swept vision benchmarks such as ImageNet. Combined with GPU training, large labeled sets, and open toolkits, neural methods jumped from niche to default for speech and vision.",
      "The AI Server Rack exhibit dramatizes a physical truth: modern AI sits on power, cooling, and accelerators. Algorithms matter; so do warehouses.",
      "For practitioners in US/EU and India alike, the turn meant new job families — ML engineering, data labeling pipelines, MLOps — adjacent to classical software roles.",
    ],
  },
  {
    slug: "generative-ai-workplace",
    title: "Generative AI Enters the Workplace",
    deck: "Copilots, caveats, and changing interfaces to knowledge work.",
    epoch: "ai",
    readingMinutes: 10,
    publishedLabel: "Museum Archive",
    tags: ["generative AI", "productivity", "governance"],
    body: [
      "Large language and multimodal models brought generative suggestions into IDEs, office suites, and customer support consoles. The interface metaphor shifted toward conversation and draft-then-edit.",
      "Accuracy, copyright, privacy, and cost-per-token are not footnotes — they are product constraints. Strong teams treat models as probabilistic tools with evaluation harnesses, not oracles.",
      "In logistics-adjacent ops and remote engineering, generative AI may draft emails, summarize threads, or sketch code — still requiring human accountability. Epocharium’s Horizon Gallery continues the story into AGI debates without pretending those debates are settled.",
    ],
  },
  {
    slug: "agi-definitions",
    title: "What People Mean by AGI",
    deck: "Competing definitions, and why the label is slippery.",
    epoch: "agi",
    readingMinutes: 11,
    publishedLabel: "Museum Archive",
    tags: ["AGI", "definitions", "evaluation"],
    body: [
      "Artificial General Intelligence has no single agreed definition. Some mean human-level performance across most cognitive tasks; others mean economic substitutability for remote knowledge work; still others mean systems that can autonomously improve themselves.",
      "Because the target moves, marketing claims outrun measurement. Benchmarks saturate; real-world robustness, tool use, and long-horizon planning remain uneven.",
      "This article’s museum purpose is hygienic: visitors should leave able to ask ‘general at what?’ — a question as useful in Bangalore strategy decks as in Brussels policy briefs.",
    ],
  },
  {
    slug: "timelines-and-uncertainty",
    title: "Timelines, Winters, and Uncertainty",
    deck: "Why forecasting AGI dates is a museum exhibit about humility.",
    epoch: "agi",
    readingMinutes: 9,
    publishedLabel: "Museum Archive",
    tags: ["forecasting", "AI winters", "risk"],
    body: [
      "History cut both ways: early AI optimism missed how hard perception and common sense would be; later deep learning surprised skeptics with sudden capability jumps on some tasks.",
      "Responsible communication separates (1) observed capability, (2) extrapolated trends, and (3) values about risk. Collapsing them produces hype or denial.",
      "Epocharium’s Horizon Gallery invites slow reading. If you are a recruiter evaluating AI fluency, look for candidates who can hold uncertainty without freezing — and ship narrow systems with tests.",
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
