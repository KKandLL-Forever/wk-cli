import 'vue-router'

declare module 'vue-router' {
  // eslint-disable-next-line no-unused-vars
  interface RouteMeta {
    // 面包屑
    title?: string,
    requireAuth?: boolean
  }
}
