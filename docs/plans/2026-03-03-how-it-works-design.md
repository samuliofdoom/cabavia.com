## Context

The current landing page section (`ArchitectureSection`) is visually strong but message-heavy on internal infrastructure language ("Data Pipeline", "Cloud Native").

For startup-credit reviewers and potential operator customers, the page should communicate product reality quickly: what happens in operations, what decisions CabAvia makes, and what business outcomes follow.

## Goal

Replace the current infrastructure framing with a clearer "How it works" workflow that is easier to validate as a real operating product.

## Selected Approach

Primary approach: operator workflow (4 steps), using the existing section's visual structure.

Why this approach:

- Preserves current component structure and animation quality.
- Reduces implementation risk versus full redesign.
- Improves credibility by describing concrete operations instead of abstract platform claims.

## Content Design

### Section identity

- Section id changes from `architecture` to `how-it-works`.
- Eyebrow changes from `Data Pipeline` to `How it works`.
- Headline becomes operator outcome-focused.

### Workflow steps

Four cards represent the operational loop:

1. Demand signal intake
2. Yield recommendation
3. Dispatch execution
4. Feedback + model refinement

Each step uses concise language tied to dispatch/revenue outcomes.

### Positioning copy

Support copy emphasizes day-to-day operator impact (faster assignment, better seat utilization, tighter response times), not infrastructure architecture.

## Navigation and Anchors

- Update navbar link label from `Infrastructure` to `How it works`.
- Update navbar href from `#architecture` to `#how-it-works`.
- Update footer product link label similarly.
- Update footer href from `/#architecture` to `/#how-it-works`.

## Component and Data Flow

- Keep `ArchitectureSection.tsx` component name for low-risk refactor and import stability.
- Update node metadata and visible copy only.
- No new state management required.
- Existing `useScrollReveal` behavior remains unchanged.

## Error Handling and Edge Cases

- If a user lands on legal pages, no impact (main nav anchors are only relevant on homepage).
- Existing root-page anchor behavior remains intact; updated ids must match nav/footer hrefs exactly.

## Verification Plan

Run:

- `npm run lint`
- `npm run build`

Validate manually:

- Navbar "How it works" scrolls to the updated section.
- Footer "How it works" link scrolls correctly from homepage route.
- Mobile menu link navigates to the same anchor.

## Out of Scope

- Replacing section with a new component file.
- Adding deep technical architecture sub-sections.
- Changes to legal pages, SEO metadata, or deployment config.
