import { defineConfig } from "vite";
import pluginReact from '@vitejs/plugin-react'
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  base: '/',
  server: {
    host: 'localhost',
    port: 3000
  },
  // plugins: [react()]
  plugins: [
    pluginReact({
      jsxRuntime: 'automatic'   // import { React } from 'react' 자동으로 가져오도록
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})