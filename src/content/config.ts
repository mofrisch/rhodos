import { SITE } from "@config";
import { defineCollection, z } from "astro:content";

const lunch = defineCollection({
  type: "content",
  schema: z.object({
    id: z.string(),
    title: z.string(),
    price: z.number(),
    cat: z.string(),
  }),
});

const meals = defineCollection({
  type: "content",
  schema: z.object({
    id: z.number(),
    title: z.string(),
    price: z.number(),
    cat: z.string(),
  }),
});

export const collections = { lunch, meals };
