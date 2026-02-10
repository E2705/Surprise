import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // GitHub Pages project site: https://<user>.github.io/<repo>/
  // Repo name is "Surprise", so production base must be "/Surprise/".
  base: command === 'serve' ? '/' : '/Surprise/',
}))
