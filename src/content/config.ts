import { SITE } from "@config";
import { defineCollection, z } from "astro:content";

const lunch = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    price: z.number(),
    current: z.string().optional(),
  }),
});

const fish = lunch;
const soups = lunch;
const starters = lunch;
const cheese = lunch;
const desserts = lunch;
const extra = lunch;
const fish_plates = lunch;
const grill = lunch;
const grill_plates = lunch;
const gyros = lunch;
const ice = lunch;
const kids = lunch;
const oven = lunch;
const rumpsteak = lunch;
const salads = lunch;
const schnitzel = lunch;
const veggie = lunch;

export const collections = {
  lunch,
  fish,
  soups,
  starters,
  cheese,
  desserts,
  extra,
  fish_plates,
  grill,
  grill_plates,
  gyros,
  ice,
  kids,
  oven,
  rumpsteak,
  salads,
  schnitzel,
  veggie,
};
