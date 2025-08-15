import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),
  site: "https://workflowboom.com",
  base: "/",
  integrations: [tailwind(), sitemap(), icon()],
  vite: {
    define: {
      __IMPORT_META_ENV_SITE__: JSON.stringify("https://workflowboom.com")
    }
  }
});
