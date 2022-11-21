import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';

export default {
  plugins: [vue()],
  root: resolve(__dirname, 'src'),
  base: '/public/static/',
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: false,
    watch: {
      usePolling: true,
      disableGlobbing: false,
    },
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: {
      '~bootstrap': resolve(__dirname, 'node_modules/bootstrap'),
    },
  },
  build: {
    outDir: resolve(__dirname, 'public/static/dist/js'),
    assetsDir: '',
    manifest: true,
    emptyOutDir: true,
    target: 'es2015',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/js/main.js'),
      },
      output: {
        chunkFileNames: undefined,
      },
    },
  },
};
