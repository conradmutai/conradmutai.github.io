import { Navigate, Outlet, ScrollRestoration, createBrowserRouter, useParams } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import WritingPage from "./pages/WritingPage";
import BlogPostPage from "./pages/BlogPostPage";
import { ScrollChrome } from "./components/ScrollChrome";
import JournalPage from "./pages/JournalPage";
import JournalEntryPage from "./pages/JournalEntryPage";
import NotFoundPage from "./pages/NotFoundPage";

function Root() {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
      <ScrollChrome />
    </>
  );
}

function OldNoteRedirect() {
  const { slug } = useParams();
  return <Navigate to={`/journal/${slug ?? ""}`} replace />;
}

export const router = createBrowserRouter([
  {
    Component: Root,
    children: [
      { path: "/", Component: HomePage },
      { path: "/about", Component: AboutPage },
      { path: "/writing", Component: WritingPage },
      { path: "/writing/:slug", Component: BlogPostPage },
      { path: "/journal", Component: JournalPage },
      { path: "/journal/:slug", Component: JournalEntryPage },
      // Old /notes links (the section's first name) still work.
      { path: "/notes", element: <Navigate to="/journal" replace /> },
      { path: "/notes/:slug", Component: OldNoteRedirect },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
