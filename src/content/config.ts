import { SITE } from "@config";
import { defineCollection, z } from "astro:content";

const lunch = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    price: z.number(),
  }),
});

const fish = lunch;
const soups = lunch;
const starters = lunch;

export const collections = { lunch, fish, soups, starters };
