import { defineCollection, z } from "astro:content";

const lunch = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    price: z.number(),
  }),
});

const meals = lunch;

const cocktails = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      price: z.number(),
      pic: image().refine(img => img.width >= 600, {
        message: "Cover image must be at least 600 pixels wide!",
      }),
    }),
});

const lounge = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pic: image(),
      active: z.boolean().optional(),
    }),
});

const home = lounge;

export const collections = {
  lunch,
  meals,
  cocktails,
  lounge,
  home,
};
