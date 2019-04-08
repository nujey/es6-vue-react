import Vue from 'vue'
import loadingself from './loading/index'
import MyFirstPlugin from './first-plugin'
import Toast from './toast.js'

Vue.use(MyFirstPlugin)
Vue.use(Toast)

Vue.use(loadingself)
