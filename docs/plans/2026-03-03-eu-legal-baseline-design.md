# EU Legal Baseline Design (CabAvia)

## Context

CabAvia has Privacy and Terms pages, but they are not yet a practical GDPR/ePrivacy baseline for an EU-facing startup application review.

The goal is not full legal-custom counsel output, but a credible baseline that reduces obvious diligence gaps.

## Scope

Update only:

- `src/components/legal/PrivacyPage.tsx`
- `src/components/legal/TermsPage.tsx`

No routing, styling framework, or app architecture changes.

## Design Decisions

1. Use **Finland + CabAvia** as explicit governing baseline.
2. Keep language readable for startup reviewers.
3. Add concrete GDPR/ePrivacy sections instead of generic statements.

## Privacy Page Changes

Add or refine sections for:

- Controller identity (CabAvia) and contact details.
- Processing purposes + legal bases (purpose-level mapping).
- Retention periods by category (operational ranges).
- Data subject rights including complaint right to Finnish DPA.
- International transfers and safeguards (including SCC-style language where relevant).
- Cookies and tracking categories (strictly necessary vs optional) with current-site statement.
- Processor/subprocessor categories and update caveat.

## Terms Page Changes

Add or refine sections for:

- Finland governing law and venue with clearer wording.
- Acceptable use baseline language for site usage.
- Explicit relation to privacy policy and cookie/tracking notice references.

## Constraints

- Do not claim legal perfection.
- Avoid fake legal entity details not provided by user.
- Keep contact as `hello@cabavia.com`.

## Verification

- `npm test`
- `npm run lint`
- `npm run build`

Manual:

- Open `/privacy` and `/terms` and confirm section numbering and readability.
