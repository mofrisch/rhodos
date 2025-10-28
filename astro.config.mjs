import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config";
// import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  site: SITE.website,
  integrations: [tailwind(), sitemap()],
  output: "static",
  build: {
    format: "file",
  },
  //adapter: cloudflare(),
  image: {
    service: {
      entry: 'astro/assets/services/compile', // Build-time only
      // optional: config: { sharpOptions: { /* … */ } }
    }
  }
});
