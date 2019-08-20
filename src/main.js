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

Vue.component('blog-post', {
  // 在 JavaScript 中是 camelCase 的
  props: ['postTitle'],
  template: '<h3>{{ postTitle }} 哈哈哈哈哈</h3>'
})

/* eslint-disable no-new */
new Vue({
  // el: '#app',
  router,
  store,
  // components: { App },
  // template: '<App/>'
  render: h => h(App)
}).$mount("#app")

// Vue.component('blog-post', {
//   // 在 JavaScript 中是 camelCase 的
//   props: ['postTitle'],
//   template: '<h3>{{ postTitle }}</h3>'
// })
