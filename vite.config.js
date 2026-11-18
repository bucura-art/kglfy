import { defineConfig } from 'vite';

export default defineConfig({
  // Stamp model and texture addresses so a new deploy does not reuse stale files.
  define: { __BUILD__: JSON.stringify(String(Date.now())) },
  plugins: [{
    name: 'tour-route',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        if (req.url === '/tour' || req.url?.startsWith('/tour?')) req.url = req.url.replace('/tour', '/tour.html');
        next();
      });
    },
  }],
  build: {
    target: 'es2022',
    chunkSizeWarningLimit: 1200,
    rollupOptions: { input: { index: 'index.html', tour: 'tour.html' } },
  },
});
