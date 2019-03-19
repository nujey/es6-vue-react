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


  // 除了el之外，其他参数都应该是只读的
  bind: function(el, binding, vnode) {
    // el: 指令所绑定的元素 可以直接操作DOM结构
    // binding 包含很多属性的对象
    // vnode Vue编译生成的虚拟节点
    console.log(1)
    var binding = {
      name: '指令名',
      value: '指令的绑定值',
      oldValue: '指令绑定的前一个值'
    }
  },
  // 被绑定元素插入父节点的时候调用
  inserted: function() {
    console.log(2)
  },
  // 所在组件的VNode更新时调用
  update: function(oldVnode) {
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