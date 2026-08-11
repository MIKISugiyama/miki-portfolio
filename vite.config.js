import { defineConfig } from 'vite';

export default defineConfig({
  base: '/miki-portfolio/',
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  },
  server: {
    port: 3000,
    open: true
  }
});

