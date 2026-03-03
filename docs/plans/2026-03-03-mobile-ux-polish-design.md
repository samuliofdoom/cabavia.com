# Mobile UX Polish Design

## Goal

Improve the mobile experience across the CabAvia landing page with a balanced outcome: stronger readability and interaction clarity without flattening the current visual identity.

## Scope

- `src/components/Hero.tsx`
- `src/components/Navbar.tsx`
- `src/components/ProblemStatement.tsx`
- `src/components/CoreCapabilities.tsx`
- `src/components/GateboundSection.tsx`
- `src/components/DashboundSection.tsx`
- `src/components/UseCasesSection.tsx`
- `src/components/AboutSection.tsx`
- `src/components/Footer.tsx`
- `src/index.css`

## Design Decisions

1. Keep visual language (glows, gradients, motion) but reduce density on small screens.
2. Normalize mobile spacing and type ramps to avoid compressed or overwhelming sections.
3. Preserve CTA hierarchy and improve tap ergonomics.

## Planned UX Changes

### Navigation and hero entry

- Refine mobile nav overlay spacing and CTA placement.
- Make hero top spacing and headline scale more consistent on narrow devices.
- Improve waitlist form readability and feedback block spacing.

### Dense product sections

- In Gatebound and Dashbound, hide or soften non-essential floating overlays on mobile.
- Keep core card visuals and toggle controls intact.
- Reduce text size/line length pressure where needed.

### Card sections and footer

- Tighten card padding/min-height in use-case and capability cards for better scroll rhythm.
- Improve About and Footer spacing for mobile readability and tap behavior.

### Global polish

- Slightly reduce decorative noise intensity on smaller screens.
- Add reduced-motion fallback to avoid heavy animated behavior on users/devices that request it.

## Verification

- `npm test`
- `npm run lint`
- `npm run build`
- Manual check on narrow viewport for: hero CTA flow, mobile menu usability, section readability, footer links.
