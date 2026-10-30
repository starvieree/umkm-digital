import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GANTI `site` dengan domain produksi final (dipakai canonical, OG, dan sitemap).
export default defineConfig({
  site: 'https://example.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap()],
});
