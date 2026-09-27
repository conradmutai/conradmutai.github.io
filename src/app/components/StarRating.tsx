import type React from "react";

const STAR = "M12 2.5l2.9 6.1 6.6.8-4.9 4.6 1.3 6.6L12 17.3l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z";

function Stars({ className }: { className: string }) {
  return (
    <svg className={className} viewBox="0 0 120 24" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <path key={i} d={STAR} transform={`translate(${i * 24} 0)`} />
      ))}
    </svg>
  );
}

// 0–5 stars, halves allowed (e.g. 3.5). Anything else is rounded to the nearest half.
export function StarRating({ value, className = "" }: { value: number; className?: string }) {
  const score = Math.round(Math.min(5, Math.max(0, value)) * 2) / 2;
  return (
    <span className={`star-rating ${className}`} role="img" aria-label={`Rated ${score} out of 5`}>
      <span className="star-track" style={{ "--fill": `${(score / 5) * 100}%` } as React.CSSProperties}>
        <Stars className="stars-empty" />
        <Stars className="stars-full" />
      </span>
      <span className="star-score" aria-hidden="true">{score}/5</span>
    </span>
  );
}
