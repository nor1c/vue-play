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
  { path: '/transition-animation', name: 'Transition and Animation', component: () => import('../views/TransitionAnimation.vue') },
  { path: '/composition-api', name: 'Composition API', component: () => import('../views/Composition.vue') },
  { path: '/separated-composition-api', name: 'Separated Composition API', component: () => import('../views/SeparatedComposition.vue') },
  { path: '/composition-usage-with-templates', name: 'Composition Usage with Tempaltes', component: () => import('../views/CompositionUsageWithTemplates.vue') },
  { path: '/template-refs', name: 'Template Refs', component: () => import('../views/CompositionTemplateRefs.vue') },
  { path: '/mixins', name: 'Mixins', component: () => import('../views/Mixins.vue') },
  { path: '/custom-directive', name: 'Custom Directive', component: () => import('../views/CustomDirective.vue') },
  { path: '/playground', name: 'Playground', component: () => import('../views/Playground.vue') },
  { path: '/composition-reactive', component: () => import('../views/CompositionReactive.vue') },
  { path: '/composition-custom-ref', component: () => import('../views/CompositionCustomRef.vue') },
  { path: '/change-data-between-components', component: () => import('../views/change-data-between-components/Display.vue') },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
