import Vue from 'vue'
import store from '../store'
import { testDirect } from './test-direct'

Vue.directive('test-direct', testDirect)
// Vue.directive('test', {
//   bind: function() {
//     console.log(store)
//   },
//   inserted: function() {
//     console.log(2)
//   },
//   update: function() {
//     console.log(3)
//   },
//   componentUpdated: function() {
//     console.log(4)
//   },
//   unbind: function() {
//     console.log(5)
//   }
//   // function(el, binding){
//   //   console.log(el, 'directive')
//   //   console.log(binding)
//   // }
// })