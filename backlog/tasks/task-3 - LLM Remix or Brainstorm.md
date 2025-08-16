# task‑3 - LLM Remix / Brainstorm for ideas

## Description (the why)

Enable users to quickly generate creative variations, extensions, and brainstorming prompts for any idea. This increases engagement, helps unblock thinking, and surfaces novel angles with minimal effort.

## Acceptance Criteria (the what)

- [ ] From an idea’s page, a user can click a "Riff on it" control to generate 3–5 suggestions
- [ ] The "Riff on it" control is visible on idea pages; an optional compact variant may appear on the main list
- [ ] Suggestions are bulleted, 1–2 sentences each, using the idea’s title, description, and content as context
- [ ] Runs fully client-side in-browser (no server calls and no client secrets)
- [ ] User can request another round (Regenerate) without reloading the page
- [ ] Results render progressively or show a visible loading/progress state
- [ ] Results can be copied easily (single-click copy)
- [ ] Ephemeral: no persistence and no tracking
- [ ] If the device/browser cannot run the local model, a graceful message is shown
- [ ] Reasonable latency target for P95 (≤ 15s) on desktop devices with WebGPU; fallback notice for unsupported devices

## Implementation Plan (the how)

0. Prerequisite: idea detail pages exist (remix entry point lives there); optionally a compact button on the main list
1. Define prompt strategy that balances creativity and specificity (temperature, max tokens)
2. Choose an in-browser runtime: WebGPU-first with WASM fallback (e.g., web-LLM or Transformers.js); avoid bundling large weights in the main bundle
3. Lazy-load model weights on first use; show download/progress; cache in IndexedDB; warm-up model before first generation
4. Run inference in a Web Worker to keep the UI responsive; communicate via postMessage
5. Capability detection: if WebGPU is unavailable or memory is insufficient, show a graceful message with suggested browser/devices
6. Provide simple UI on the idea page: "Riff on it" button, list of generated suggestions, Regenerate button, and copy controls
7. Keep everything ephemeral (no persistence, no tracking); document known model sizes and expected first-run latency

## Open Questions

1. Runtime selection: prefer WebGPU (faster) with WASM fallback? Minimum device/browser support to target?
2. Model choice and size budget: what max download size is acceptable on first run (e.g., ≤ 50–150 MB)?
3. UI icon: include an icon with the label (e.g., 🎵) or keep text-only?
4. Placement: idea page primary action; also add a compact button on the main list?
5. Do we want an optional offline cache prewarm or keep strictly on-demand?
