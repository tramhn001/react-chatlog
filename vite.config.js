import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Change 'dist' to 'build' for compatibility with gh-pages
  },  
  base: '/react-chatlog/',
  test: {
    // jest config here
    reporters: ['verbose'],
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.js'],
  },
})