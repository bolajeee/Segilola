import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
  include: ['hoist-non-react-statics']
},
  plugins: [react()],
  server: {
    "/api": {
      target: "http://localhost:5000"
    }
  }
})
