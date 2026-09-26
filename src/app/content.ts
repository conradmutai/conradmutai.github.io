export type BlogPost = {
  slug: string;
  index: string;
  date: string;
  read: string;
  title: string;
  excerpt: string;
  category: string;
  intro: string;
  sections: Array<{ heading: string; paragraphs: string[]; code?: string }>;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "building-my-own-compiler",
    index: "001",
    date: "May 18, 2025",
    read: "8 min read",
    category: "Systems",
    title: "Why I built my own compiler (and what broke first)",
    excerpt: "Notes from turning a grammar and too much coffee into an actual executable.",
    intro:
      "I started Lumen because compilers felt like magic. The fastest way I know to make something less mysterious is to build a small, slightly questionable version of it yourself.",
    sections: [
      {
        heading: "Start with the language, not the parser",
        paragraphs: [
          "My first mistake was opening an empty Rust file and immediately writing lexer code. I had tokens before I knew what programs in the language should feel like. Unsurprisingly, the grammar changed every few hours.",
          "I stepped back and wrote ten tiny Lumen programs first: a Fibonacci function, a loop, a record, and examples that should fail. Those examples became the real specification.",
        ],
        code: `fn fib(n: int) -> int {\n  if n < 2 { return n; }\n  return fib(n - 1) + fib(n - 2);\n}`,
      },
      {
        heading: "The AST is your product",
        paragraphs: [
          "Parsing gets the attention, but every later stage depends on the shape of the abstract syntax tree. A clean AST made type checking almost pleasant; a leaky one made every error message worse.",
          "The breakthrough was treating source spans as first-class data. Once every node knew where it came from, diagnostics could point to the exact expression that caused a problem.",
        ],
      },
      {
        heading: "What broke first",
        paragraphs: [
          "Operator precedence. Then nested scopes. Then my confidence. Each bug exposed an assumption I hadn't written down, which is exactly why the project was worth doing.",
          "Lumen is still tiny, but it now compiles real programs through LLVM. More importantly, compiler errors no longer feel like messages from another dimension.",
        ],
      },
    ],
  },
  {
    slug: "websockets-without-hand-waving",
    index: "002",
    date: "Apr 02, 2025",
    read: "6 min read",
    category: "Engineering",
    title: "WebSockets without the hand-waving",
    excerpt: "A practical mental model for presence, reconnects, and the messages in between.",
    intro:
      "A WebSocket gives you a pipe. A reliable collaborative experience needs a protocol, a clock, a reconnect strategy, and a clear answer to who owns the truth.",
    sections: [
      {
        heading: "Connection is not presence",
        paragraphs: [
          "A connected socket only tells you that a transport exists right now. Presence is a product-level concept: active, idle, away, or gone. Model it explicitly and let the server expire stale sessions.",
          "Heartbeats are useful, but they should not become your application protocol. Keep transport health and user activity as separate signals.",
        ],
      },
      {
        heading: "Design every message twice",
        paragraphs: [
          "First design the happy-path message. Then design it again assuming it will arrive twice, arrive late, or arrive after the client has reconnected.",
          "Small event IDs and monotonically increasing sequence numbers do an unreasonable amount of work. They make deduplication, replay, and debugging possible.",
        ],
        code: `type Event = {\n  id: string;\n  roomId: string;\n  sequence: number;\n  payload: unknown;\n};`,
      },
      {
        heading: "Reconnection is a sync problem",
        paragraphs: [
          "When a client returns, don't just reconnect it—reconcile it. Send the last known sequence and ask for everything after it. If the gap is too large, request a fresh snapshot.",
          "The goal is not to pretend the connection never dropped. The goal is to make recovery predictable.",
        ],
      },
    ],
  },
  {
    slug: "making-interfaces-feel-alive",
    index: "003",
    date: "Mar 11, 2025",
    read: "4 min read",
    category: "Design",
    title: "Making interfaces feel alive",
    excerpt: "A few rules for motion that adds meaning instead of getting in the way.",
    intro:
      "The best interface motion feels less like decoration and more like physics. It explains where something came from, what changed, and where attention should go next.",
    sections: [
      {
        heading: "Motion needs a job",
        paragraphs: [
          "Before adding an animation, finish this sentence: this motion helps the user understand ____. If the blank stays empty, skip it.",
          "A menu can reveal its origin. A saved state can confirm completion. A reordered list can preserve spatial context. Those are jobs; bouncing because it looks fun is not.",
        ],
      },
      {
        heading: "Distance should shape duration",
        paragraphs: [
          "Elements traveling farther generally need more time, but the relationship should not be linear. Long transitions feel slow, so compress the range and use easing to imply momentum.",
          "Most of my interface transitions land between 160 and 320 milliseconds. The exact value matters less than the rhythm being consistent.",
        ],
        code: `.panel {\n  transition: transform 240ms cubic-bezier(.2,.8,.2,1);\n}`,
      },
      {
        heading: "Respect stillness",
        paragraphs: [
          "Reduced-motion preferences are not an optional polish pass. Build them alongside the default experience so the interface remains coherent without sweeping movement.",
          "Good motion earns its place. Great motion also knows when to disappear.",
        ],
      },
    ],
  },
];

export type Project = {
  number: string;
  title: string;
  description: string;
  tags: string[];
  category: ProjectCategory;
  visual: "collab" | "compiler" | "orbit" | "search";
};

export type ProjectCategory = "Full-stack" | "Systems" | "Creative code";

export const projectFilters = ["All", "Full-stack", "Systems", "Creative code"] as const;

export const projects: Project[] = [
  {
    number: "01",
    title: "CollabSpace",
    description: "A real-time collaborative whiteboard with multiplayer cursors, smart shapes, and conflict-free syncing.",
    tags: ["React", "WebSockets", "Redis"],
    category: "Full-stack",
    visual: "collab",
  },
  {
    number: "02",
    title: "Lumen Compiler",
    description: "A tiny compiled language built from scratch, complete with a lexer, AST, type checker, and LLVM backend.",
    tags: ["Rust", "LLVM", "Compilers"],
    category: "Systems",
    visual: "compiler",
  },
  {
    number: "03",
    title: "Orbit",
    description: "A spatial task manager that turns projects into interactive constellations and makes planning feel fluid.",
    tags: ["TypeScript", "Three.js", "IndexedDB"],
    category: "Creative code",
    visual: "orbit",
  },
  {
    number: "04",
    title: "TinySearch",
    description: "A compact search engine that crawls, indexes, and ranks a curated slice of the web in milliseconds.",
    tags: ["Python", "FastAPI", "NLP"],
    category: "Full-stack",
    visual: "search",
  },
];

// TODO: replace with real profile URLs — these are prototype placeholders.
export const siteLinks = {
  email: "hello@conradmutai.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
};
