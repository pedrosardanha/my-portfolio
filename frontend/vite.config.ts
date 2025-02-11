import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // porta que o servidor de desenvolvimento vai usar
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // permite usar @ como atalho para a pasta src
    }
  }
})