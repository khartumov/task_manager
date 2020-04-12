import Vue from 'vue'
import Router from 'vue-router'
import firebase from 'firebase/app'

import Tasks from './components/Tasks.vue'
import Newtask from './components/Newtask.vue'
import Login from './components/Login.vue'
import Singletask from './components/Singletask.vue'
import EditTask from './components/EditTask.vue'

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
    },
    {
      path: '/:id',
      name: 'singletask',
      meta: {
        auth: true
      },
      component: Singletask
    },
    {
      path: '/:id/edit',
      name: 'edittask',
      meta: {
        auth: true
      },
      component: EditTask
    }
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const isAuthRequired = to.matched.some((route) => route.meta.auth)

  if (isAuthRequired && !currentUser) {
    next('/login')
  } else {
    next()
  }
})

export default router
