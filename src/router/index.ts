import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router'

import Home from '../pages/Home.vue'
import { attributeRoutes } from './attribute.routes'
import { virtueRoutes } from './virtue.routes'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  /**
   * VIRTUES
   */
  ...virtueRoutes,

  /**
   * ATTRIBUTES
   */
  ...attributeRoutes
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
