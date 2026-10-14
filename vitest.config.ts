import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  root: __dirname,
  plugins: [react()],
  test: {
    environment: 'happy-dom',
    globals: true,
    setupFiles: [path.resolve(__dirname, 'src/tests/setup.ts')],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
