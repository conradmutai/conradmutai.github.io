import { useEffect, useState } from "react";

// Site-wide scroll behaviour:
// - the navbar hides while scrolling down and comes back as soon as you scroll up
//   (driven by a data attribute on <html>, styled in index.css)
// - a "back to top" button appears once you're a screen or so down the page
export function ScrollChrome() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    let lastY = window.scrollY;
    let frame = 0;

    const update = () => {
      frame = 0;
      const y = window.scrollY;
      const delta = y - lastY;
      if (y < 120) delete root.dataset.navHidden;
      else if (delta > 6) root.dataset.navHidden = "";
      else if (delta < -6) delete root.dataset.navHidden;
      if (Math.abs(delta) > 6 || y < 120) lastY = y;
      setShowTop(y > window.innerHeight * 0.8);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
      delete root.dataset.navHidden;
    };
  }, []);

  return (
    <button
      type="button"
      className={`to-top${showTop ? " visible" : ""}`}
      onClick={() => window.scrollTo({ top: 0 })}
      aria-label="Back to top"
      tabIndex={showTop ? 0 : -1}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 19V5M5 12l7-7 7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
