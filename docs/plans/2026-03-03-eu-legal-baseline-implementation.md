# EU Legal Baseline Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Upgrade CabAvia legal pages to a practical EU-facing GDPR/ePrivacy baseline with Finland-specific governing-law wording.

**Architecture:** Keep legal content as static page sections in existing React components. Improve compliance substance by adding explicit controller, legal-basis mapping, retention windows, rights/complaint details, transfer safeguards, and cookie transparency while preserving current route structure and design language.

**Tech Stack:** React 19, TypeScript, Vite, Tailwind CSS

---

### Task 1: Strengthen Privacy policy structure

**Files:**
- Modify: `src/components/legal/PrivacyPage.tsx`

**Step 1: Add controller identity and contact section**

- Add explicit data controller statement naming `CabAvia`.
- Keep contact email as `hello@cabavia.com`.

**Step 2: Rewrite legal basis section by purpose**

- Include purpose-based legal basis mapping:
  - Waitlist/contact handling (consent and/or legitimate interest)
  - Service/security operations (legitimate interest)
  - Compliance obligations (legal obligation)

**Step 3: Add retention windows**

- Add practical retention bands for waitlist/contact/security logs.

### Task 2: Add GDPR rights, transfers, and cookies baseline

**Files:**
- Modify: `src/components/legal/PrivacyPage.tsx`

**Step 1: Expand rights section**

- Add access, rectification, erasure, restriction, portability, objection, withdrawal-of-consent rights.
- Add complaint right to Finnish supervisory authority (Tietosuojavaltuutetun toimisto / Office of the Data Protection Ombudsman).

**Step 2: Clarify international transfers**

- Add statement that cross-border transfers may occur and safeguards (e.g., contractual protections such as SCCs where required) are used.

**Step 3: Add cookie/tracking baseline section**

- Distinguish strictly necessary technical functionality from optional analytics/marketing tools.
- State current-site tooling status in plain language.

### Task 3: Tighten Terms with Finland jurisdiction and policy alignment

**Files:**
- Modify: `src/components/legal/TermsPage.tsx`

**Step 1: Strengthen acceptable use language**

- Add concise misuse restrictions relevant to web service security and abuse.

**Step 2: Make Finland law/venue explicit**

- Replace generic principal-place language with Finland-based wording.

**Step 3: Add privacy policy relation statement**

- Add short clause linking personal-data handling to Privacy Policy.

### Task 4: Verify and finalize

**Files:**
- Verify only

**Step 1: Run tests**

Run: `npm test`
Expected: all tests pass.

**Step 2: Run lint**

Run: `npm run lint`
Expected: no lint errors.

**Step 3: Run build**

Run: `npm run build`
Expected: successful production build.

**Step 4: Commit and push (if checks pass)**

Suggested commit message:

```bash
docs: align legal pages with eu privacy baseline
```
