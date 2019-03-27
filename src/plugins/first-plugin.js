export default {
  // 第一个参数是 Vue构造器
  // 第二个参数是可选的选项对象
  install: function(Vue, options) {
    // 添加全局方法或者属性
    Vue.pluginGlobalProps = 'pluginGlobalProps'
    Vue.myGLobalMethod = function() {
      
    }
    var args = []
    // 添加全局资源 【指令】【过滤器】【过渡等等】
    Vue.directive('plugin-directive', {
      bind(el, binding, vnode, oldVnode) {
        if (binding.arg) {
          args.push(binding.arg)
          el.innerHTML = binding.arg + '测试参数'
        }
      },
      inserted(el) {
        console.log(args)
      },
      componentUpdated(binding) {
        console.log(binding, 'comp')
      },
      unbind(oldVnode) {
        args = []
        console.log(oldVnode.innerHTML)
      }
    })

    // 注入组件
    Vue.mixin({
      data() {
        return {}
      },
      created: function() {
        // 
      }
    })

    // 添加实例方法
    Vue.prototype.$firstPlugin = function(options) {
      // 
      alert(1)
    }
  }
}