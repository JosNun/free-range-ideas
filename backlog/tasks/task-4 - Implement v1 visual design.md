# task-4 - Implement v1 visual design

## Description (the why)

Establish a cohesive v1 visual design that feels “That’s neat”: playful, experimental, fun, minimal, and app-like. Apply a dark-first theme, clear typography, and simple, friendly components so makers can quickly browse and get inspired. This implementation must follow and reference `backlog/docs/design.md`.

## Acceptance Criteria (the what)

- [x] The site uses the color, typography, spacing, radius, elevation, and motion tokens defined in `backlog/docs/design.md`.
- [x] Homepage has a hero (heading + brief subhead) and an idea grid styled per the spec. No Lucky CTA.
- [x] Idea cards show title + short blurb with playful accent details and hover/focus states.
- [x] Idea detail pages render concise blurbs with comfortable reading measure; optional sections styled when present.
- [x] Navigation and footer match spec (minimal wordmark-style title; simple footer note). No social/RSS links in v1.
- [x] Dark-first theme with sufficient contrast; respects reduced motion.
- [x] Responsive at common breakpoints (mobile and desktop) without layout breakage.
- [x] No Lucky drawer/CTA, no social features (RSS/Twitter/OG/HN), and no submissions included in v1.
- [x] Build succeeds with no console errors; pages load and are navigable.

## Implementation Plan (the how)

1. Add CSS design tokens (colors, radii, motion, easing) and base typography per `backlog/docs/design.md`.
2. Implement dark-first theme in global styles; apply background, text, and surface tokens.
3. Style navigation (typographic wordmark) and minimal footer.
4. Implement homepage hero (heading + friendly subhead) and idea grid card styles (accent stripe/blob, hover lift).
5. Style idea detail page for concise blurbs and optional sections.
6. Add motion primitives for micro-interactions (hover/focus transitions) with `prefers-reduced-motion` fallbacks.
7. Verify responsiveness across mobile and desktop breakpoints; adjust spacing and grid as needed.
8. Self-review against the spec; ensure exclusions (Lucky, social, submissions) are not present.

## Implementation Notes (only added after working on the task)

- Implemented dark-first design tokens and elevation/motion in `src/styles/global.css` (colors, radii, shadows, durations, easing, reduced-motion overrides; typography families Space Grotesk/Inter/JetBrains Mono; layout helpers `.site-container`, `.surface`, `.card`, `.card-accent`, buttons).
- Added Google Fonts preconnect and font CSS to `src/layouts/Layout.astro`; created sticky header with typographic wordmark and minimal nav; simple footer copy.
- Built homepage hero and idea grid in `src/pages/index.astro` (headline, friendly subhead, “Browse ideas” anchor). Grid uses responsive CSS grid with tokens.
- Restyled `src/components/IdeaCard.astro` as compact playful card with accent stripe, hover lift, and clear `:focus-visible` state; preserves image, title, date, and blurb.
- Updated idea detail page `src/pages/ideas/[slug].astro` to dark layout with comfortable reading measure (~70ch), header meta and back link; removed unused import.
- Verified in dev and built preview; keyboard navigation shows focus ring; respects `prefers-reduced-motion`; responsive at mobile/desktop.
- Build is green; no Lucky/social/submissions present.
