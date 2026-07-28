import { fileURLToPath } from 'url';
import path from 'path';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

// Portable __dirname — works on Node 12+ ESM (import.meta.dirname requires 20.11+)
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// PORT is only used by the dev/preview server, never by `vite build`.
const port = process.env.PORT ? Number(process.env.PORT) : 5173;

// BASE_PATH defaults to '/' for Vercel; Replit sets it per-artifact.
const basePath = process.env.BASE_PATH ?? '/';

// All @replit/* plugins are only loaded inside Replit where REPL_ID is present.
// On Vercel (and any other CI) REPL_ID is unset, so no Replit code is imported.
const isReplit = process.env.REPL_ID !== undefined;

const replitPlugins = isReplit
  ? await (async () => {
      const plugins = [
        await import('@replit/vite-plugin-runtime-error-modal').then((m) =>
          m.default(),
        ),
      ];
      if (process.env.NODE_ENV !== 'production') {
        plugins.push(
          await import('@replit/vite-plugin-cartographer').then((m) =>
            m.cartographer({ root: path.resolve(__dirname, '..') }),
          ),
          await import('@replit/vite-plugin-dev-banner').then((m) =>
            m.devBanner(),
          ),
        );
      }
      return plugins;
    })()
  : [];

export default defineConfig({
  base: basePath,
  plugins: [react(), tailwindcss(), ...replitPlugins],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, '..', '..', 'attached_assets'),
    },
    dedupe: ['react', 'react-dom'],
  },
  root: path.resolve(__dirname),
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
  },
  server: {
    port,
    strictPort: true,
    host: '0.0.0.0',
    allowedHosts: true,
    fs: { strict: true },
  },
  preview: {
    port,
    host: '0.0.0.0',
    allowedHosts: true,
  },
});
