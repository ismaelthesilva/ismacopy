import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@ismacopy/ui': path.resolve(__dirname, '../../packages/ui/src'),
      '@ismacopy/ui/components': path.resolve(__dirname, '../../packages/ui/src/components'),
      '@ismacopy/ui/lib': path.resolve(__dirname, '../../packages/ui/src/lib')
    }
  }
});