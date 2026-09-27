import { Link } from "react-router";
import { siteLinks } from "../content";

export function PageNav() {
  return (
    <header className="page-nav">
      <Link className="brand" to="/" aria-label="Conrad Mutai, home">
        <span className="brand-mark">CM</span>
        <span>conrad.mutai</span>
      </Link>
      <nav aria-label="Page navigation">
        <Link to="/#work">work</Link>
        <Link to="/about">about</Link>
        <Link to="/writing">writing</Link>
        <Link to="/journal">journal</Link>
      </nav>
      <a className="availability" href={`mailto:${siteLinks.email}`}><i /> available for work</a>
    </header>
  );
}

export function PageFooter() {
  return (
    <footer className="page-footer">
      <div>
        <span className="eyebrow light">Have a project in mind?</span>
        <h2>Let's make<br /><em>something good.</em></h2>
      </div>
      <div className="page-footer-meta">
        <a href={`mailto:${siteLinks.email}`}>{siteLinks.email}</a>
        <Link to="/journal">off-beat journal →</Link>
        <span>© 2025 Conrad Mutai</span>
      </div>
    </footer>
  );
}
