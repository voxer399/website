import path from "node:path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "./",
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
