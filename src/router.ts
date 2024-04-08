import {
  createRouter,
  createWebHistory,
} from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'
import { USER_INFO } from '@/enume/cache'
const router = createRouter({
  history: createWebHistory(),
  extendRoutes: (routes) => {
    const homeRoute = routes.find((r) => r.path !== '/')
    if (homeRoute) {
      homeRoute.meta ??= {}
      homeRoute.meta.requiresAuth = true
    }
    return setupLayouts(routes)
  },
})
// 设置全局前置守卫
/* router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem(USER_INFO)
  if (to.matched.some(record => record.meta.requiresAuth) && !token) {
    // 如果用户未认证，则重定向到登录页面
    next({ path: '/' });
  } else {
    // 否则，继续导航
    next();
  }
}); */
export default router
