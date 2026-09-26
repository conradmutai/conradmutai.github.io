# Project: Interactive Web Portfolio

Personal portfolio site, originally designed and prototyped in Figma Make. The goal is to take it from the Figma Make prototype to a real, maintainable, deployable front-end codebase.

Figma Make file: https://www.figma.com/make/DWzEBd2a2Dk9wknb96TOcR/Interactive-Web-Portfolio

## Stack (confirm against package.json, update if different)
- React + TypeScript, built with Vite
- Tailwind CSS for styling
- Single-page site with hash-based sections (e.g. `/#work`), not separate routes

## Structure
- `src/components/`: one component per file, PascalCase names
- `src/components/ui/`: small reusable primitives (buttons, cards, tags)
- `src/styles/`: global styles and design tokens
- `src/data/`: portfolio content (projects, experience, links) kept separate from components so content edits don't touch layout code
- `public/`: static assets (images, resume PDF, favicon)

## Design rules
- The Figma Make prototype is the source of truth for look and feel. Match spacing, typography, colors, and layout.
- Reuse design tokens (colors, fonts, spacing, radii). Never hardcode one-off values that should be tokens.
- Keep existing section names (Hero, Work, etc.) as component names.
- Must work at mobile, tablet, and desktop widths. Check mobile first when adding anything new.

## Interactivity
- Smooth scrolling and active-section highlighting in the nav
- Hover, focus, and transition states on interactive elements; keep animations subtle (roughly 150-300ms) and respect `prefers-reduced-motion`
- Prefer CSS/Tailwind transitions before adding an animation library. Ask before adding Framer Motion or similar.

## Figma workflow
- I will paste Figma links (selection links for Design files) for specific frames or sections.
- Read the linked frame before writing code; don't guess from memory of earlier screens.
- Do one section at a time. Get the static layout right first, then add behavior when I ask.
- If the Figma design and the current code disagree, tell me before changing anything.

## Content rules
- Do not invent projects, metrics, job titles, dates, or technologies. Use only content I provide or that already exists in `src/data/`.
- If content is missing, use an obvious placeholder (e.g. `TODO: project description`) and flag it.
- Keep my voice: conversational and technically grounded. Don't rewrite copy into corporate or marketing language unless I ask.

## Code conventions
- Functional components with hooks; typed props, no `any`
- Semantic HTML (`nav`, `section`, `main`, `footer`), meaningful `alt` text, keyboard-accessible controls
- No new dependencies without asking first
- Keep changes small and focused; don't refactor unrelated files

## Commands
- `npm install`: install dependencies
- `npm run dev`: start dev server
- `npm run build`: production build (must pass before considering work done)
- `npm run lint`: lint, if configured

## Definition of done
- Matches the Figma design at desktop and mobile widths
- `npm run build` passes with no type errors
- No console errors or warnings in the browser
- Lighthouse accessibility and performance stay reasonable (no huge unoptimized images)
