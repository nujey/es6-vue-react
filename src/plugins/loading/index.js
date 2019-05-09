import Loading from './index.vue'

const loadingself = {}

loadingself.install = function(Vue, pluginOPtions = {}) {
  // 构造器
  const VueLoading = Vue.extend(Loading)
  let loading = null
  function $loading(tips, options = {}) {
    // 创建loading实例 并且挂载
    if (!loading) {
      loading = new VueLoading()
      loading.$mount()
      document.querySelector('#app').appendChild(loading.$el)
    }
    loading.icon = options.icon

    loading.showLoading(tips, options.success)
  }

  $loading.hide = () => {
    if(!loading) return
    loading.hideLoading()
  }
  Vue.prototype.$loadingself = $loading
}

export default loadingself
