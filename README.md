# Fatema Akter Mim — Portfolio

Built with Next.js (App Router), Tailwind CSS, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Build

```bash
npm run build
```

This produces a static export in the `out/` folder (configured via `output: 'export'`
in `next.config.js`), so it can be hosted anywhere — Vercel, Netlify, GitHub Pages,
or any static host.

## Deploy on Vercel (recommended, easiest)

1. Push this folder to a GitHub repository.
2. Go to https://vercel.com/new, import the repo.
3. Framework preset: Next.js. No extra config needed. Click Deploy.

## Deploy on Netlify

1. Run `npm run build` — this creates the `out/` folder.
2. Drag and drop the `out/` folder onto https://app.netlify.com/drop
   — or connect the GitHub repo with build command `npm run build` and publish
   directory `out`.

## Updating content

- **Projects**: edit `data/projects.js`. Add `liveLink`, `githubLink`, an `image`
  path (drop the image in `public/` and reference it, e.g. `/my-project.png`),
  and set `hasDetails: true` once the project's real content is filled in.
- **Skills**: edit `data/skills.js`.
- **Resume**: replace `public/resume.pdf` with an updated file (keep the same name,
  or update the `href` in `components/Navbar.jsx` and `components/Hero.jsx`).
- **Photo**: replace `public/portfolio.png` (keep the same name, or update the
  `src` in `components/Hero.jsx`).
