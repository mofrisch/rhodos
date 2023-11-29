import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config";

export default defineConfig({
  site: SITE.website,
  integrations: [sitemap(), tailwind()],
  output: "static",
  build: {
    format: "file",
  },
  optimize: {
    css: true,
    js: true,
  },
});
