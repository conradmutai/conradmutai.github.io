import type { Block } from "../content";

// Renders a list of paragraphs, with any images dropped in between them.
export function ArticleBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, i) =>
        typeof block === "string" ? (
          <p key={i}>{block}</p>
        ) : (
          <figure className="inline-figure" key={i}>
            <img src={block.src} alt={block.alt} loading="lazy" decoding="async" />
            {block.caption && <figcaption>{block.caption}</figcaption>}
          </figure>
        ),
      )}
    </>
  );
}
