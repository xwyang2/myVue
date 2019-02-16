import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import './assets/css/public.css'

import axios from './plugins/axios'
Vue.use(axios)

import store from './store'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')