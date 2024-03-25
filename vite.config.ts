import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  base: "/HR_Space",
  plugins: [
    react(),
    svgr({svgrOptions: {
        }
      })
    ]
})
