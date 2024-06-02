import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from 'amplify-adapter';
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null,
      precompress: false
    })
  },
  preprocess: vitePreprocess()
};
export default config;