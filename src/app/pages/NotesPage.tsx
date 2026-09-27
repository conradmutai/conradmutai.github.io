import { Link } from "react-router";
import { PageFooter, PageNav } from "../components/PageChrome";
import { notes } from "../content";

export default function NotesPage() {
  return (
    <div className="interior-page notes-page">
      <PageNav />
      <main>
        <section className="writing-hero">
          <span className="eyebrow">Off the clock</span>
          <h1>Not about<br /><em>code.</em></h1>
          <p>Movies, sports, and whatever else is on my mind when I'm not building things.</p>
        </section>
        <section className="writing-index">
          {notes.map((note, i) => (
            <Link className="writing-card" to={`/notes/${note.slug}`} key={note.slug}>
              <span className="writing-number">{String(notes.length - 1 - i).padStart(3, "0")}</span>
              <div>
                {note.date && <div className="post-meta"><span>{note.date}</span></div>}
                <h2>{note.title || "Untitled"}</h2>
                {note.excerpt && <p>{note.excerpt}</p>}
              </div>
              <span className="writing-category">{note.category}</span>
              <span className="writing-go">↗</span>
            </Link>
          ))}
        </section>
      </main>
      <PageFooter />
    </div>
  );
}
