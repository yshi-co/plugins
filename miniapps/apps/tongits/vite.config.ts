import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: 'preact',
  },
  build: {
    assetsInlineLimit: 1024 * 1024,
    target: 'es2020',
  },
});
