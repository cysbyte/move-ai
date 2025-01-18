import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';
import {resolve} from "path";

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    base: env.VITE_APP_URL,
    plugins: [react(), tsconfigPaths()],
    resolve: {
      alias: {
        "@/": `${resolve(__dirname, "src")}/`,
      },
    },
  }
})
