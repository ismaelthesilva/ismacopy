// packages/ui/tsup.config.ts
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.js'],
  format: ['cjs', 'esm'],
  outDir: 'dist',
  external: ['react', 'react-dom'],
  clean: true,
  sourcemap: true
});