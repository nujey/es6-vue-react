import Vue from 'vue'
import Vuex from 'vuex'

// 引入狗狗的模块
import dog from './modules/dog'
import cat from './modules/cat'
import testStore from './modules/test-store'
import {mixinStore} from './modules/mixin'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    testText: '我就是测试一下啊'
  },
  modules: {
    dog,
    cat,
    testStore,
    mixinStore
  }
})

export default store