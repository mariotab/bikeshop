// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue/dist/vue.js'
import App from './App'
import store from './store'
import router from './router'
import axios from './backend/vue-axios'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import navbar from './components/navBar.vue'
import vfooter from './components/footer.vue'
Vue.component('vfooter', vfooter,)
Vue.component('navbar', navbar)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  axios,
  template: '<App/>',
  components: { App }
})
 