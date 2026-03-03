# CabAvia Landing Page

Marketing site for CabAvia, built with React, TypeScript, Vite, and Tailwind CSS.

## Tech Stack

- React 19
- TypeScript
- Vite 7
- Tailwind CSS 3
- Framer Motion

## Local Development

```bash
npm install
npm run dev
```

Before running the site with a working waitlist form, copy `.env.example` to `.env` and set:

- `VITE_FORMSPREE_ENDPOINT` - your Formspree endpoint URL (for example `https://formspree.io/f/abc123xy`)

Useful scripts:

- `npm run build` - production build to `dist/`
- `npm run lint` - run ESLint
- `npm run preview` - preview production build locally
- `npm test` - run Vitest tests

## Cloudflare Pages Deploy

This repo is set up for GitHub-based auto deploys.

In Cloudflare Pages:

1. Connect GitHub repo: `samuliofdoom/cabavia.com`
2. Production branch: `master`
3. Build command: `npm run build`
4. Build output directory: `dist`
5. Node version: `22` (recommended)

After setup, every push to `master` deploys automatically.

## Production Checklist

- Confirm Cloudflare Pages project uses `master` as production branch
- Ensure `VITE_FORMSPREE_ENDPOINT` is set in Production and Preview env vars
- Confirm custom domain DNS records point to this Cloudflare Pages project
- Add `www` redirect strategy (`www -> apex` or `apex -> www`)
- Verify direct route loads for `/privacy` and `/terms`
- Validate primary CTA flow (`/#waitlist`) captures leads in Formspree
- Confirm legal links resolve and copy is current
- Confirm meta title/description/OG/Twitter tags with social preview check
- Run final smoke test on mobile + desktop after production deploy
