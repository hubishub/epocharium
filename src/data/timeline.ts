export type TimelineEvent = {
  id: string;
  year: number;
  yearLabel: string;
  title: string;
  track: "internet" | "computers" | "mobiles" | "ai" | "agi" | "cross";
  summary: string;
  href?: string;
};

export const timelineEvents: TimelineEvent[] = [
  { id: "t1", year: 1950, yearLabel: "1950", title: "Turing asks the question", track: "ai", summary: "Computing Machinery and Intelligence frames machine thinking as a research problem.", href: "/epochs/ai" },
  { id: "t2", year: 1956, yearLabel: "1956", title: "Dartmouth workshop", track: "ai", summary: "The term ‘artificial intelligence’ enters scholarly vocabulary.", href: "/epochs/ai" },
  { id: "t3", year: 1964, yearLabel: "1964", title: "IBM System/360", track: "computers", summary: "Compatible mainframe family reshapes enterprise IT investment.", href: "/epochs/computers" },
  { id: "t4", year: 1969, yearLabel: "1969", title: "ARPANET lights up", track: "internet", summary: "First packet exchange between UCLA and SRI.", href: "/epochs/internet" },
  { id: "t5", year: 1975, yearLabel: "1975", title: "Altair 8800", track: "computers", summary: "Hobbyist microcomputer culture ignites.", href: "/exhibits/early-pc" },
  { id: "t6", year: 1981, yearLabel: "1981", title: "IBM PC", track: "computers", summary: "Business personal computing standard emerges.", href: "/epochs/computers" },
  { id: "t7", year: 1983, yearLabel: "1983", title: "TCP/IP flag day", track: "internet", summary: "ARPANET adopts TCP/IP — the internet’s lingua franca.", href: "/articles/arpanet-to-www" },
  { id: "t8", year: 1984, yearLabel: "1984", title: "Macintosh ships", track: "computers", summary: "Desktop metaphor reaches a mass creative audience.", href: "/articles/gui-revolution" },
  { id: "t9", year: 1989, yearLabel: "1989–91", title: "World Wide Web", track: "internet", summary: "Berners-Lee proposes and releases WWW at CERN.", href: "/articles/arpanet-to-www" },
  { id: "t10", year: 1991, yearLabel: "1991", title: "GSM networks expand", track: "mobiles", summary: "Digital cellular scales across Europe and beyond.", href: "/epochs/mobiles" },
  { id: "t11", year: 1995, yearLabel: "1995", title: "Windows 95 & web boom", track: "cross", summary: "Consumer OS meets dial-up curiosity.", href: "/timeline" },
  { id: "t12", year: 1999, yearLabel: "1999", title: "BlackBerry era begins", track: "mobiles", summary: "Push email makes mobile indispensable for enterprise.", href: "/epochs/mobiles" },
  { id: "t13", year: 2007, yearLabel: "2007", title: "iPhone", track: "mobiles", summary: "Multi-touch smartphone resets expectations.", href: "/exhibits/phone-generations" },
  { id: "t14", year: 2008, yearLabel: "2008", title: "App Store & Android", track: "mobiles", summary: "App economies and open handset volume.", href: "/articles/app-ecosystems" },
  { id: "t15", year: 2006, yearLabel: "2006+", title: "Cloud IaaS mainstream", track: "internet", summary: "Elastic compute becomes a rental utility.", href: "/articles/broadband-and-cloud" },
  { id: "t16", year: 2012, yearLabel: "2012", title: "Deep learning breakout", track: "ai", summary: "Vision benchmarks shift; GPUs matter.", href: "/articles/deep-learning-turn" },
  { id: "t17", year: 2016, yearLabel: "2016", title: "India UPI launches", track: "mobiles", summary: "Real-time payments via phone — leapfrog case.", href: "/articles/india-mobile-leapfrog" },
  { id: "t18", year: 2017, yearLabel: "2017", title: "Transformer paper", track: "ai", summary: "Attention architectures reshape sequence learning.", href: "/epochs/ai" },
  { id: "t19", year: 2022, yearLabel: "2022+", title: "Generative AI at work", track: "ai", summary: "Chat interfaces put large models in daily workflows.", href: "/articles/generative-ai-workplace" },
  { id: "t20", year: 2024, yearLabel: "Now", title: "AGI still undefined", track: "agi", summary: "Capability rises; consensus definition and timelines remain contested.", href: "/epochs/agi" },
];
