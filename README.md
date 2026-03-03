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

Useful scripts:

- `npm run build` - production build to `dist/`
- `npm run lint` - run ESLint
- `npm run preview` - preview production build locally

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

- Confirm custom domain DNS records point to Cloudflare Pages
- Add `www` redirect strategy (`www -> apex` or `apex -> www`)
- Verify Cloudflare Pages project uses `master` as production branch
- Confirm preview deployments are enabled for PRs/feature branches
- Validate all CTA links (`mailto`, waitlist, socials) are real and reachable
- Add legal pages or update footer copy once Privacy/Terms URLs exist
- Confirm favicon and meta title/description for SEO/social sharing
- Run a final smoke test on mobile + desktop after first production deploy
