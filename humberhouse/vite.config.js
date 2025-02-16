import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['8e55-24-137-88-25.ngrok-free.app'], // Add your ngrok URL here
  }
})
