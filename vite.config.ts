import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [ { src: '404.html', dest: '' } ]
    })
  ],
  build: {
    outDir: 'docs'
  },
  server: {
    host: '0.0.0.0',
    port: 5173
  }
})
