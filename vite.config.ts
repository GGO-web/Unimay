import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dynamicImport from 'vite-plugin-dynamic-import';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), dynamicImport()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@pages': '/src/pages',
      '@config': '/src/config',
      '@styles': '/src/styles',
      '@assets': '/src/assets',
      '@hooks': '/src/hooks',
      '@features': '/src/features',
      '@helpers': '/src/helpers',
      '@services': '/src/services',
      '@api': '/src/api',
      '@': '/src'
    }
  }
});
