import { defineConfig } from 'vite';

// Two pages: the seat map (index.html) and the management portal (admin.html).
export default defineConfig({
  build: {
    target: 'es2022', // the code uses top-level await
    chunkSizeWarningLimit: 1200,
    rollupOptions: { input: { main: 'index.html', admin: 'admin.html' } },
  },
});
