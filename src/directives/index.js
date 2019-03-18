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
Vue.directive('practice', {
  // 只调用一次，指令第一次绑定到元素的时候调用
  // 相当于可以进行一次性初始化设置
  bind: function(el, binding, vnode) {
    // 
    console.log(1)
  },
  // 被绑定元素插入父节点的时候调用
  inserted: function() {
    console.log(2)
  },
  // 所在组件的VNode更新时调用
  update: function() {
    console.log(1)
  },
  // 组件的VNode及其子节点全部更新后调用
  componentUpdated: function() {
    console.log(4)
  },
  // 只调用一次 指令与元素解绑的时候调用
  unbind: function() {
    console.log(5)
  }
})