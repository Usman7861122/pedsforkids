import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { allPosts } from './src/data/blog.ts';

const postDates = Object.fromEntries(allPosts.map((p) => [p.slug, p.iso]));

// The live address. Used for canonical links, the sitemap and social share links.
export const SITE = 'https://www.peds4kids.com';

// https://astro.build/config
export default defineConfig({
  site: SITE,
  // The server (nginx) serves /about/ from about/index.html, so every URL ends with a slash.
  trailingSlash: 'always',
  // Put the (small) CSS inside each page, so the browser does not wait for a separate file.
  build: { format: 'directory', inlineStylesheets: 'always' },
  integrations: [
    react(),
    sitemap({
      // Keep drafts and the error page out of Google.
      filter: (page) => !page.includes('/home-2/') && !page.includes('/404'),
      // lastmod: blog posts use their own date; other pages use the build date.
      serialize(item) {
        const m = item.url.match(/\/blog\/([^/]+)\/$/);
        const d = m && postDates[m[1]];
        item.lastmod = (d ? new Date(d) : new Date()).toISOString();
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
