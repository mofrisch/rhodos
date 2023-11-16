import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  integrations: [sitemap(), tailwind()],
  output: "server",
  adapter: cloudflare({
    imageService: "cloudflare",
  }),
});
