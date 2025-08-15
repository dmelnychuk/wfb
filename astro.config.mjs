import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: cloudflare(),
  site: "https://workflowboom.com",
  integrations: [tailwind(), sitemap(), icon()],
});
