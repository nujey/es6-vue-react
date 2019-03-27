var Toast = {}

Toast.install = function(Vue, options = {}) {
  // Vue.prototype.$msg = 'Hello World'
  options.duration = 2000
  options.defaultType = 'bottom'

  Vue.prototype.$toast = (tips, type) => {
    if (type) {
      options.defaultType = type
    }
    if (document.getElementsByClassName('vue-toast').length) return

    let toastTpl = Vue.extend({
      template: '<div class="vue-toast toast-' + type + '">'+ tips +'</div>'
    })
    let tpl = new toastTpl().$mount().$el;
    // console.log(tpl.offsetWidth, tpl.clientWidth)
    // tpl.style.marginLeft = - 100 / 2+ 'px'
    document.body.appendChild(tpl)

    setTimeout(function() {
      document.body.removeChild(tpl)
    }, 2000)
  }
  // 用来展示在不同的位置
  ['bottom', 'top', 'center'].forEach(type => {
    Vue.prototype.$toast[type] = tips => Vue.prototype.$toast(tips, type)
  })
}

module.exports = Toast
