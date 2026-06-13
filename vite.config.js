import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],ssr: {
    // Verhindert CommonJS/ESM-Mischfehler im Server-Build
    noExternal: ['react-helmet-async', 'react-router', 'react-router-dom']
  }
})
