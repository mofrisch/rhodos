import { SITE } from "@config";
import { defineCollection, z } from "astro:content";

const lunch = defineCollection({
  type: "content",
  schema: z.object({
    id: z.string(),
    title: z.string(),
    price: z.number(),
  }),
});

const starters = defineCollection({
  type: "content",
  schema: z.object({
    id: z.string(),
    title: z.string(),
    price: z.number(),
  }),
});

export const collections = { lunch, starters };
