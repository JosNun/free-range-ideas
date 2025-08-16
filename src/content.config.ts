import { defineCollection, z } from "astro:content";

import { glob } from "astro/loaders";

const ideas = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/ideas" }),
  schema: z.object({
    title: z.string().min(2),
    description: z.string(),
    addedDate: z.date(),
  }),
});

export const collections = {
  ideas,
};
