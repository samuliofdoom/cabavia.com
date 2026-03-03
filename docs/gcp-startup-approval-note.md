# Google Cloud Startup Approval Note (CabAvia)

Last updated: 2026-03-03

## Status update in this repo

- Implemented `/privacy` page: `src/components/legal/PrivacyPage.tsx`
- Implemented `/terms` page: `src/components/legal/TermsPage.tsx`
- Footer legal links now point to real routes: `src/components/Footer.tsx`
- App route handling added for legal pages: `src/App.tsx`

## What Google says for the $2,000 tier

For pre-funded startups ("Start tier"), public program pages and FAQ consistently indicate:

- Startup must be a technology company.
- Startup must be pre-funded by institutional investors.
- Startup must be founded within the last 5 years.
- Startup must not have already received Google Cloud startup credits beyond free trial.
- Acceptance is discretionary (Google may reject based on program criteria).

Sources:

- https://cloud.google.com/startup/pre-funded
- https://cloud.google.com/startup/benefits
- https://cloud.google.com/startup/faq

## Common approval blockers (from official eligibility + FAQ)

- Email domain mismatch: application email should match the startup website domain.
- Billing mismatch: billing account and business identity do not align.
- Startup type mismatch: agency/consultancy/dev shop/nonprofit/personal content site/government entity, etc.
- Existing credits beyond allowed thresholds.
- Weak public presence (unclear product/company legitimacy).

## Practical "pass" checklist for CabAvia

Use this before submitting:

1. **Domain + email alignment**
   - Public website uses `cabavia.com`.
   - Application email is `@cabavia.com`.
2. **Google Cloud billing account ready**
   - Have the 18-character billing account ID ready.
   - Ensure billing account contact email/domain matches company domain.
3. **Entity and legitimacy signals on site**
   - Add Privacy and Terms pages (real URLs, not placeholders).
   - Add a clear contact email on domain.
   - Add company description and founder/team credibility.
4. **Product credibility**
   - Show clear product scope (Gatebound + Dashbound).
   - Show at least one concrete workflow or demo/mock workflow.
5. **Application narrative readiness**
   - 1-2 sentence problem statement.
   - Why now / target customer.
   - 90-day build plan using GCP services.

## Suggested exact positioning in application

Use language close to this:

- "CabAvia is an AI-first software startup for transfer operators. We are building dynamic pricing and dispatch optimization software for airport and chauffeur fleets."
- "We are pre-funded and using Google Cloud credits to build and validate our MVP with early design partners."
- "Initial stack plan: Cloud Run (API), Cloud SQL (operational data), BigQuery (analytics), Vertex AI (model iteration), Cloud Storage (ingestion artifacts), and Cloud Logging/Monitoring."

## 90-day credit usage plan (lightweight and credible)

For the $2,000 tier, keep the plan practical and MVP-focused:

- Month 1: Core API + data model (Cloud Run, Cloud SQL, Cloud Storage).
- Month 2: Forecasting + pricing experiments (BigQuery + Vertex AI).
- Month 3: Pilot instrumentation + reliability (Monitoring, alerts, dashboards).

This is usually stronger than broad "AI platform" claims without a specific product path.

## Fast improvements to this repo/site before applying

Prioritize these in order:

1. [Done] Create `/privacy` and `/terms` pages and link them in footer.
2. [Done] Replace "available on request" legal text with real page links.
3. Add one short "How it works" product flow section with concrete input/output examples.
4. Add a simple "Team" block (even if concise) and domain contact.
5. Add a brief "Built on Google Cloud" note with planned services.

## Timeline expectations

FAQ indicates most decisions arrive within a few business days, but delays are possible.

If rejected, contact:

- cloudstartupsupport@google.com

and request specific reason + reapplication guidance.

## Notes

- Public pages show some wording/benefit variations over time (marketing pages update frequently).
- Treat eligibility/FAQ pages as source of truth at submission time and re-check right before applying.
