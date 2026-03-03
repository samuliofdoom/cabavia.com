# Submission Readiness Evidence (CabAvia)

Last updated: 2026-03-03

## Automated verification

- `npm test` -> PASS (10/10 tests)
- `npm run lint` -> PASS
- `npm run build` -> PASS

## Deployment verification

- `https://cabavia.pages.dev/` -> serves CabAvia build
- `https://cabavia.pages.dev/privacy` -> resolves and serves CabAvia build
- `https://cabavia.pages.dev/terms` -> resolves and serves CabAvia build
- `https://cabavia.com/` -> still serves legacy "Launching Soon" site (custom domain cutover pending)

## Product and compliance checkpoints

- Waitlist flow implemented with real Formspree endpoint integration (`VITE_FORMSPREE_ENDPOINT`)
- Primary CTAs unified to waitlist target (`/#waitlist`) across navbar and footer
- Waitlist anchor target highlights on arrival for stronger conversion UX
- Privacy and Terms pages upgraded to stronger EU-facing baseline language
- "Built on Google Cloud" trust block added with planned service stack
- About section strengthened with company/stage/focus/contact credibility details
- Performance claims softened to avoid hard unsupported metrics

## Remaining blocker before final submission

- Complete custom domain cutover so `cabavia.com`, `/privacy`, and `/terms` resolve to this Pages deployment
