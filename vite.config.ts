import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import path from 'path';

import rollupConfig from './rollup.config';

const isProdMode = process.env.NODE_ENV === 'production';

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  server: {
    port: 4000,
    host: '0.0.0.0',
    watch: {
      usePolling: true,
    },
  },
  resolve: {
    alias: [
      {
        find: /^~]/,
        replacement: '',
      },
      {
        find: '@app',
        replacement: path.resolve(__dirname, 'src'),
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
    ],
    extensions: ['.css', '.scss', '.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
  build: {
    emptyOutDir: true,
    assetsDir: 'assets',
    minify: isProdMode,
    outDir: path.resolve(__dirname, 'dist'),
    sourcemap: !isProdMode,
    rollupOptions: rollupConfig,
  },
  plugins: [
    react({
      babel: {
        plugins: [
          [
            '@emotion',
            {
              sourceMap: true,
              autoLabel: 'dev-only',
              labelFormat: '[local]',
              cssPropOptimization: true,
            },
          ],
        ],
      },
    }),
  ],
  css: {
    devSourcemap: true,
  },
});
