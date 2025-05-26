import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  server: {
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      'a052-27-60-6-180.ngrok-free.app' // 👈 add your current ngrok host
    ]
  }
})
