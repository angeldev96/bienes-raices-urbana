import { createRouter, createWebHistory } from 'vue-router'

// Importa tus componentes de vista

import Login from '../components/LoginComponent.vue'

const routes = [
  {
    path: '/login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
