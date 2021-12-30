import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import store from './store'



Vue.use(Vuex)
Vue.config.productionTip = false



Vue.filter('splitNumber', function (value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
})

new Vue({
  render: h => h(App),
  store,
}).$mount('#app')
