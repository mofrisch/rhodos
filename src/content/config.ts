import { defineCollection, z } from "astro:content";

const lunch = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    price: z.number(),
  }),
});

const meals = lunch;
const cocktails = lunch;

export const collections = {
  lunch,
  meals,
  cocktails,
};
