import Vue from 'vue'
import Router from 'vue-router'

import Tasks from './components/Tasks.vue'
import Newtask from './components/Newtask.vue'
import Login from './components/Login.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'tasks',
      meta: {
        auth: true
      },
      component: Tasks
    },
    {
      path: '/newtask',
      name: 'newtask',
      meta: {
        auth: true
      },
      component: Newtask
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isAurhRequired = to.matched.some((route) => route.meta.auth)

  if (isAurhRequired) {
    next('/login')
  } else {
    next()
  }
})

export default router
