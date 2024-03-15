import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

// npm install @vitejs/plugin-react

export default defineConfig({
  plugins: [
    react(),
    svgr({svgrOptions: {
      // svgrOptions
        }
      })
    ]
})
