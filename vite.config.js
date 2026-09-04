import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT: change 'base' to match your GitHub repo name before deploying,
// e.g. if your repo is github.com/yourname/fieldnotes-todo, use '/fieldnotes-todo/'
export default defineConfig({
  plugins: [react()],
  base: '/fieldnotes-todo/',
})
