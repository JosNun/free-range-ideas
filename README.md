# Free‑Range Ideas

Ideas I want to exist — free for the taking. This site is a public shelf of project ideas. If one sparks you, build it. Bonus points for open source and a nod back.

> Note: this is a side project; the design is intentionally hasty and evolving.

## What this is

- A simple Astro site that lists short idea write‑ups from `src/content/ideas/`.
- Each idea has frontmatter: `title`, `description`, `addedDate`, and optional `image`.
- The homepage lists ideas newest‑first; each idea has its own page.

## Getting started

```sh
pnpm install
pnpm dev
```

Then open `http://localhost:4321`.

## Commands

All commands run from the project root:

| Command          | Action                                           |
| :--------------- | :----------------------------------------------- |
| `pnpm install`   | Installs dependencies                            |
| `pnpm dev`       | Starts local dev server at `localhost:4321`      |
| `pnpm build`     | Build your production site to `./dist/`          |
| `pnpm preview`   | Preview your build locally, before deploying     |
| `pnpm astro ...` | Run CLI commands like `astro add`, `astro check` |

## Add a new idea

1. Create a Markdown file in `src/content/ideas/`.
2. Include frontmatter like:

```md
---
title: Example Idea
description: One‑line summary of the idea.
addedDate: 2025-08-16
image: ../../assets/example.png # optional
---

- Why it’s interesting
- What success looks like
- Constraints or scope
```

3. The idea will appear on the homepage automatically.

## RSS Feed

An RSS feed is available at `/rss.xml` containing the most recent 20 ideas. The feed includes:
- Title and description excerpt for each idea
- Publication date and permalink
- Valid RSS 2.0 format for use in feed readers

You can subscribe to stay updated on new project ideas: `https://ideas.josnun.com/rss.xml`

## Tech

- Astro 5
- Tailwind CSS (with Typography plugin)
- Astro Content Collections
- Sharp for images
- @astrojs/rss for RSS feed generation
