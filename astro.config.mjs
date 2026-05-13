import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://dannygrigg.github.io',
  base: '/orion-v2',
  vite: {
    resolve: {
      alias: {
        '@content': '/src/content',
      },
    },
  },
});
