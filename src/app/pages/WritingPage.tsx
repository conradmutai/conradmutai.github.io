import { Link } from "react-router";
import { PageFooter, PageNav } from "../components/PageChrome";
import { blogPosts } from "../content";

export default function WritingPage() {
  return (
    <div className="interior-page writing-page">
      <PageNav />
      <main>
        <section className="writing-hero">
          <span className="eyebrow">Field notes / 2025</span>
          <h1>Thinking<br /><em>out loud.</em></h1>
          <p>Notes on software, systems, design, and the messy process of making things work.</p>
        </section>
        <section className="writing-index">
          <div className="index-labels"><span>Issue</span><span>Essay</span><span>Filed under</span></div>
          {blogPosts.map((post) => (
            <Link className="writing-card" to={`/writing/${post.slug}`} key={post.slug}>
              <span className="writing-number">{post.index}</span>
              <div>
                <div className="post-meta"><span>{post.date}</span><span>{post.read}</span></div>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
              </div>
              <span className="writing-category">{post.category}</span>
              <span className="writing-go">↗</span>
            </Link>
          ))}
        </section>
      </main>
      <PageFooter />
    </div>
  );
}
