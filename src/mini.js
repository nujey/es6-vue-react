import Vue from 'vue'
import webApp from './web-app'
import router from './router'
import './components'
import './directives'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#web-app',
  router,
  store,
  components: { webApp },
  template: '<webApp/>'
})
