import Vue from 'vue'
import xlsxExport from './xlsx-export.vue'

// Vue.component('xlsx-export', xlsxExport)
Vue.component('xlsx-export', () => import('./xlsx-export'))
Vue.component('send-msg', () => import('./send-msg.vue'))