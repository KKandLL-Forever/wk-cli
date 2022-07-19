import { RouteRecordRaw, RouterView } from 'vue-router'

export const exampleRoutes: RouteRecordRaw[] = [
  {
    path: 'product',
    name: 'product',
    component: RouterView,
    meta: {},
    children: []
  }
]
