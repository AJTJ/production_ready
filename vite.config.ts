import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// The site is served from the custom domain productionready.studio, so it
// lives at the domain root and the base path is "/". The custom domain is
// declared in public/CNAME. If you ever serve it from a GitHub Pages project
// URL instead (https://<user>.github.io/<repo>/), build with:
//   VITE_BASE=/<repo>/ npm run build
const base = process.env.VITE_BASE ?? '/'

export default defineConfig({
  base,
  plugins: [react()],
})
