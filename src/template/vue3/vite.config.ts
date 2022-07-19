import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import eslintPlugin from 'vite-plugin-eslint'
import { fileURLToPath, URL } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  plugins: [
    vue(),
    vueJsx({

    }),
    eslintPlugin({
      cache: false
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/style/element/custom-var.scss" as *;'
      }
    }
  },
  server: {
    host: 'localhost',
    proxy: {
      '/dev': {
        target: 'https://shop.fed.lagounews.com',
        changeOrigin: true,
        rewrite: (path): string => {
          return path.replace(/^\/dev/, '/api/admin')
        }
      }
    }
  }
})
