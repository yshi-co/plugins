import { defineConfig } from 'vite';

// base './' + inlined assets → self-contained bundle for the Yshi
// walled-garden CSP (no external hosts).
export default defineConfig({
  base: './',
  build: {
    assetsInlineLimit: 1024 * 1024,
    target: 'es2020',
  },
});
