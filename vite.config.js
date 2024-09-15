import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: 'https://Marceloski1.github.io/Reserva-React/' ,
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist',
  },
});
