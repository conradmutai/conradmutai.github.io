import { PageFooter, PageNav } from "../components/PageChrome";
import { siteLinks } from "../content";

const values = [
  ["01", "Build it to understand it", "I wrote a CNN and a small GPT-2 without touching PyTorch or TensorFlow. Rebuilding the thing underneath the library is how I learn what the library is actually doing."],
  ["02", "A model has to do something", "Accuracy on its own is a number. I'd rather point a model at a real problem—handwriting, match footage, player performance—and see whether the output holds up."],
  ["03", "Follow the curiosity down the stack", "Some weeks that means ARMv7 assembly or GLSL shaders, other weeks it means attention heads. The layer changes; the question—how does this actually work?—doesn't."],
];

export default function AboutPage() {
  return (
    <div className="interior-page">
      <PageNav />
      <main>
        <section className="about-hero">
          <span className="eyebrow">About / Conrad Mutai</span>
          <h1>Here to pioneer<br /><em>what comes next.</em></h1>
          <div className="about-hero-bottom">
            <div className="pixel-portrait large-portrait" aria-label="Pixel portrait of Conrad">
              <div className="pixel-head"><i /><i /><b /><span /></div>
            </div>
            <p>I build machine learning systems that do something concrete—read a digit, read a match, value a player—and I usually build the pieces underneath them myself.</p>
          </div>
        </section>

        <section className="about-story">
          <span className="eyebrow">The short version</span>
          <div>
            <p className="story-lead">I'm a computer science student who cares less about benchmarks and more about machine learning that does something in the real world.</p>
            <div className="story-columns">
              <p>I'm studying Computer Science at Western University, and most of my projects start with something I want a machine to actually do. A vision model that watches match footage and values players off their performance. A digit recognizer pushed to 99.52% validation accuracy. A GPT-2 small enough to read end to end.</p>
              <p>When I'm away from my editor, you'll find me in the gym, keeping up with every sport, or having a little party. The sports habit is why a football analysis tool ended up being the project I couldn't put down.</p>
            </div>
            <p className="story-availability">
              Currently looking for a software engineering internship.{" "}
              <a href={`mailto:${siteLinks.email}`}>{siteLinks.email}</a>
            </p>
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
            {["Python", "PyTorch", "TensorFlow", "NumPy", "C", "C++", "C#", "Java", "OpenGL", "Git", "Figma"].map((tool) => <span key={tool}>{tool}</span>)}
          </div>
        </section>
      </main>
      <PageFooter />
    </div>
  );
}
