import { defineCollection, z } from "astro:content";

const lunch = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    price: z.number(),
    current: z.string().optional(),
  }),
});

const meals = lunch;

export const collections = {
  lunch,
  meals,
};
