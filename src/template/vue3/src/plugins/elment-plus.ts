// 组件库统一在这里进行配置
import ElementPlus from 'element-plus'
import { App } from 'vue'

export default {
  install (app: App) {
    app.use(ElementPlus, { size: 'small' })
  }
}
