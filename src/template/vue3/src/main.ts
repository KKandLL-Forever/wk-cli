import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
// elementPlus暗黑模式样式
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'element-plus/theme-chalk/src/index.scss'
import elementPlus from './plugins/elment-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 全局样式
import '@/style/index.scss'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router)
  .use(createPinia())
  .use(elementPlus)
  .mount('#app')
