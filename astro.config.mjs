import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://maikerlab.de',
  integrations: [mdx(), tailwind()],
  i18n: {
    locales: ["de", "en"],
    defaultLocale: "de",
    prefixDefaultLocale: false,
  }
  // Note: sitemap() is temporarily disabled due to a bug with absolute paths
  // Enable it when the sitemap package bug is fixed
});