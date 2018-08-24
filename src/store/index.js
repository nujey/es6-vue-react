import Vue from 'vue'
import Vuex from 'vuex'

// 引入狗狗的模块
import dog from './modules/dog'
import cat from './modules/cat'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    testText: '我就是测试一下啊'
  },
  modules: {
    dog,
    cat
  }
})

export default store