// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './components'
import './directives'
import store from './store'
import './plugins'

import * as filters from './filters'

Object.keys(filters).forEach(item => {
  Vue.filter(item, filters[item])
})

import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import nujeyCp from 'nujey-cp'

Vue.use(nujeyCp)
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
