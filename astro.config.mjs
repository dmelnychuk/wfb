// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  site: "https://workflowboom.com",
  integrations: [tailwind(), sitemap(), icon()],
  adapter: cloudflare(),
});
