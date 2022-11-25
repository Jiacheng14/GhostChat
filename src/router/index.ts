import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import login from '../views/Login.vue'
import Chat from '../views/Chat.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      redirect: '/chat'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    }
  ]
})

export default router
