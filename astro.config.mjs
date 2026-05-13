import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://uksortation.netlify.app',
  // Vite config so site.json imports cleanly
  vite: {
    resolve: {
      alias: {
        '@content': '/src/content',
      },
    },
  },
});
