import Vue from 'vue'
import App from './App.vue'
import store from "./commonjs/store"
import router from './router/index'

import Vuex from 'vuex'
Vue.use(Vuex)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
