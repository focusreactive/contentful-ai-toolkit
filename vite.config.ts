import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => ({
  base: '', // relative paths
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  plugins: [react()],
  test: {
    environment: 'happy-dom',
  },
}));
