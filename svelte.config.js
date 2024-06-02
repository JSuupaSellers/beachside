import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from 'amplify-adapter';
export default {
  kit: {
    adapter: adapter({
      // default options are shown
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false
    }),
    prerender: {
      default: true
    }
  }
};