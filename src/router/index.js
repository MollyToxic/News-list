import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import LentaRu from '../views/LentaRu'
import MosRu from '../views/MosRu'

const routes = [
  {
    path: '/main',
    name: 'main',
    component: Main, 
    alias: '/'
  },
  {
    path: '/main/lenta_ru',
    name: 'lenta_ru',
    component: LentaRu
  },
  {
  path: '/main/mos_ru',
  name: 'mos_ru',
  component: MosRu
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
