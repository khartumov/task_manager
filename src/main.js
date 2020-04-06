import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
