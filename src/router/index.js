import { createRouter, createWebHistory } from 'vue-router'
import Top from '@/components/Top.vue'
import Second from '@/components/Second.vue'
import Third from '@/components/Third.vue'
import Fourth from '@/components/Fourth.vue'

const routes = [
  {
    path: '/',
    name: 'Top',
    component: Top
  },
  {
    path: '/second',
    name: 'Second',
    component: Second
  },
  {
    path: '/third',
    name: 'Third',
    component: Third
  },
  {
    path: '/fourth',
    name: 'Fourth',
    component: Fourth
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
