var Toast = {}

Toast.install = function(Vue) {
  // Vue.prototype.$msg = 'Hello World'
  // 添加全局方法
  Vue.prototype.$toast = (tips, options = { type: 'center', duration: 2000 }) => {
    // console.log(options)
    if (options) {
      options.defaultType = options.type
    }
    if (document.getElementsByClassName('vue-toast').length) return

    let toastTpl = Vue.extend({
      template: '<div class="vue-toast toast-' + options.type + '">'+ tips +'</div>'
    })
    let tpl = new toastTpl().$mount().$el;
    // console.log(tpl.offsetWidth, tpl.clientWidth)
    // tpl.style.marginLeft = - 100 / 2+ 'px'
    document.body.appendChild(tpl)

    setTimeout(function() {
      document.body.removeChild(tpl)
    }, options.duration)
  }
  // 用来展示在不同的位置
  ['bottom', 'top', 'center'].forEach(type => {
    Vue.prototype.$toast[type] = tips => Vue.prototype.$toast(tips, type)
  })
  Vue.mixin({
    created: function () {
      // console.log('plugin')
    }
  })
  Vue.directive('my-haha', {
    bind: function(el, binding) {
      // console.log(binding)
      el.style.color = binding.value
    }
  })
}

module.exports = Toast
