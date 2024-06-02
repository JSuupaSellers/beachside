import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from 'amplify-adapter';
const config = {
  kit: {
    adapter: adapter()
  },
  preprocess: vitePreprocess()
};
export default config;