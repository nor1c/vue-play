import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  { path: '/hello-world', name: 'HelloWorld', component: () => import('../views/HelloWorld.vue') },
  { path: '/counter', name: 'Counter App', component: () => import('../views/Counter.vue') },
  { path: '/handling-user-input', name: 'Handling user input', component: () => import('../views/UserInput.vue') },
  { path: '/misc', name: 'Misc', component: () => import('../views/Misc.vue') },
  { path: '/lifecycle-hooks', name: 'Hooks', component: () => import('../views/Hooks.vue') },
  { path: '/computed-properties', name: 'Computed Properties', component: () => import('../views/ComputedProperties.vue') },
  { path: '/watchers', name: 'Watchers', component: () => import('../views/Watchers.vue') },
  { path: '/simple-todo-list-app', name: 'Simple To-do List App', component: () => import('../views/TodoListApp.vue') },
  { path: '/custom-events', name: 'Custom Events', component: () => import('../views/CustomEvents.vue') },
  { path: '/provide-inject', name: 'Provide-Inject', component: () => import('../components/ProvideList.vue') },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
