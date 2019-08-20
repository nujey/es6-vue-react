import Vue from 'vue'
import xlsxExport from './xlsx-export.vue'

// Vue.component('xlsx-export', xlsxExport)
Vue.component('xlsx-export', () => import('./xlsx-export'))
Vue.component('send-msg', () => import('./send-msg.vue'))

Vue.component('blog-post', {
  // 在 JavaScript 中是 camelCase 的
  props: ['postTitle'],
  template: '<h3>{{ postTitle }}</h3>'
})