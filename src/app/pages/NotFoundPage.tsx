import { Link } from "react-router";
import { PageNav } from "../components/PageChrome";

export default function NotFoundPage() {
  return (
    <div className="interior-page not-found">
      <PageNav />
      <main>
        <span className="eyebrow">404 / Lost packet</span>
        <h1>This page<br /><em>went missing.</em></h1>
        <Link to="/">Back to the portfolio →</Link>
      </main>
    </div>
  );
}
