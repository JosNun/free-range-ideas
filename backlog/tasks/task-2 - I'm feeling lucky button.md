# task‑2 - I'm feeling lucky button

## Description (the why)

Let users quickly discover a random idea with one click, increasing engagement and serendipity. This reduces choice paralysis and invites exploration of the ideas archive.

## Acceptance Criteria (the what)

- [ ] A clearly labeled "I'm feeling lucky" UI control is available on the homepage hero (optional secondary in header)
- [ ] Clicking it navigates users immediately to a randomly selected idea's page
- [ ] Randomization is uniform across all ideas in the `ideas` collection
- [ ] Behavior works with client-side navigation and direct page loads (no flash of redirect loops)
- [ ] Works reliably in `astro dev`, static build, and deployed hosting environment
- [ ] Consecutive clicks avoid repeating the same idea for the same session
- [ ] No tracking is added at this time

## Implementation Plan (the how)

1. Static build approach: generate a manifest of idea slugs at build time (e.g., `public/ideas.json`)
2. Client script loads the manifest, selects a random slug, and navigates; store the last-visited slug in `sessionStorage` to avoid immediate repeats
3. Add a button in `src/components/Welcome.astro` (homepage hero) and optionally site header that triggers the client script with label "I'm feeling lucky"
4. Skip empty-state handling per current scope

## Open Questions

1. Any emoji/icon to accompany the label (e.g., 🎲 or ✨)?
3. If the collection grows large, should we weight or pin certain ideas more often?
