# task‑1 - RSS Feed

## Description (the why)

Provide a machine-consumable feed so people can subscribe to new ideas and integrate updates into their readers, automations, and aggregators. This increases discoverability and enables distribution outside the website UI.

## Acceptance Criteria (the what)

- [ ] A valid RSS 2.0 feed is available at `/rss.xml` and passes a public validator
- [ ] Feed contains the most recent 20 ideas in reverse-chronological order by `addedDate`
- [ ] Each feed item includes: title, summary excerpt (200–300 chars), absolute permalink to the idea, publication date, and stable GUID
- [ ] Feed metadata uses title "Free Range Projects" and the canonical site URL `https://projects.josnun.com`
- [ ] No additional filtering beyond the default `ideas` collection contents
- [ ] Feed is generated during build and works in both `astro dev` and `astro build` outputs
- [ ] A `<link rel="alternate" type="application/rss+xml">` tag is present on pages to advertise the feed
- [ ] README documents the feed URL and its purpose

## Implementation Plan (the how)

0. Prerequisite: ensure per‑idea permalink pages exist and resolve; use those URLs in feed items
1. Configure canonical site URL in `astro.config.mjs` (`site` option) as `https://projects.josnun.com`
2. Add feed endpoint at `src/pages/rss.xml.ts` using Astro's RSS helper; source entries from `ideas` content collection
3. Map `title`, `description`, `addedDate` to feed fields; construct absolute `link` from canonical base + idea slug; derive summary excerpt (200–300 chars) from `description` or content
4. Limit to 20 items, sorted by `addedDate` desc
5. Add `<link rel="alternate" type="application/rss+xml" href="/rss.xml">` in `src/layouts/Layout.astro`
6. Validate output using an online feed validator; fix any schema issues
7. Update `README.md` with feed details and usage
8. (Optional, if trivial) Consider adding Atom and/or JSON Feed variants

## Open Questions

1. Provide feed description text and optional site image/logo for richer reader display (can be added later)
2. (Stretch) If easy, also expose Atom and/or JSON Feed
