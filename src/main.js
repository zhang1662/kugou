import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'mint-ui/lib/style.css'
import './assets/reser.css'
import axios from 'axios'
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
