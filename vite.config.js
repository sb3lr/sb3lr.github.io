import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/madar/', // المفروض ذا يكون اسم المستودع على حسب كلام gemini 
});
