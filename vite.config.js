import { defineConfig } from 'vite'
import { path, __dirname } from 'path'
import preact from '@preact/preset-vite'

const host = process.env.TAURI_DEV_HOST
const hmr_data = { protocol: 'ws', host, port: 1421 }

export default defineConfig({
  plugins: [preact()],
  clearScreen: false,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 1420,
    strictPort: true,
    host: host || false,
    hmr: host ? hmr_data : undefined,
    watch: {
      ignored: ['**/src-tauri/**']
    }
  }
})
