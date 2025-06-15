import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/madar/',  // تأكد إنها اسم الريبو مع شرطة في البداية والنهاية
  plugins: [react()],
});

