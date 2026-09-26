import { Outlet, ScrollRestoration, createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import WritingPage from "./pages/WritingPage";
import BlogPostPage from "./pages/BlogPostPage";
import NotFoundPage from "./pages/NotFoundPage";

function Root() {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
}

export const router = createBrowserRouter([
  {
    Component: Root,
    children: [
      { path: "/", Component: HomePage },
      { path: "/about", Component: AboutPage },
      { path: "/writing", Component: WritingPage },
      { path: "/writing/:slug", Component: BlogPostPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
