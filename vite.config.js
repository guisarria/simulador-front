import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
const path = require('path');
import mkcert from 'vite-plugin-mkcert'

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  return defineConfig({
    resolve: {
      alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }],
    },
    plugins: [react(), mkcert()],
    server: {
      https: true
    },
  })
}
