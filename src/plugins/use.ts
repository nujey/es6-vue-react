import Vue from "vue";
import { type } from "os";

Vue.use = function (plugin: Function | Object) {
  const installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
  if (installedPlugins.indexOf(plugin) > -1) {
    // 同一个插件只会安装一次
    return this
  }
  // additional parameters
  //除了插件以外的其他参数 Vue.use(MyPlugin, { someOption: true })
  const args = toArray(arguments, 1)
  // install的第一个参数是Vue构造器，第二个参数是可选的选项对象
  if (typeof plugin.install === 'function') {
    plugin.install.apply(plugin, args)
  } else if (typeof plugin === 'function') {
    plugin.apply(null, args)
  }
  installedPlugins.push(plugin)
  return this
}


export function install(_Vue) {
  if (Vue && _Vue === Vue) {
    if(process.env.NODE_ENV !== 'production') {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once'
      )
    }
    return
  }
  Vue = _Vue
  applymixin(Vue)
}

// 测试一下子模块
