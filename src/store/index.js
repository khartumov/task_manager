import Vue from 'vue'
import Vuex from 'vuex'

import firebase from 'firebase/app'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    async login ({ dispatch }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password)
      }
      catch (e) {
        console.log(e)
        throw e
      }
    },

    async logout () {
      try {
        await firebase.auth().signOut()
      }
      catch (e) {
        console.log(e)
        throw e
      }
    },

    getUserId () {
      const user = firebase.auth().currentUser

      return user ? user.uid : null
    },

    async createTask ({ dispatch }, { title, date, status, text }) {
      const userID = await dispatch('getUserId')
      const task = firebase.database().ref(`/users/${userID}/tasks`).push({ title, date, status, text })

      return { title, date, status, text, id: task.key }
    },

    async fetchTasks ({ dispatch }) {
      const userID = await dispatch('getUserId')
      const tasksObject = await firebase.database().ref(`/users/${userID}/tasks`).once('value')
      const tasks = Object.entries(tasksObject.val()).map((task) => ({ ...task[1], id: task[0] }))

      return tasks
    },

    async fetchTask ({ dispatch }, id) {
      const userID = await dispatch('getUserId')
      const task = await firebase.database().ref(`/users/${userID}/tasks`).child(id).once('value')

      return { ...task.val(), id }
    },

    async updateTask ({ dispatch }, { title, date, status, text, id }) {
      const userID = await dispatch('getUserId')

      await firebase.database().ref(`/users/${userID}/tasks`).child(id).update({ title, date, status, text })
    }
  }
})
