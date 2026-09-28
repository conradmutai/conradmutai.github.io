/** An image placed between paragraphs. Files go in public/ (e.g. public/journal/). */
export type InlineImage = { src: string; alt: string; caption?: string };
/** A paragraph of text, or an image at that point in the text. */
export type Block = string | InlineImage;

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
    paragraphs: Block[];
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
  series?: string;
  title: string;
  excerpt: string; // one line shown on the journal list
  // One string per paragraph. To put an image between paragraphs, add an object:
  // body: ["First paragraph.", { src: "/journal/x.jpg", alt: "...", caption: "optional" }, "Next paragraph."]
  body: Block[];
  // Optional star rating for a show / movie / book: 0–5, halves allowed (e.g. 4.5).
  rating?: number;
  // Optional: for longer entries, split into titled sections (shown after `body`).
  // e.g. sections: [{ heading: "Why I almost quit", paragraphs: ["...", "..."] }]
  sections?: Array<{ heading?: string; paragraphs: Block[] }>;
  // Optional, shown to the right of the title. 1 image = single photo,
  // 2 = side by side, 3 or more = collage (first 4 are used).
  images?: JournalImage[];
};

// Newest first. Empty fields are fine: the pages skip anything left blank.
export const journalEntries: JournalEntry[] = [
  {
    slug: "New beginnings",
    date: "Sep 27th, 2026",
    category: "My thoughts",
    title: "A New Dawn",
    excerpt: "Pushing my thoughts out to the world even though they might not seem relevant.",
    body: [
      "I started this website initially to display my coding projects, and to write about my learning experience, my thought process, and more. However, in the process of making thsi website, I felt like as someone who enjoys media, and many other things, this might be the best chance I have to write about what I love. So I decided to make the off-beat journal. With this I want to write about pieces of media I greatly enjoy, the sports I love and maybe do research pieces of past seasons and runs of all time great sporting teams/people, and then about my own personal journey.",
      "So starting this week, I will be writing a weekly think pieces and/or personal journals to everyone, and maybe one day this could be a way for my kids in the future to get a glimpse of me and how I've grown over the years. And maybe I will pick up a few fans who gain some interest in the writing I put out.",
      "I also have some thoughts in the future, like maybe making video essays on the topics I write here on these blog posts, and maybe even vlogs to accompany some of the journals I publish to bring people more into my day to day life. But at the end these are all just plans for the future; I hope these will be able to entertain people and maybe inspire others to share what they love."
    ],
  },
  {
    slug: "One Piece is the Greatest Piece of Fiction",
    date: "Sep 28th, 2026",
    category: "Movies/TV",
    series: "One Piece",
    title: "Why I Fell in Love with One Piece - Part 1",
    rating: 5.0,
    excerpt: "The East Blue Saga - Establishing the Thesis of the Whole Series, Recruiting Season, and the Emotional Whirlpool",
    body: [
      "One Piece was a piece of media that everyone I knew wrote off as too long, tedious, repetitive, and a whole lot of nonsense that people spouted.",
      { src: "/journal/going-merry.jpeg", alt: "The Going Merry at sea", caption: "Kaya gives the Going Merry to the crew in Episode 17" },
      "However, one day I ended up talking with someone who was an avid media connoisseur like me (corny I know), who argued that my opinions on One Piece were prejudiced and that I should give the show a try. I took that personally, so I embarked on a journey that I would never turn my back on since I started 9 years ago.",
    ],
    sections: [
      {
        heading: "The Beauty of the Story's Thesis",
        paragraphs: [
          "One Piece was originally hyped up to be this cool fighting Shonen, the same as most, and that was it to the story. But as I read, there were a few things I picked up on that I really loved, and they carried through the whole story. That being: found family over blood family, dreams fueling the future, and villainy born from the situations around them.",
          "I know it is controversial to most, and I want to clarify that I love my family deeply and they are always at the top of my list. However, One Piece highlights one thing, and it is that your found family can be just as valuable as your real family. This aspect of the story resonated deeply with me because it made us feel like we were part of this found family, and it also relates to my real life situation where I am so far away from my family that my friends have essentially become my family. It draws to my reality, as I have people who were willing to do anything to help me and vice versa, the same way the crew does for each other. We see this through the fight for Nami in Arlong Park, and they do it even though she insists they don't. Oda further succeeds at creating a pseudo-familial relation between the reader and the characters as we start to deeply care about them and their emotional state, and I think that's what drew me so deep into the story.",
          "Another thing that I would say was very addictive is the infinite ambition of the main cast, from Luffy's dream of being King of the Pirates, Zoro's goal of being the greatest swordsman, Nami's goal to map the whole world, and Sanji finding the All Blue (the less we talk about WhoSlopp), they're all really addictive. We have a crew with everyone super ambitious to reach their goal no matter what, even overcoming their challenges in order to do this. For instance, Zoro ran into Mihawk, the strongest swordsman in the world, and took a humiliating loss. However, he held onto the hope to keep going no matter what, and despite the failure his ambition to continue almost made me shed a tear. It is a story where even with failure their resolution doesn't break, and seeing a taste of it in the beginning was enough to draw me in like a fish on a hook.",
          { src: "/journal/one-piece/zoro-crying.webp", alt: "Zoro post loss to Mihawk at Baratie", caption: "He lied." },
          "Then the villainy. Unlike the typical villain who is just evil because they want to rule the world, we see villains shaped by their situations, just like in real life. Arlong is the seed of this: in East Blue he's a racist tyrant who hates humans, and Oda later shows the oppression behind that hate. Even though it isn't something we should do in real life, it is understandable how someone could come to believe there is an ingrained evil in humans based off their own experience. Oda's choice not to sugarcoat the reality of the world was something that was just so appealing to me. And this continues going forward, because not hiding the ideas of our world in his story is what makes it so great to me, the idea that villainy is created by the evil of his world just like ours."
        ]
      },
      {
        heading: "Recruiting Season",
        paragraphs: [
          "What I love about Luffy is that he knows he can't do this alone. He needs a crew to make his dream come true, and he's got gaps that other people fill. But he also doesn't make the crew all about his own dream. He brings in people who share his level of ambition, and that's what draws them to him.",
          "Zoro is the clearest example. When Luffy first meets him tied up and waiting for execution, he tells Zoro he's going to be King of the Pirates. Zoro's dream is just as outlandish, becoming the world's greatest swordsman, and Luffy takes it seriously instead of laughing it off. That mutual respect is what makes their bond work. Both of them have a goal that sounds ridiculous, and they push each other to the limit to reach it.",
          { src: "/journal/one-piece/luffy-zoro.webp", alt: "Luffy asks Zoro to join his crew", caption: "Luffy asks Zoro to join his crew." },
          "Usopp and Sanji follow the same pattern. Luffy never sells them on his dream, he backs theirs, and that's why they stay. A crew built on shared ambition instead of power levels is why the found-family theme hits so hard.",
        ]
      },
      {
        heading: "The Emotional Whirlpool",
        paragraphs: [
          "For most of the East Blue saga, One Piece plays like a goofy adventure, and Arlong Park is where the darkness gets personal. This is when Oda makes the sudden switch and the story stops being that simple. It's a party every day for some people in this world, and for others it's a continuous struggle.",
          "Arlong Park deals with themes we're uncomfortable discussing in our world: slavery, exploitation, murder, oppression, racism, and how evil brews evil. Nami is someone who was about to fall into that cycle. Arlong's racist tyranny took over her town and enslaved her because she was a useful human, then he killed her mother, Bellemere, which pushed her to the edge. He took her freedom and her family, and she started to hate the fishmen and wish for their deaths. That's the dark reality that exists in our world too, since people tend to become who they are based on the situations they're in.",
          { src: "/journal/one-piece/nami-help.webp", alt: "Nami's plea for help", caption: "Nami asking for help from Luffy to defeat Arlong." },
          "And then Luffy breaks the cycle. After years of carrying it alone, Nami finally cries out for help, and he doesn't hesitate. He puts his hat on her head and goes to war for her, and the rest of the crew is right there with him. This is where the recruiting season pays off. Nami didn't need a stronger captain, she needed a family that would fight for her, and that's what makes this the emotional peak of the saga.",
        ]
      },
    ],
    images: [
      { src: "/journal/luffy.jpg", alt: "Luffy's inspiring smile" },
      { src: "/journal/one-piece-team.webp", alt: "Original four Straw Hats" },
      { src: "/journal/shanks.webp", alt: "Shanks the GOAT." },
    ],
  },
];
