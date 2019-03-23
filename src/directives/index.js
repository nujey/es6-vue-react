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
    console.log(binding)
    var binding = {
      name: '指令名, 不包含v-',
      value: '指令的绑定值,相当于函数的参数',
      oldValue: '指令绑定的前一个值, 仅仅在update componentUpdated中使用',
      expression: '指令的表达式',
      arg: '传递给指令的参数 比如 v-test:arg',
      modifiliers: '一个包含修饰符的对象 比如 v-test.foo.bar 修饰符{foo: true, bar: true}'
    }

  },
  // 被绑定元素插入父节点的时候调用
  inserted: function() {
    console.log(2)
  },
  // 所在组件的VNode更新时调用
  update: function(oldVnode) {
    console.log(oldVnode)
  },
  // 组件的VNode及其子节点全部更新后调用
  componentUpdated: function(oldVnode) {
    console.log(oldVnode)
  },
  // 只调用一次 指令与元素解绑的时候调用
  unbind: function() {
    console.log(5)
  }
})

Vue.directive('focus', {
  bind: function(el, binding, vnode) {
    console.log(el, binding, vnode)
    // el.focus()
  },
  inserted: function(el) {
    el.focus()
    el.placeholder = '测试一下默认值'
  }
})
