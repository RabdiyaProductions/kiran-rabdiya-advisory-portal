# Kiran Rabdiya Advisory — Marketing PWA (GitHub Pages)

A zero-budget marketing website (PWA) built with Vite + React + HashRouter, ready for GitHub Pages deployment.

## Local run (Windows)
1. Install Node.js LTS
2. In the project folder:
   ```bash
   npm install
   npm run dev
   ```

## Build
```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages (recommended)
1. Push this repo to GitHub.
2. In GitHub repo:
   - Settings → Pages
   - Source: **GitHub Actions**
3. Push to `main` (or re-run the workflow).
4. Your site will appear at:
   `https://<username>.github.io/<repo>/`

Notes:
- `vite.config.ts` uses `base: "./"` so it works regardless of repo name.
- Router uses HashRouter so deep links work on GitHub Pages.

## Customise
- Update contact details in `src/data/config.ts`
- Update service content in `src/data/services.ts`
