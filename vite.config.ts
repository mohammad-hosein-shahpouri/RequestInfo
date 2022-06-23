import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: 'public',
  base: "/RequestInfo/",
  build: {
    outDir: "build"
  },
  plugins: [react()],
  optimizeDeps: {
    entries: ["node_modules"]
  }
})