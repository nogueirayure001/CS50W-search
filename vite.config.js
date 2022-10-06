import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  publicDir: resolve(__dirname, 'public'),
  server: {
    port: 3000
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        image: resolve(__dirname, 'src', 'pages', 'image.html'),
        advanced: resolve(__dirname, 'src', 'pages', 'advanced.html')
      },
      output: {
        dir: resolve(__dirname, 'dist')
      }
    },
    outDir: resolve(__dirname, 'dist')
  }
});
