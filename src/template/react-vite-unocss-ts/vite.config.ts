import { defineConfig } from 'vite'
import * as path from 'path'
import presetAttributify from '@unocss/preset-attributify'
import react from '@vitejs/plugin-react-swc'
import UnoCSS from 'unocss/vite'
import PresetTailwind from '@unocss/preset-wind'
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    UnoCSS({
      /* options */
      presets: [
        // 属性化unocss
        presetAttributify(
          {}
        ),
        // tailwind和wind-css预设
        PresetTailwind()
      ],
      transformers: [
        // tsx/jsx中属性化使用unocss
        transformerAttributifyJsx(),
      ]
    }),
  ],
  resolve: {
    alias: [
      {find: /^~/, replacement: ''},
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ]
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
})
