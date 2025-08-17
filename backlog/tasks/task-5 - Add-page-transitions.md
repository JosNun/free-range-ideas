---
id: task-5
title: Add page transitions
status: Done
assignee: []
created_date: "2025-08-17"
labels: []
dependencies: []
---

## Description (the why)

Add smooth, friendly page transitions between the index page and individual idea pages to match the motion spec and elevate perceived quality without being flashy. Ensure performance is good, motion is subtle, and accessibility preferences are respected.

## Acceptance Criteria (the what)

- [x] Cross-document view transitions are enabled sitewide
- [x] Image, title, and date animate as shared elements between index cards and idea headers
- [x] Description does not participate in transitions (to avoid reflow artifacts)
- [x] Default view transition duration/easing use tokens: `var(--dur-2)` and `var(--ease-1)`
- [x] `prefers-reduced-motion` is respected with shorter, gentler transitions
- [x] Non-supporting browsers degrade to normal navigation without errors
- [x] Card hover micro-interaction timing aligns with spec (≈180ms ease-out)

## Implementation Plan (the how)

1. Opt-in to cross-document transitions via CSS `@view-transition { navigation: auto; }`.
2. Add stable shared-element names for image, title, and date on both index and detail pages.
3. Wrap title text to prevent fragmentation; remove description from transitions.
4. Centralize motion tokens in theme; set default view transition duration/easing to tokens.
5. Align card hover duration to 180ms ease-out per motion spec.
6. Verify reduced-motion behavior and visual quality across pages.

## Implementation Notes

- Approach: Used the View Transition API with shared-element naming; ensured text elements don’t fragment by wrapping titles; excluded description to avoid reflow-induced fades. Centralized motion tokens and applied them globally for consistency.
- Files modified:
  - `src/styles/global.css`: Added `@view-transition` opt-in, view transition defaults, reduced-motion override, and design tokens (`--bg-*`, `--text`, `--muted`, `--accent*`, radii, motion). Kept back-compat aliases.
  - `src/components/IdeaCard.astro`: Added shared-element names for image/title/date; wrapped title; set hover duration to `180ms`; switched to new tokens for accents.
  - `src/pages/ideas/[slug].astro`: Matched shared-element names for image/title/date; wrapped title; removed description transition; switched muted color to token.
  - `src/layouts/Layout.astro`: Updated banner colors to new tokens.
- Notes: Transitions gracefully no-op in non-supporting browsers; lints are clean (tool reports unknown at-rules for Tailwind/theme/view-transition, which is expected in our setup).
