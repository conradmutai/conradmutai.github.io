import { PageFooter, PageNav } from "../components/PageChrome";

const values = [
  ["01", "Curiosity over certainty", "The most interesting problems usually start with a question I can't stop thinking about."],
  ["02", "Details make the difference", "Performance, naming, motion, and accessibility aren't extras—they are the product."],
  ["03", "Build, measure, learn", "I like ideas, but I trust prototypes. Shipping something small teaches more than planning something perfect."],
];

export default function AboutPage() {
  return (
    <div className="interior-page">
      <PageNav />
      <main>
        <section className="about-hero">
          <span className="eyebrow">About / Conrad Mutai</span>
          <h1>Engineer by training.<br /><em>Maker by nature.</em></h1>
          <div className="about-hero-bottom">
            <div className="pixel-portrait large-portrait" aria-label="Pixel portrait of Conrad">
              <div className="pixel-head"><i /><i /><b /><span /></div>
            </div>
            <p>I build software at the intersection of systems, interfaces, and human curiosity. I care about how things work—and how they feel to use.</p>
          </div>
        </section>

        <section className="about-story">
          <span className="eyebrow">The short version</span>
          <div>
            <p className="story-lead">I'm a computer science student who likes turning complicated ideas into simple, useful software.</p>
            <div className="story-columns">
              <p>My favorite projects sit somewhere between deep technical problems and thoughtful product design. One week that means tracing memory through a compiler; the next, it means tuning an animation until an interface feels obvious.</p>
              <p>Outside my editor, I'm usually bouldering, sketching, learning something unnecessarily specific, or making pour-over coffee more complicated than it needs to be.</p>
            </div>
          </div>
        </section>

        <section className="values-section">
          <span className="eyebrow">How I work</span>
          <div className="values-list">
            {values.map(([number, title, copy]) => (
              <article key={number}>
                <span>{number}</span>
                <h2>{title}</h2>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="toolkit">
          <span className="eyebrow">Current toolkit</span>
          <div>
            {["TypeScript", "React", "Rust", "Python", "Postgres", "Node.js", "Figma", "Git"].map((tool) => <span key={tool}>{tool}</span>)}
          </div>
        </section>
      </main>
      <PageFooter />
    </div>
  );
}
