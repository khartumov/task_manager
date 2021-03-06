import Vue from 'vue'
import router from './router'

import App from './App.vue'
import store from './store'
import Editor from 'v-markdown-editor'
import VueSimpleMarkdown from 'vue-simple-markdown'
import './registerServiceWorker'
import {
  LayoutPlugin,
  IconsPlugin,
  ButtonPlugin,
  InputGroupPlugin,
  FormGroupPlugin,
  FormInputPlugin,
  FormDatepickerPlugin,
  FormSelectPlugin,
  TooltipPlugin,
  AlertPlugin
} from 'bootstrap-vue'

import dateFilter from '@/filters/dateFilter'
import statusFilter from '@/filters/statusFilter'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'v-markdown-editor/dist/v-markdown-editor.css'
import '@fortawesome/fontawesome-free/css/all.css'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import firebaseConfig from '@/firebaseConfig'

Vue.config.productionTip = false

Vue.use(LayoutPlugin)
Vue.use(IconsPlugin)
Vue.use(ButtonPlugin)
Vue.use(InputGroupPlugin)
Vue.use(FormGroupPlugin)
Vue.use(FormInputPlugin)
Vue.use(FormDatepickerPlugin)
Vue.use(FormSelectPlugin)
Vue.use(TooltipPlugin)
Vue.use(AlertPlugin)

Vue.use(Editor)
Vue.use(VueSimpleMarkdown)

Vue.filter('date', dateFilter)
Vue.filter('status', statusFilter)

firebase.initializeApp(firebaseConfig)

let app = null

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
