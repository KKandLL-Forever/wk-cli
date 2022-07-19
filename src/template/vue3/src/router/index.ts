import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
import { exampleRoutes } from './modules/product'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: AppLayout,
    meta: {},
    children: [
      {
        path: '', // 默认子路由
        name: 'home',
        component: () => import('../views/home/Home.vue'),
        meta: {}
      },
      ...exampleRoutes
    ]
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('../views/login/Login.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to) => {})
router.afterEach(() => {})
export default router
