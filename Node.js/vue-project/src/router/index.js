import { createRouter, createWebHistory } from 'vue-router'
import TodoListContainer from '../views/TodoListMain.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'todoList',
      component: TodoListContainer
    }
  ]
})

export default router
