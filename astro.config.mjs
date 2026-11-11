import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// The live address. Used for canonical links, the sitemap and social share links.
export const SITE = 'https://www.peds4kids.com';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  // The server (nginx) serves /about/ from about/index.html, so every URL ends with a slash.
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    react(),
    sitemap({
      // Keep drafts and the error page out of Google.
      filter: (page) => !page.includes('/home-2/') && !page.includes('/404'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
