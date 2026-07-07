import path from "node:path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Absolute base path for this GitHub Pages project site. Using a relative
  // base ("./") breaks when a page is loaded without a trailing slash
  // (e.g. "/website" instead of "/website/") since the browser then
  // resolves relative asset paths against the wrong directory. Change this
  // to "/" if this ever moves to a custom domain or repo root.
  base: "/website/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        about: path.resolve(__dirname, "about.html"),
        howIWork: path.resolve(__dirname, "how-i-work.html"),
        program: path.resolve(__dirname, "program.html"),
        prices: path.resolve(__dirname, "prices.html"),
        contact: path.resolve(__dirname, "contact.html"),
      },
    },
  },
})
