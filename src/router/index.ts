import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from './home'

const routes: RouteRecordRaw[] = [...Home]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  // 路由前置拦截
  next()
})

router.afterEach(() => {
  // 路由后置拦截
})
export default router
