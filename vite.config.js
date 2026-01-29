import { defineConfig } from 'vite'

export default defineConfig({
  base: '/my-train-chi/',
  build: {
    outDir: 'docs',
    emptyOutDir: true
  }
})
