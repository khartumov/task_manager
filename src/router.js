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
        title: 'Список задач',
        auth: true
      },
      component: Tasks
    },
    {
      path: '/newtask',
      name: 'newtask',
      meta: {
        title: 'Новая задача',
        auth: true
      },
      component: Newtask
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: 'Авторизация'
      },
      component: Login
    },
    {
      path: '/:id',
      name: 'singletask',
      meta: {
        title: 'Задача',
        auth: true
      },
      component: Singletask
    },
    {
      path: '/:id/edit',
      name: 'edittask',
      meta: {
        title: 'Редактирование задачи',
        auth: true
      },
      component: EditTask
    }
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser
  const isAuthRequired = to.matched.some(route => route.meta.auth)

  if (isAuthRequired && !currentUser) {
    next('/login')
  } else {
    next()
  }

  document.title = to.meta.title || 'Менеджер задач'
})

export default router
