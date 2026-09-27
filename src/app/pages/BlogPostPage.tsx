import { Link, Navigate, useParams } from "react-router";
import { PageFooter, PageNav } from "../components/PageChrome";
import { blogPosts } from "../content";
import { useReadingProgress } from "../hooks/useReadingProgress";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);
  const [articleRef, progress] = useReadingProgress<HTMLElement>(slug);

  // Unknown slugs fall back to the index rather than the generic 404.
  if (!post) return <Navigate to="/writing" replace />;

  const currentIndex = blogPosts.indexOf(post);
  const nextPost = blogPosts[(currentIndex + 1) % blogPosts.length];

  return (
    <div className="interior-page article-page">
      <PageNav />
      <main>
        <article ref={articleRef}>
          <header className="article-header">
            <Link className="back-link" to="/writing">← All dev journal posts</Link>
            <div className="article-meta"><span>{post.category}</span><span>{post.date}</span><span>{post.read}</span></div>
            <h1>{post.title}</h1>
            <p>{post.intro}</p>
          </header>
          <div className="article-body">
            <aside>
              <span>Issue {post.index}</span>
              <div
                className="article-progress"
                role="progressbar"
                aria-label="Reading progress"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(progress * 100)}
              >
                <i style={{ width: `${progress * 100}%` }} />
              </div>
            </aside>
            <div className="article-copy">
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2>{section.heading}</h2>
                  {section.flag && (
                    <p className={`section-flag flag-${section.flag.level}`}>
                      <b>{section.flag.label}</b>
                      <span>Target: {section.flag.target}</span>
                    </p>
                  )}
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  {section.items && (
                    <ul className="checklist">
                      {section.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  )}
                  {section.code && <pre><code>{section.code}</code></pre>}
                  {section.link &&
                    (section.link.to.startsWith("http")
                      ? (
                        <a className="article-link" href={section.link.to} target="_blank" rel="noreferrer">
                          {section.link.label} <i aria-hidden="true">↗</i>
                        </a>
                      )
                      : (
                        <Link className="article-link" to={section.link.to}>
                          {section.link.label} <i aria-hidden="true">→</i>
                        </Link>
                      ))}
                </section>
              ))}
            </div>
          </div>
        </article>
        <Link className="next-article" to={`/writing/${nextPost.slug}`}>
          <span>Read next / {nextPost.index}</span>
          <strong>{nextPost.title}</strong>
          <i aria-hidden="true">↗</i>
        </Link>
      </main>
      <PageFooter />
    </div>
  );
}
