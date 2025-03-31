import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // permite que escuche en la red local
    port: 5173, // o el que quieras
  }
})
