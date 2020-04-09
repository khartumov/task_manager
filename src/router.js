import Vue from 'vue'
import Router from 'vue-router'

import Tasks from './components/Tasks.vue'
import Newtask from './components/Newtask.vue'
import Login from './components/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'tasks',
      component: Tasks
    },
    {
      path: '/newtask',
      name: 'newtask',
      component: Newtask
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
