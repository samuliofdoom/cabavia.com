# Mobile UX Polish Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Improve mobile usability and readability across the landing page while preserving CabAvia's premium visual style.

**Architecture:** Keep existing section composition and component boundaries, but tune class-level responsive behavior and selective visual density on small screens. Preserve all current content hierarchy and CTA flows.

**Tech Stack:** React 19, TypeScript, Tailwind CSS, Vite

---

### Task 1: Mobile nav and hero ergonomics

**Files:**
- Modify: `src/components/Navbar.tsx`
- Modify: `src/components/Hero.tsx`

**Step 1: Adjust mobile overlay spacing and CTA sizing**
- Reduce oversized mobile menu typography and refine spacing for easier scanning.

**Step 2: Tune hero mobile spacing/typography**
- Reduce headline pressure and improve section top/bottom rhythm on small screens.

**Step 3: Improve waitlist form mobile readability**
- Increase clarity of input/button/error spacing and touch comfort.

### Task 2: Reduce dense visual clutter in product sections

**Files:**
- Modify: `src/components/GateboundSection.tsx`
- Modify: `src/components/DashboundSection.tsx`

**Step 1: Keep core visuals, hide non-essential overlays on phones**
- Gate decorative floating cards and minor overlays to `sm+` where appropriate.

**Step 2: Improve copy and card spacing on mobile**
- Tune text sizes and layout spacing for less crowding.

### Task 3: Improve section rhythm for cards/about/footer

**Files:**
- Modify: `src/components/ProblemStatement.tsx`
- Modify: `src/components/CoreCapabilities.tsx`
- Modify: `src/components/UseCasesSection.tsx`
- Modify: `src/components/AboutSection.tsx`
- Modify: `src/components/Footer.tsx`

**Step 1: Normalize vertical spacing**
- Adjust mobile padding/margins for smoother section transitions.

**Step 2: Reduce card bulk on small screens**
- Tune padding/min-height and text sizing for faster thumb-scroll comprehension.

### Task 4: Global mobile-safe motion and decoration

**Files:**
- Modify: `src/index.css`

**Step 1: Add reduced-motion fallback**
- Respect user `prefers-reduced-motion` for heavy transitions/animations.

**Step 2: Reduce noise intensity on small screens**
- Keep atmosphere while reducing visual grain on handheld devices.

### Task 5: Verify and ship

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

**Step 4: Commit and push**
Suggested commit message:

```bash
feat: polish mobile UX across landing sections
```
