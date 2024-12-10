import { defineConfig } from 'vite'
import deno from '@deno/vite-plugin'
import react from '@vitejs/plugin-react'

import { VitePWA } from 'npm:vite-plugin-pwa';
// https://vite.dev/config/
export default defineConfig({
  plugins: [deno(), react(), VitePWA({
    registerType: 'autoUpdate',
    workbox: {
      runtimeCaching: [
        {
          urlPattern: /.*\.(?:js|css|html|png|jpg|jpeg|svg|gif)$/,
          handler: 'CacheFirst',
          options: {
            cacheName: 'assets',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 60 * 60 * 24 * 7, // Cache for a week
            },
          },
        },
      ],
    },
  })],
  optimizeDeps: {
    include: ['react-helmet-async']
  },
  server: {
    proxy: {
      '/fetch': {
        target: 'https://yuzmynerva.straw.page', // Target URL
        changeOrigin: true, // Adjusts the origin of the request
        secure: false, // If the target URL is HTTPS, this ensures security
        rewrite: (path) => path.replace(/^\/fetch/, '') // Rewrites the path
      }
    }
  }
})
