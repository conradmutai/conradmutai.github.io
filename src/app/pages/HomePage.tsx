import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import { blogPosts, projectFilters, projects, siteLinks, type Project } from "../content";

type IconProps = { size?: number; className?: string };

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const ArrowUpRight = ({ size = 18, className = "" }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M7 17 17 7M7 7h10v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Github = ({ size = 18, className = "" }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M15 22v-4.2c.04-1.03-.35-2.03-1.1-2.75 3.6-.4 7.38-1.77 7.38-8A6.22 6.22 0 0 0 19.62 2.7 5.8 5.8 0 0 0 19.46.04S18.4-.3 16 1.34a15.4 15.4 0 0 0-8 0C5.6-.3 4.54.04 4.54.04a5.8 5.8 0 0 0-.16 2.66 6.22 6.22 0 0 0-1.66 4.37c0 6.22 3.78 7.58 7.38 8-.74.71-1.13 1.7-1.1 2.73V22m0-3.2c-3 .92-5-1.45-5-1.45-.55-1.4-1.35-1.78-1.35-1.78" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Linkedin = ({ size = 18, className = "" }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.7" />
    <path d="M8 10v7m0-10v.01M12 17v-4a3 3 0 0 1 6 0v4m-6-7v7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
  </svg>
);

const Copy = ({ size = 17, className = "" }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <rect x="8" y="8" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.7" />
    <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" stroke="currentColor" strokeWidth="1.7" />
  </svg>
);

const MenuIcon = ({ size = 22, className = "" }: IconProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M4 7h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

const digitSoftmax = [0.4, 0.1, 1.1, 0.6, 0.2, 0.9, 0.3, 99.5, 1.4, 2.2];
const attentionTokens = ["the", "cat", "sat", "on", "the", "mat"];
const upcBars = [3, 1, 2, 1, 3, 2, 1, 1, 3, 1, 2, 2, 1, 3, 1, 1, 2, 1, 3, 2, 1, 2, 1, 3, 1, 1, 2, 3];
const upcDigits = ["0", "3", "6", "0", "0", "0", "2", "9", "1", "4", "5", "2"];
const voxels = [
  { col: 0, row: 0, height: 1, tone: "grass" },
  { col: 1, row: 0, height: 2, tone: "grass" },
  { col: 2, row: 0, height: 1, tone: "stone" },
  { col: 0, row: 1, height: 2, tone: "grass" },
  { col: 1, row: 1, height: 3, tone: "grass" },
  { col: 2, row: 1, height: 2, tone: "stone" },
  { col: 0, row: 2, height: 1, tone: "stone" },
  { col: 1, row: 2, height: 2, tone: "grass" },
  { col: 2, row: 2, height: 1, tone: "grass" },
];
const detections = [
  { label: "#9", top: "22%", left: "16%", width: "15%", height: "30%", tone: "primary" },
  { label: "#6", top: "48%", left: "44%", width: "14%", height: "28%", tone: "primary" },
  { label: "#4", top: "18%", left: "68%", width: "14%", height: "29%", tone: "secondary" },
  { label: "ball", top: "62%", left: "28%", width: "7%", height: "13%", tone: "ball" },
];

function ProjectVisual({ type }: { type: Project["visual"] }) {
  if (type === "digits") {
    return (
      <div className="visual digits-visual" aria-hidden="true">
        <div className="digits-frame">
          <div className="digit-canvas">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M24 26h54L44 82" />
              <path d="M32 54h30" />
            </svg>
            <span className="canvas-note">28 × 28 · grayscale</span>
          </div>
          <div className="digit-readout">
            <div className="softmax">
              {digitSoftmax.map((score, digit) => (
                <div className={`softmax-col${digit === 7 ? " top" : ""}`} key={digit}>
                  <i style={{ height: `${Math.max(4, Math.sqrt(score / 99.5) * 100)}%` }} />
                  <span>{digit}</span>
                </div>
              ))}
            </div>
            <div className="digit-metrics">
              <b>pred 7</b>
              <span>val acc 99.52%</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "cnn") {
    return (
      <div className="visual cnn-visual" aria-hidden="true">
        <div className="net-pipeline">
          <div className="net-stage">
            <div className="map-stack single"><i /></div>
            <span>input 28²</span>
          </div>
          <div className="net-arrow" />
          <div className="net-stage">
            <div className="map-stack"><i /><i /><i /><i /></div>
            <span>conv 3×3</span>
          </div>
          <div className="net-arrow" />
          <div className="net-stage">
            <div className="map-stack small"><i /><i /><i /><i /></div>
            <span>maxpool 2×2</span>
          </div>
          <div className="net-arrow" />
          <div className="net-stage">
            <div className="flatten"><i /><i /><i /><i /><i /><i /><i /><i /></div>
            <span>flatten</span>
          </div>
          <div className="net-arrow" />
          <div className="net-stage">
            <div className="logits">
              <i /><i /><i /><i className="hot" /><i /><i /><i /><i /><i /><i />
            </div>
            <span>softmax 10</span>
          </div>
        </div>
        <span className="net-note">forward + backward pass, written by hand in NumPy</span>
      </div>
    );
  }
  if (type === "gpt") {
    return (
      <div className="visual gpt-visual" aria-hidden="true">
        <div className="token-strip">
          {attentionTokens.map((token, index) => <span key={`${token}-${index}`}>{token}</span>)}
          <span className="next">mat</span>
        </div>
        <div className="attn-matrix">
          {attentionTokens.map((rowToken, row) => (
            <div className="attn-row" key={`row-${rowToken}-${row}`}>
              {attentionTokens.map((colToken, col) => (
                <i
                  key={`cell-${colToken}-${col}`}
                  className={col > row ? "masked" : ""}
                  style={col > row ? undefined : { opacity: 0.18 + ((row * 3 + col * 5) % 5) * 0.16 }}
                />
              ))}
            </div>
          ))}
        </div>
        <span className="gpt-note">head 3 / 4 · causal mask</span>
      </div>
    );
  }
  if (type === "asm") {
    return (
      <div className="visual upc-visual" aria-hidden="true">
        <div className="barcode">
          {upcBars.map((weight, index) => (
            <i key={index} style={{ width: `${weight * 2}px`, opacity: index % 2 ? 0 : 1 }} />
          ))}
        </div>
        <div className="upc-digits">
          {upcDigits.map((digit, index) => (
            <span className={index === upcDigits.length - 1 ? "check" : ""} key={index}>{digit}</span>
          ))}
        </div>
        <div className="upc-math">
          <p>odd×3 + even = 120</p>
          <p>120 mod 10 = 0</p>
          <p className="verdict">✓ check digit valid</p>
        </div>
        <span className="upc-note">armv7 · big endian</span>
      </div>
    );
  }
  if (type === "voxel") {
    return (
      <div className="visual voxel-visual" aria-hidden="true">
        <div className="voxel-field">
          {voxels.flatMap((stack) =>
            Array.from({ length: stack.height }, (_, level) => (
              <i
                className={`voxel tone-${level === stack.height - 1 ? stack.tone : "stone"}`}
                key={`${stack.col}-${stack.row}-${level}`}
                style={{
                  left: `${50 + (stack.col - stack.row) * 15}%`,
                  top: `${46 + (stack.col + stack.row) * 8.5 - level * 11}%`,
                  zIndex: (stack.col + stack.row) * 10 + level,
                }}
              />
            )),
          )}
        </div>
        <div className="voxel-hud">
          <span>chunk 16³</span>
          <span>greedy meshing</span>
          <span>glsl</span>
        </div>
      </div>
    );
  }
  return (
    <div className="visual pitch-visual" aria-hidden="true">
      <svg className="pitch-lines" viewBox="0 0 320 200" preserveAspectRatio="none">
        <rect x="6" y="6" width="308" height="188" />
        <path d="M160 6v188" />
        <circle cx="160" cy="100" r="30" />
        <path d="M6 58h34v84H6M314 58h-34v84h34" />
        <circle cx="160" cy="100" r="2.5" className="spot" />
      </svg>
      {detections.map((box) => (
        <div className={`detection tone-${box.tone}`} key={box.label} style={{ top: box.top, left: box.left, width: box.width, height: box.height }}>
          <span>{box.label}</span>
        </div>
      ))}
      <div className="pitch-hud">
        <span className="live">tracking</span>
        <span>4 objects · frame 0912</span>
      </div>
    </div>
  );
}

export default function HomePage() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>("All");
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const copyTimer = useRef<number | undefined>(undefined);
  const { hash } = useLocation();

  // Arriving from another route with a hash (e.g. /#work) needs an explicit scroll.
  useEffect(() => {
    if (!hash) return;
    const target = document.querySelector(hash);
    target?.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" });
  }, [hash]);

  useEffect(() => () => window.clearTimeout(copyTimer.current), []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteLinks.email);
      setCopied(true);
      window.clearTimeout(copyTimer.current);
      copyTimer.current = window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard is unavailable (or denied) — leave the mailto link as the fallback.
    }
  };

  const shownProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter);
  const featuredProject = projects[carouselIndex];
  const moveCarousel = (direction: number) => {
    setCarouselIndex((current) => (current + direction + projects.length) % projects.length);
  };

  // The grid card may be filtered out, so clear the filter before scrolling to it.
  const showProjectCard = (project: Project) => {
    setFilter("All");
    window.requestAnimationFrame(() => {
      document.getElementById(`project-${project.number}`)?.scrollIntoView({
        behavior: prefersReducedMotion() ? "auto" : "smooth",
        block: "center",
      });
    });
  };

  const recentPosts = blogPosts.slice(0, 3);

  return (
    <main className="site-shell">
      <header className="nav-wrap">
        <a className="brand" href="#top" aria-label="Conrad Mutai, home">
          <span className="brand-mark">CM</span>
          <span>conrad.mutai</span>
        </a>
        <nav className={`nav-links ${menuOpen ? "open" : ""}`} aria-label="Main navigation">
          <a href="#work" onClick={() => setMenuOpen(false)}>work</a>
          <Link to="/about" onClick={() => setMenuOpen(false)}>about</Link>
          <Link to="/writing" onClick={() => setMenuOpen(false)}>writing</Link>
        </nav>
        <div className="nav-actions">
          <a className="availability" href={`mailto:${siteLinks.email}`}><i /> available for work</a>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
            <MenuIcon />
          </button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-kicker reveal reveal-1"><span>CS student &amp; software engineer</span><span>Based in Toronto, Canada</span></div>
        <div className="hero-heading reveal reveal-2">
          <h1>
            Building solutions<br />for the{" "}
            <em>
              future
              <svg className="scribble" viewBox="0 0 310 28" preserveAspectRatio="none" aria-hidden="true">
                <path d="M4 18c58-13 151-12 298-5M34 24c70-8 138-9 228-5" vectorEffect="non-scaling-stroke" />
              </svg>
            </em>
            <span className="dot">.</span>
          </h1>
        </div>
        <div className="hero-bottom reveal reveal-3">
          <p>I'm Conrad — a computer science student obsessed with the continuous possibilities of the growth of machines.</p>
          <a className="circle-link" href="#work" aria-label="See selected projects">
            <ArrowUpRight size={28} />
            <svg viewBox="0 0 100 100" aria-hidden="true"><path id="circlePath" d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0" fill="none" /><text><textPath href="#circlePath">SCROLL TO EXPLORE • SCROLL TO EXPLORE • </textPath></text></svg>
          </a>
        </div>
        <div className="hero-grid" aria-hidden="true"><i /><i /><i /><i /><i /><i /></div>
      </section>

      <section className="work section" id="work">
        <div className="section-head">
          <div>
            <span className="eyebrow">01 / selected work</span>
            <h2>Things I've built</h2>
          </div>
          <p>A mix of ambitious experiments, tools I wanted to exist, and software built to solve real problems.</p>
        </div>
        <div className="featured-carousel" aria-roledescription="carousel" aria-label="Featured projects">
          <div className="carousel-topline">
            <span>Featured project</span>
            <span>{String(carouselIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
          </div>
          <div className="carousel-slide" key={featuredProject.title}>
            <div className="carousel-visual">
              <ProjectVisual type={featuredProject.visual} />
            </div>
            <div className="carousel-copy">
              <div>
                <span className="carousel-category">{featuredProject.category}</span>
                <h3>{featuredProject.title}</h3>
                <p>{featuredProject.description}</p>
                <div className="tags">{featuredProject.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
              <button
                className="carousel-project-link"
                onClick={() => showProjectCard(featuredProject)}
                aria-label={`Show ${featuredProject.title} in the project list`}
              >
                View project <ArrowUpRight />
              </button>
            </div>
          </div>
          <div className="carousel-controls">
            <div className="carousel-dots" aria-label="Choose a featured project">
              {projects.map((project, index) => (
                <button
                  key={project.title}
                  className={index === carouselIndex ? "active" : ""}
                  onClick={() => setCarouselIndex(index)}
                  aria-label={`Show ${project.title}`}
                  aria-current={index === carouselIndex}
                />
              ))}
            </div>
            <div className="carousel-arrows">
              <button onClick={() => moveCarousel(-1)} aria-label="Previous project"><ArrowUpRight className="arrow-back" /></button>
              <button onClick={() => moveCarousel(1)} aria-label="Next project"><ArrowUpRight /></button>
            </div>
          </div>
        </div>
        <div className="filters" aria-label="Filter projects">
          {projectFilters.map((item) => (
            <button key={item} className={filter === item ? "active" : ""} onClick={() => setFilter(item)} aria-pressed={filter === item}>
              {item}
            </button>
          ))}
        </div>
        <div className="project-grid">
          {shownProjects.map((project) => (
            <article className="project-card" id={`project-${project.number}`} key={project.title}>
              <ProjectVisual type={project.visual} />
              <div className="project-meta">
                <span className="project-number">/{project.number}</span>
                <span>{project.category}</span>
              </div>
              <a className="project-title-row" href={project.url} target="_blank" rel="noreferrer">
                <h3>{project.title}</h3>
                <span className="project-arrow"><ArrowUpRight size={22} /></span>
              </a>
              <p>{project.description}</p>
              <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
        <a className="text-link" href={siteLinks.github} target="_blank" rel="noreferrer">view all projects on github <ArrowUpRight /></a>
      </section>

      <section className="about section" id="about">
        <div className="about-aside">
          <span className="eyebrow">02 / about me</span>
          <div className="pixel-portrait" aria-label="Abstract pixel portrait of Conrad">
            <div className="pixel-head"><i /><i /><b /><span /></div>
          </div>
          <span className="portrait-caption">currently debugging life</span>
        </div>
        <div className="about-copy">
          <p className="big-copy">I care about the tiny details — the <em>0.01%</em> improvement in accuracy, the colorful graph outputs, and the variable name that future-me won't hate.</p>
          <div className="about-columns">
            <p>I'm currently studying Computer Science at the Western University and exploring the machine learning landscape and its endless possibilities.</p>
            <p>When I'm away from my editor, you'll find me in the gym, keeping up with every sport, or having a little party!</p>
          </div>
          <div className="stack">
            <span>often working with</span>
            <div><b>Python</b><b>PyTorch</b><b>C</b><b>C#</b><b>C++</b><b>OpenGL</b><b>Java</b><b>Figma</b></div>
          </div>
        </div>
      </section>

      <section className="writing section" id="writing">
        <div className="section-head writing-head">
          <div>
            <span className="eyebrow">03 / field notes</span>
            <h2>Thinking out loud</h2>
          </div>
          <p>Dispatches on code, design, and the messy process of figuring things out.</p>
        </div>
        <div className="post-list">
          {recentPosts.map((post) => (
            <Link className="post-row" to={`/writing/${post.slug}`} key={post.slug}>
              <span className="post-index">{post.index}</span>
              <div className="post-content">
                <div className="post-meta"><span>{post.date}</span><span>{post.read}</span></div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </div>
              <span className="post-arrow"><ArrowUpRight size={24} /></span>
            </Link>
          ))}
        </div>
        <Link className="text-link dark-link" to="/writing">read all notes <ArrowUpRight /></Link>
      </section>

      <footer>
        <div className="footer-top">
          <span className="eyebrow light">04 / say hello</span>
          <h2>Have an idea?<br /><em>Let's make it real.</em></h2>
          <div className="footer-contact">
            <a href={`mailto:${siteLinks.email}`}>{siteLinks.email}</a>
            <button onClick={copyEmail} aria-label="Copy email address"><Copy /> {copied ? "copied" : "copy"}</button>
          </div>
        </div>
        <div className="footer-bottom">
          <span></span>
          <span>Built with care + too much coffee</span>
          <div className="socials">
            <a href={siteLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
            <a href={siteLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
          </div>
        </div>
      </footer>
    </main>
  );
}
