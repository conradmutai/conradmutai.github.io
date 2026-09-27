import { useEffect, useRef, useState, type RefObject } from "react";

// 0 → 1 as the reader scrolls through the referenced element.
export function useReadingProgress<T extends HTMLElement>(resetKey?: unknown): [RefObject<T | null>, number] {
  const ref = useRef<T>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const scrolled = window.scrollY - el.offsetTop;
      const scrollable = el.offsetHeight - window.innerHeight;
      setProgress(scrollable <= 0 ? 1 : Math.min(1, Math.max(0, scrolled / scrollable)));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [resetKey]);

  return [ref, progress];
}
