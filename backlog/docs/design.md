# Free Range Ideas — Design Spec (v1)

## Brand feel

- Audience: makers and friends
- Desired impression: “That’s neat.” Simple, playful, experimental; not flashy for its own sake
- Mood keywords: playful, experimental, fun, minimal, cool, futuristic, app‑like
- Voice: friendly, witty, first‑person (light, brief quips like “this is fine”, “this is the way”, “Ship it” used sparingly)

## Goals and scope (v1)

- Core job: spark inspiration by browsing short idea blurbs
- Content: idea posts only, chronological
- Platform: Astro, client-side interactions after static build
- Scope exclusions for v1: no Lucky CTA/drawer, no social (RSS/Twitter/OG), no submissions
- Responsive targets: desktop and mobile (online only)

## Visual identity

### Color (dark-first)

- Neutrals
  - Background base: `#0C0D10`
  - Elevated surfaces: `#0F1115`
  - Component surfaces: `#151822`
  - Text primary: `#E6EAF2`
  - Text muted: `#9AA3B2`
- Accents
  - Primary: Electric Purple `#7A5CFF`
  - Secondary: Acid Green `#4AF626`
  - Sprinkles: Hot Magenta `#FF4D8D`, Sky `#41D9FF`, Sunny `#FFD166`
- Usage
  - Keep backgrounds calm and deep; use one primary accent for actions/focus rings, secondary for playful highlights; reserve sprinkles for illustrations or small UI flourishes

### Typography

- Display/Headings: Space Grotesk (playful, futuristic)
- Body/UI: Inter (clean, highly readable)
- Mono accent (sparingly): JetBrains Mono (badges, counters, tiny tech flavor)
- Defaults: 16–18 px base size; body line-height 1.6–1.75; headings tight but readable

### Imagery style

"A playful 3D cartoon style with soft, rounded forms and a smooth, clay-like texture. The design is reminiscent of Pixar or Disney-inspired characters, but simplified into bold, iconic objects. Bright, saturated colors (like vibrant orange and deep blue) create a cheerful, approachable look, while subtle shading and glossy highlights give it a tactile, toy-like quality. The overall effect feels modern, whimsical, and highly friendly — almost like a digital mascot brought to life."

- Use abstract, geometric blobs/shapes and simplified 3D toy-like objects
- Avoid heavy photography; keep visuals bold, friendly, and minimal in detail

### Iconography

- Simple line icons (Lucide-style), rounded joins, minimal detail

### Motion

- Micro-interactions: 120–180ms, ease-out; 8–12px movement max
- Delight: 220–360ms with subtle spring; stagger children by 20–40ms
- Bold: reserved for hero reveals or section transitions (up to 600–800ms)
- Respect `prefers-reduced-motion`: reduce to fades/scales

## Layout system

- Grid: fluid, max width 1200px; comfortable gutters (24px desktop / 16px mobile)
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64
- Radii: 8px default; 14px for cards and overlays
- Elevation tokens: base (none), raised (0 6px 20px rgba(0,0,0,.35)), overlay (0 12px 40px rgba(0,0,0,.5))
- Breakpoints: 0–599, 600–899, 900–1199, 1200+

## Components (v1)

### Navigation

- Left: typographic wordmark “Free Range Ideas” (Space Grotesk)
- Right: link to Ideas (primary); room for future Light toggle and Lucky link (not in v1)

### Hero (homepage)

- Heading in Space Grotesk
- Subhead in first person, friendly and witty
- Primary action: “Browse ideas” (no Lucky CTA in v1)
- Optional rotating taglines can be included, but keep subtle and non-distracting

### Idea grid

- Compact, playful cards
- Title + short blurb
- Accent stripe or corner blob in primary accent
- Hover/focus: slight lift, accent glow/focus ring; reveal secondary actions only if available

### Idea page

- Short blurb-first layout
- Optional sections when needed: Problem (1–2 lines), Concept (2–4 lines), Why now (1–2 lines)
- Future: Inline Remix panel (not required for v1)

### Footer

- Minimal; small note (e.g., “Made for makers. Ship it.”)
- Leave placeholders for future RSS/links (not in v1)

## Voice and copy

- First person, friendly, witty, brief
- Microcopy examples
  - Buttons: “Ship it”, “Remix” (future), “Browse ideas”
  - Empty state: “Fresh out? Not likely.”
  - Success: “Neat.”

## Accessibility and comfort

- Legibility: target ≥ 4.5:1 for body text in dark mode (large text 3:1)
- Respect reduced motion preference
- Comfortable reading: 16–18 px body, ~65–75ch measure on idea pages

## Design tokens (starter)

```css
:root {
  /* Color */
  --bg-0: #0c0d10;
  --bg-1: #0f1115;
  --bg-2: #151822;
  --text: #e6eaf2;
  --muted: #9aa3b2;
  --accent: #7a5cff;
  --accent-2: #4af626;

  /* Radii */
  --radius: 8px;
  --radius-lg: 14px;

  /* Motion */
  --dur-1: 140ms;
  --dur-2: 280ms;
  --dur-3: 720ms;
  --ease-1: cubic-bezier(0.2, 0.8, 0.2, 1);
}
```

## Out of scope for v1 (later)

- “I’m feeling lucky” CTA and drawer
- Social and sharing (RSS, Twitter/X, OG/HN cards)
- Idea submissions
- Light mode variant
- Inline Remix panel

## Success (v1)

- Site published with dark-first theme, clear typography, idea grid/cards, and idea pages styled per this spec
