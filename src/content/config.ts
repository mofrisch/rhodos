import { defineCollection, z } from "astro:content";

const lunch = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    price: z.number(),
  }),
});

const meals = lunch;

/*
const cocktails = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    price: z.number(),
    img: z.string(),
  }),
});
*/

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

export const collections = {
  lunch,
  meals,
  cocktails,
};
