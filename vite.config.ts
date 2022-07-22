import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression';
import { readdirSync } from 'fs'
import { resolve, join } from 'path';

const absolutePathAliases: { [key: string]: string } = {};
const srcPath = resolve('./src');
const srcRootContent = readdirSync(srcPath, { withFileTypes: true }).map((dirent) => dirent.name.replace(/(\.ts){1}(x?)/, ''));

srcRootContent.forEach((directory) => {
  absolutePathAliases[directory] = join(srcPath, directory);
});

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: 'public',
  base: "/RequestInfo/",
  build: {
    outDir: "build"
  },
  resolve: {
    alias: {
      ...absolutePathAliases
    }
  },
  server:{
    port:  Number(process.env.PORT) || 3000,
  },
  plugins: [react(), viteCompression()],
  optimizeDeps: {
    entries: ["node_modules"]
  }
})