# How It Works Section Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the current infrastructure-focused section with an operator-focused "How it works" workflow and update all related homepage anchors.

**Architecture:** Keep the existing `ArchitectureSection` component and animation structure, but rewrite content and section id to match operational workflow messaging. Update `Navbar` and `Footer` links so all in-page navigation targets the new id consistently on desktop, mobile, and footer routes.

**Tech Stack:** React 19, TypeScript, Tailwind CSS, Vite, ESLint

---

### Task 1: Replace architecture copy with workflow copy

**Files:**
- Modify: `src/components/ArchitectureSection.tsx`

**Step 1: Update section identity and heading copy**

- Change section `id` from `architecture` to `how-it-works`.
- Change eyebrow from `Data Pipeline` to `How it works`.
- Change headline/body text to operator-outcome language.

**Step 2: Update node data to operator workflow**

- Replace current node titles/descriptions with:
  - Demand Signal
  - Yield Recommendation
  - Dispatch Execution
  - Feedback Loop

**Step 3: Keep visual behavior unchanged**

- Preserve current reveal animation, grid layout, and connector visuals.

### Task 2: Update all relevant anchors and link labels

**Files:**
- Modify: `src/components/Navbar.tsx`
- Modify: `src/components/Footer.tsx`

**Step 1: Update navbar desktop/mobile nav config**

- Change link label `Infrastructure` to `How it works`.
- Change href `#architecture` to `#how-it-works`.

**Step 2: Update footer product navigation**

- Change footer link label `Infrastructure` to `How it works`.
- Change href `/#architecture` to `/#how-it-works`.

### Task 3: Verify behavior and quality

**Files:**
- Verify only (no file changes expected)

**Step 1: Run static checks**

Run: `npm run lint`
Expected: command exits successfully with no errors.

**Step 2: Run production build**

Run: `npm run build`
Expected: TypeScript and Vite build complete successfully.

**Step 3: Manual anchor verification in browser**

- Verify navbar `How it works` jumps to the section.
- Verify mobile menu `How it works` jumps to the same section.
- Verify footer `How it works` link resolves correctly from homepage (`/#how-it-works`).

### Task 4: Finalize changes

**Files:**
- Stage all modified files

**Step 1: Prepare commit (only if requested)**

Suggested message:

```bash
feat: reframe infrastructure section as how-it-works workflow
```

**Step 2: Push (only if requested)**

- Push branch to trigger Cloudflare Pages deploy.
