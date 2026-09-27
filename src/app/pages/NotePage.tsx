import { Link, Navigate, useParams } from "react-router";
import { PageFooter, PageNav } from "../components/PageChrome";
import { notes } from "../content";

export default function NotePage() {
  const { slug } = useParams();
  const note = notes.find((item) => item.slug === slug);

  if (!note) return <Navigate to="/notes" replace />;

  const next = notes.length > 1 ? notes[(notes.indexOf(note) + 1) % notes.length] : null;

  return (
    <div className="interior-page article-page note-page">
      <PageNav />
      <main>
        <article>
          <header className="article-header">
            <Link className="back-link" to="/notes">← All notes</Link>
            {(note.category || note.date) && (
              <div className="article-meta">
                {note.category && <span>{note.category}</span>}
                {note.date && <span>{note.date}</span>}
              </div>
            )}
            <h1>{note.title || "Untitled"}</h1>
            {note.excerpt && <p>{note.excerpt}</p>}
          </header>
          <div className="article-body note-body">
            <div className="article-copy">
              {note.body.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
            </div>
          </div>
        </article>
        {next && (
          <Link className="next-article" to={`/notes/${next.slug}`}>
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
