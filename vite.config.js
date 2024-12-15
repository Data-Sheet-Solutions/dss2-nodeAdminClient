import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 3009,
    open: true, // This will open the browser automatically
  },
  build: {
    outDir: path.join(__dirname, '_static'),
  },
});
