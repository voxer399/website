# Andrea Forán, Psychologist — Website

English-language website for Andrea Forán's psychology practice. Built with React, TypeScript, Vite, Tailwind CSS, and Radix UI primitives (shadcn/ui-style components).

## Pages

- `index.html` — Home
- `how-i-work.html` — How I Work
- `program.html` — Self-Building Program
- `about.html` — About Me
- `prices.html` — Prices & Info (includes an FAQ accordion)
- `contact.html` — Contact

Each page is its own Vite build entry (a true multi-page app, not client-side routed), so the URLs match the original static site.

## Development

```bash
npm install
npm run dev       # local dev server with HMR
npm run build     # type-check + production build to dist/
npm run preview   # serve the production build locally
```

## Deployment

Pushing to the tracked branch triggers `.github/workflows/deploy-pages.yml`, which builds the site and publishes `dist/` to GitHub Pages.

## Project structure

- `src/components/ui/` — Radix-based primitives (button, accordion, sheet)
- `src/components/site/` — site-specific components (header, footer, cards, blob images, reveal-on-scroll, etc.)
- `src/pages/` — one component per page
- `legacy-static/` — the original plain HTML/CSS/JS version of the site, kept for reference
