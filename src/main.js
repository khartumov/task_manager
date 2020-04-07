import Vue from 'vue'
import router from './router'

import App from './App.vue'
import store from './store'
import './registerServiceWorker'
import {
  LayoutPlugin,
  IconsPlugin,
  FormGroupPlugin,
  FormInputPlugin,
  FormDatepickerPlugin,
  FormSelectPlugin,
  TooltipPlugin
} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.use(LayoutPlugin)
Vue.use(IconsPlugin)
Vue.use(FormGroupPlugin)
Vue.use(FormInputPlugin)
Vue.use(FormDatepickerPlugin)
Vue.use(FormSelectPlugin)
Vue.use(TooltipPlugin)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
