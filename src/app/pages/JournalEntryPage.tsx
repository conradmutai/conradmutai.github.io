import { Link, Navigate, useParams } from "react-router";
import { PageFooter, PageNav } from "../components/PageChrome";
import { journalEntries, type JournalImage } from "../content";

function EntryMedia({ images }: { images: JournalImage[] }) {
  const shown = images.slice(0, 4);
  const layout = shown.length === 1 ? "single" : shown.length === 2 ? "pair" : `collage collage-${shown.length}`;
  return (
    <div className={`entry-media ${layout}`}>
      {shown.map((image) => (
        <figure key={image.src}>
          <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
        </figure>
      ))}
    </div>
  );
}

export default function JournalEntryPage() {
  const { slug } = useParams();
  const entry = journalEntries.find((item) => item.slug === slug);

  if (!entry) return <Navigate to="/journal" replace />;

  const next = journalEntries.length > 1 ? journalEntries[(journalEntries.indexOf(entry) + 1) % journalEntries.length] : null;
  const images = entry.images?.filter((image) => image.src) ?? [];

  return (
    <div className="interior-page article-page journal-entry-page">
      <PageNav />
      <main>
        <article>
          <header className={`article-header${images.length ? " has-media" : ""}`}>
            <div className="entry-heading">
              <Link className="back-link" to="/journal">← Off-beat journal</Link>
              {(entry.category || entry.date) && (
                <div className="article-meta">
                  {entry.category && <span>{entry.category}</span>}
                  {entry.date && <span>{entry.date}</span>}
                </div>
              )}
              <h1>{entry.title || "Untitled"}</h1>
              {entry.excerpt && <p>{entry.excerpt}</p>}
            </div>
            {images.length > 0 && <EntryMedia images={images} />}
          </header>
          <div className="article-body journal-body">
            <div className="article-copy">
              {entry.body.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
            </div>
          </div>
        </article>
        {next && (
          <Link className="next-article" to={`/journal/${next.slug}`}>
            <span>Read next</span>
            <strong>{next.title || "Untitled"}</strong>
            <i aria-hidden="true">↗</i>
          </Link>
        )}
      </main>
      <PageFooter />
    </div>
  );
}
