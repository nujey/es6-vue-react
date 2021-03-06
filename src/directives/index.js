import Vue from 'vue'
import store from '../store'
import { testDirect, toast } from './test-direct'

Vue.directive('test-direct', testDirect)
Vue.directive('toast', toast)
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
    // console.log(el, binding, vnode)
    // el.style.fontSize = binding.value.fontSize
  },
  inserted: function(el, binding) {
    el.focus()
    el.style.color = binding.value.color
    el.style.fontSize = binding.value.fontSize + 'px'
    el.placeholder = '测试一下默认值'
  },
  update: function(el, binding, oldValue) {
    console.log(oldValue)
    // el.style.fontSize = binding.value.fontSize
  }
})


// 当然 我们是可以支持简写的
// 当我们的bind和update需要表现的形式相同的时候，我们可以直接使用函数
Vue.directive('simple', function(el, binding){
  console.log(el, binding)
})

// 指令学习
Vue.directive('study', {
  // 指令第一次绑定到元素
  bind: function(el, binding, vnode) {
    console.log(el)
    console.log(binding)
    el.style.color = binding.value.color
  },
  // 被绑定的元素插入父节点时调用
  inserted: function(el, binding) {
    el.style.position = 'absolute'
    el.style[binding.value.arg] = binding.value.distance + 'px'
  },
  // 所在组件的vnode更新时调用
  update: function(binding) {
    console.log(binding)
  },
  // 指令所在组件的vnode及其子vnode更新后调用
  componentUpdated: function (param) {
    console.log(param)
  },
  // 只调用一次 指令与元素解绑的时候调用
  unbind: function (param) {
    console.log(param)
    param.style.color = 'blue'
  }
})
