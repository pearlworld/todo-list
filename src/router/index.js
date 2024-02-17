import { createWebHistory, createRouter } from 'vue-router'
import TodoView from '../views/TodoView.vue'

const routes = [
  {
    path: '/',
    name: 'Todo',
    component: TodoView
  }
]

const router = new createRouter({
  history: createWebHistory(),
  routes
})

export default router