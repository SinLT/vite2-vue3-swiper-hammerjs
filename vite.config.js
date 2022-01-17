import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true
    }),
    eslintPlugin({
      cache: false,
      fix: false
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/assets/scss/base.scss";
          @import "@/assets/scss/mixin.scss";
          @import "@/assets/scss/variable.scss";
        `
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
