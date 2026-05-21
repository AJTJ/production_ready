# production_ready

Marketing website for **production_ready**, a software agency that turns
vibe-coded prototypes with traction into stable, production-grade code.

Static React site built with Vite, deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # type-checks, then outputs to dist/
npm run preview  # serve the production build locally
```

## Deploy

Pushing to `main` builds and publishes the site via GitHub Actions
(`.github/workflows/deploy.yml`). One-time setup: in the GitHub repo, set
**Settings → Pages → Source** to **"GitHub Actions"**.

The site is served from the custom domain **productionready.studio**.
`public/CNAME` carries the domain into every build, and `vite.config.ts`
uses a root base path (`/`).

## Editing content

All site copy lives in `src/content.ts`. Components in `src/components/` are
presentational, so wording changes never need to touch JSX.
