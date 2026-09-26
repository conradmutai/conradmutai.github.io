# Project: Interactive Web Portfolio

Personal portfolio site, originally designed and prototyped in Figma Make. The Figma Make
harness has been removed — this is now a plain Vite app that builds and deploys anywhere.

Figma Make file: https://www.figma.com/make/DWzEBd2a2Dk9wknb96TOcR/Interactive-Web-Portfolio

## Stack
- React 19 + TypeScript (strict), built with Vite 8
- react-router 7 (`createBrowserRouter`) — real routes, not hash sections
- Tailwind CSS v4 via `@tailwindcss/vite` is installed and imported, but the site is styled
  with hand-written CSS in `src/index.css`. Design tokens are CSS custom properties on `:root`.
- oxfmt for formatting. No linter or test runner is configured.

## Structure
- `index.html` — document shell (`#root`, title, meta, favicon)
- `src/main.tsx` — React entrypoint; imports `src/index.css`
- `src/App.tsx` — re-export of `src/app/App.tsx`
- `src/app/routes.tsx` — route table; `Root` adds `<ScrollRestoration />`
- `src/app/pages/` — one page component per route
- `src/app/components/` — shared components (`PageChrome` = PageNav + PageFooter)
- `src/app/content.ts` — all portfolio content (projects, blog posts, links), kept out of
  layout code so content edits don't touch components
- `src/index.css` — global styles and design tokens
- `public/` — static assets served at the root (`favicon.svg`, `_redirects`)

Routes: `/` (Hero, Work, About, Writing, footer) · `/about` · `/writing` · `/writing/:slug` · `*`

## Design rules
- The Figma Make prototype is the source of truth for look and feel. Match spacing,
  typography, colors, and layout.
- Reuse the `:root` tokens (`--ink`, `--paper`, `--lime`, `--orange`, `--blue`, `--muted`,
  `--line`). Never hardcode a one-off value that should be a token.
- Keep existing section names (Hero, Work, etc.) as component names.
- Must work at mobile, tablet, and desktop widths. Check mobile first when adding anything new.

## Interactivity
- Smooth scrolling, hover/focus/transition states on interactive elements
- Keep animations subtle (roughly 150–300ms) and respect `prefers-reduced-motion`
- Nothing may depend on JS to become *visible* — reveal animations are CSS-driven
- Prefer CSS transitions before adding an animation library. Ask before adding Framer Motion.

## Figma workflow
- I will paste Figma selection links for specific frames or sections.
- Read the linked frame before writing code; don't guess from memory of earlier screens.
- Do one section at a time. Get the static layout right first, then add behavior when I ask.
- If the Figma design and the current code disagree, tell me before changing anything.

## Content rules
- Do not invent projects, metrics, job titles, dates, or technologies. Use only content I
  provide or that already exists in `src/app/content.ts`.
- If content is missing, use an obvious placeholder (e.g. `TODO: project description`) and flag it.
- Keep my voice: conversational and technically grounded. Don't rewrite copy into corporate
  or marketing language unless I ask.

## Code conventions
- Functional components with hooks; typed props, no `any`; default-export page components
- Semantic HTML (`nav`, `section`, `main`, `footer`), meaningful `alt` text, keyboard-accessible controls
- No new dependencies without asking first
- Keep changes small and focused; don't refactor unrelated files

## Commands
- `pnpm install` — install dependencies (the lockfile is pnpm's; don't mix in npm)
- `pnpm dev` — start the dev server
- `pnpm build` — typecheck (`tsc --noEmit`) then production build; must pass before work is done
- `pnpm preview` — serve the production build locally
- `pnpm format` — oxfmt

## Deploying
Client-side routing needs an SPA rewrite so deep links don't 404. Both are committed:
`vercel.json` (Vercel) and `public/_redirects` (Netlify / Cloudflare Pages).

## Definition of done
- Matches the Figma design at desktop and mobile widths
- `pnpm build` passes with no type errors
- No console errors or warnings in the browser
- Lighthouse accessibility and performance stay reasonable (no huge unoptimized images)
