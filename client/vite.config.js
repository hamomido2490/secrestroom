import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // For Vercel
  build: {
    chunkSizeWarningLimit: 1000, // Increase for larger bundles
    rollupOptions: {
      output: {
        manualChunks: {
          'chart-js': ['chart.js'] // Lazy load chart
        }
      }
    }
  }
})