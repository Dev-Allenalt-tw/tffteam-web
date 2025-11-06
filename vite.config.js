import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ GitHub Pages + Custom Domain fix
export default defineConfig({
  plugins: [react()],
  base: './', // use relative paths so it works on GitHub Pages + Cloudflare
  build: {
    outDir: 'dist',
  },
})
