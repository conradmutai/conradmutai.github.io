export type BlogPost = {
  slug: string;
  index: string;
  date: string;
  read: string;
  title: string;
  excerpt: string;
  category: string;
  intro: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
    code?: string;
    flag?: { level: "critical" | "high" | "stretch"; label: string; target: string };
    items?: string[];
    link?: { label: string; to: string };
  }>;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "Machine Learning Infra Roadmap",
    index: "000",
    date: "Sep 26, 2026",
    read: "3 min read",
    category: "Roadmap",
    title: "The ML infrastructure roadmap I'm actually working through",
    excerpt: "Three projects, their target dates, and why each one matters for ML systems work.",
    intro:
      "This is the plan, not the retro. Nothing below is finished yet — writing it down in public is mostly a way to make sure I actually do it.",
    sections: [
      {
        heading: "Project A — Custom CUDA Kernel",
        flag: { level: "critical", label: "Critical for this track", target: "October – mid-November 2026" },
        paragraphs: ["The most direct signal for NVIDIA and any GPU-adjacent infra team."],
        items: [
          "CUDA fundamentals — threads, blocks, warps, shared memory (1–2 week ramp-up)",
          "Naive matmul kernel",
          "Profile vs PyTorch — understand where the gap is",
          "Optimize: memory coalescing, tiling",
          "Elementwise kernels (ReLU, softmax)",
          "Stretch: basic attention kernel — one of the hottest areas right now",
          "Document profiling results and optimization decisions",
        ],
      },
      {
        heading: "Project B — OSS Contribution to a Real ML Systems Project",
        flag: { level: "high", label: "Highest single-item signal for this track", target: "November – December 2026" },
        paragraphs: [
          "Neither existing roadmap fully captures this, but for ML infra specifically it out-signals a solo project because it proves you can operate inside someone else's large, unfamiliar codebase — which is the actual job.",
        ],
        items: [
          "Target repo: PyTorch, Triton, or a comparable ML systems project",
          "Land 2–3 small PRs first (docs, tests, small bugfixes) to build credibility",
          "Scope and land one larger, meaningful PR — ideally touching a CUDA op or kernel-adjacent code",
          "Document the experience — this becomes your strongest interview story",
        ],
      },
      {
        heading: "Project C — Toy Compiler (Stretch)",
        flag: { level: "stretch", label: "Higher-value here than on the general SWE track", target: "January 2027 if time allows" },
        paragraphs: [
          "Frameworks like Triton, XLA, and TorchInductor are compilers that lower ML ops to hardware — this is a closer analog to real ML-infra work than it is to general SWE.",
        ],
        items: [
          "Small, well-scoped toy language grammar",
          "Lexer + recursive-descent parser + AST",
          "Bytecode VM or LLVM IR backend",
          "README walkthrough with test programs",
        ],
      },
    ],
  },
  {
    slug: "Getting Started",
    index: "001",
    date: "Sep 26th, 2026",
    read: "6 min read",
    category: "Personal",
    title: "Where Do I Stand in the Field and My Ambitions",
    excerpt: "Notes from my 2 year journey and where I'm going from here.",
    intro:
      "I joined Computer Science at first with the ambition of getting to love the computers I was always fascinated in, but of recent I have been soul searching on where I find myself in this ever changing field, but over the last year I feel like I found a love in Machine Learning and Computer Graphics through the projects I undertook.",
    sections: [
      {
        heading: "Back to Summer of Last Year",
        paragraphs: [
          "At first I had interest in web development, but with the rapid growth of AI, whatever I found interesting at first was quickly being filtered out of the industry. I spent the first month dooming about my future but as time went forward I found interest in a field I left behind and that was math, and with the ever-rising importance of Machine Learning it became a field where I quickly grew attached to.",
          "I started to search for ways on how to break into this field, and the first step I took was partaking in Andrew Ng's Machine Learning Specialization. This gave a lot of surface level knowledge about the field, but I felt the need to learn more, so I started learning from the Understanding Deep Learning textbook by Simon J.D. Prince which took me deeper into a rabbit hole. From then on, I started to partake in competitions on Kaggle, then adapting research papers, alongside building Machine Learning/Deep Learning projects while minimalizing the amount of frameworks I utilized.",
        ],
      },
      {
        heading: "The Second Discovery",
        paragraphs: [
          "Machine Learning was one thing I found that I enjoyed, but apart from that I started to find interest in game development through computer graphics; OpenGL was a framework that I stumbled upon when my friends kept raving on about it, and I didn't realize that the game I so love, Minecraft, utilized a framework that was developed with OpenGL.",
          "It started with me doing a few tutorials, but then it turned into a genuine love for doing it, and I decided that post finishing the tutorial I wanted to make an engine which would generate a small world, and several other factors. It ended up being one of the most interesting developments I have made of recent and going forward I want to continue to build upon Computer Graphics, and specifically read more on Vulkan and/or Metal as it is the new era of game development.",
          
        ],
      },
      {
        heading: "Where am I Going From Here?",
        paragraphs: [
          "I want to further build on the Machine Learning and game development in various ways.",
          "For more on my Voxel Engine, I will soon publish a blog post going into depth about the topic.",
          "And for Machine Learning, I currently have a roadmap of projects that I aim to accomplish going forward this year:",
        ],
        link: { label: "Read the ML infrastructure roadmap", to: "/writing/Machine%20Learning%20Infra%20Roadmap" },
      },
    ],
  },
  // {
  //   slug: "websockets-without-hand-waving",
  //   index: "002",
  //   date: "Apr 02, 2025",
  //   read: "6 min read",
  //   category: "Engineering",
  //   title: "WebSockets without the hand-waving",
  //   excerpt: "A practical mental model for presence, reconnects, and the messages in between.",
  //   intro:
  //     "A WebSocket gives you a pipe. A reliable collaborative experience needs a protocol, a clock, a reconnect strategy, and a clear answer to who owns the truth.",
  //   sections: [
  //     {
  //       heading: "Connection is not presence",
  //       paragraphs: [
  //         "A connected socket only tells you that a transport exists right now. Presence is a product-level concept: active, idle, away, or gone. Model it explicitly and let the server expire stale sessions.",
  //         "Heartbeats are useful, but they should not become your application protocol. Keep transport health and user activity as separate signals.",
  //       ],
  //     },
  //     {
  //       heading: "Design every message twice",
  //       paragraphs: [
  //         "First design the happy-path message. Then design it again assuming it will arrive twice, arrive late, or arrive after the client has reconnected.",
  //         "Small event IDs and monotonically increasing sequence numbers do an unreasonable amount of work. They make deduplication, replay, and debugging possible.",
  //       ],
  //       code: `type Event = {\n  id: string;\n  roomId: string;\n  sequence: number;\n  payload: unknown;\n};`,
  //     },
  //     {
  //       heading: "Reconnection is a sync problem",
  //       paragraphs: [
  //         "When a client returns, don't just reconnect it—reconcile it. Send the last known sequence and ask for everything after it. If the gap is too large, request a fresh snapshot.",
  //         "The goal is not to pretend the connection never dropped. The goal is to make recovery predictable.",
  //       ],
  //     },
  //   ],
  // },
];

