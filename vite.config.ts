import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/meta-rescue/',
  plugins: [react()],
  build: {
    sourcemap: false, // Prevents source code from being visible in browser dev tools
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  esbuild: {
    drop: ['console', 'debugger'], // Removes console logs and debuggers in production
  },
})
