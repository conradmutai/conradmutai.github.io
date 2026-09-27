import { Link } from "react-router";
import { PageFooter, PageNav } from "../components/PageChrome";
import { journalEntries } from "../content";

export default function JournalPage() {
  return (
    <div className="interior-page journal-page">
      <PageNav />
      <main>
        <section className="writing-hero">
          <span className="eyebrow">Not about code</span>
          <h1>Off-beat<br /><em>journal.</em></h1>
          <p>Movies, sports, and whatever else is on my mind when I'm not building things.</p>
        </section>
        <section className="writing-index">
          {journalEntries.map((entry, i) => (
            <Link className="writing-card" to={`/journal/${entry.slug}`} key={entry.slug}>
              <span className="writing-number">{String(journalEntries.length - 1 - i).padStart(3, "0")}</span>
              <div>
                {entry.date && <div className="post-meta"><span>{entry.date}</span></div>}
                <h2>{entry.title || "Untitled"}</h2>
                {entry.excerpt && <p>{entry.excerpt}</p>}
              </div>
              <span className="writing-category">{entry.category}</span>
              <span className="writing-go">↗</span>
            </Link>
          ))}
        </section>
      </main>
      <PageFooter />
    </div>
  );
}