export type Project = {
  number: string;
  title: string;
  url: string;
  description: string;
  tags: string[];
  category: ProjectCategory;
  visual: "digits" | "cnn" | "gpt" | "asm" | "voxel" | "pitch";
};

export type ProjectCategory = "Machine learning" | "Systems" | "Graphics";

export const projectFilters = ["All", "Machine learning", "Systems", "Graphics"] as const;

export const projects: Project[] = [
  {
    number: "01",
    title: "Digit Recognizer",
    url: "https://github.com/conradmutai/digit-recognizer-tf",
    description: "Project made for the beginner Kaggle competition Digit Recognition that recorded a validation accuracy of 99.52%.",
    tags: ["Python", "TensorFlow", "Jupyter"],
    category: "Machine learning",
    visual: "digits",
  },
  {
    number: "02",
    title: "CNN From Scratch",
    url: "https://github.com/conradmutai/CNN-From-Scratch",
    description: "Exploring the creation of a convolutional neural network without machine learning libraries like PyTorch or TensorFlow.",
    tags: ["Python", "NumPy", "Jupyter"],
    category: "Machine learning",
    visual: "cnn",
  },
  {
    number: "03",
    title: "mini-gpt-2",
    url: "https://github.com/conradmutai/mini-gpt-2",
    description: "A mini GPT-2 with MultiHeadAttention, TransformerBlock, and PositionalEncoding written from scratch.",
    tags: ["Python", "PyTorch", "NumPy"],
    category: "Machine learning",
    visual: "gpt",
  },
  {
    number: "04",
    title: "Football Tactical Intelligence",
    url: "https://github.com/conradmutai/Football-Tactical-Intelligence-and-Analysis-Tool",
    description: "A model utilizing vision AI to analyze players and provide player valuation based off their performance.",
    tags: ["Python", "PyTorch", "OpenCV"],
    category: "Machine learning",
    visual: "pitch",
  },
  {
    number: "05",
    title: "UPCVerifier",
    url: "https://github.com/conradmutai/UPCVerifier",
    description: "An ARMv7 big-endian program that is able to verify UPC codes.",
    tags: ["Assembly", "ARMv7"],
    category: "Systems",
    visual: "asm",
  },
  {
    number: "06",
    title: "Voxel Engine",
    url: "https://github.com/conradmutai/Voxel-Engine",
    description: "TODO: project description — the repo has no description on GitHub yet.",
    tags: ["C++", "GLSL", "CMake"],
    category: "Graphics",
    visual: "voxel",
  },
];

// TODO: replace the email and LinkedIn URL — these are prototype placeholders.
export const siteLinks = {
  email: "conrad.mutai@gmail.com",
  github: "https://github.com/conradmutai",
  linkedin: "https://linkedin.com",
};

/* ------------------------------------------------------------------ */
/* Off-beat Journal: the non-code side (movies, sports, life).         */
/* Lives at /journal, kept off the homepage and out of /writing.       */
/* ------------------------------------------------------------------ */

export type JournalImage = {
  src: string; // put files in public/journal/ and use "/journal/<file>", e.g. "/journal/stadium.jpg"
  alt: string; // short description of the photo, for screen readers
};

export type JournalEntry = {
  slug: string; // URL: /journal/<slug>. Lowercase-with-dashes, e.g. "first-entry"
  date: string; // e.g. "Sep 27, 2026"
  category: string; // e.g. "Movies", "Sports", "Life"
  title: string;
  excerpt: string; // one line shown on the journal list
  body: string[]; // one string per paragraph
  // Optional, shown to the right of the title. 1 image = single photo,
  // 2 = side by side, 3 or more = collage (first 4 are used).
  images?: JournalImage[];
};

// Newest first. Empty fields are fine: the pages skip anything left blank.
export const journalEntries: JournalEntry[] = [
  {
    slug: "first-entry",
    date: "",
    category: "",
    title: "",
    excerpt: "",
    body: [],
    images: [],
  },
];
