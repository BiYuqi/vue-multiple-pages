import Vue from 'vue'
import App from './Test.vue'
import router from './router'

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
