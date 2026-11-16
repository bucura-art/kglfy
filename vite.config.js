import { defineConfig } from 'vite';

// Two pages: the seat map (index.html) and the management portal (admin.html).
export default defineConfig({
  // stamped into model and texture addresses, so a new deploy is never mixed with files a browser cached from the last one
  define: { __BUILD__: JSON.stringify(String(Date.now())) },
  build: {
    target: 'es2022', // the code uses top-level await
    chunkSizeWarningLimit: 1200,
    rollupOptions: { input: { main: 'index.html', admin: 'admin.html' } },
  },
});
