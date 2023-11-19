import { getCollection } from "astro:content";

let getCategory =  async (category: string) => {
  const data = await getCollection("meals");
  return data.filter(meal => meal.data.cat === category);
};

export default getCategory;
