/**
 * @file 狗狗模块
 */
 // 在这前面我们可以引入一些模块需要的包或者接口管理
 // 比如axios jsonp等 这里就不做累述

//  先来定义一个type
const DOG = 'DOG'

// 定义好我们的state
const dogState = {
  name: '狗狗',
  age: 17,
  friend: 'CC'
}
// 定义我们的mutation
const mutations = {
  /**
   * 更改姓名
   * @param {Object} state 状态管理对象
   * @param {Object} newDog 狗狗新名字
   */
  [DOG](state, newDog){
    console.log(state)
    state.name = newDog.name
  }
}

const actions = {
  /**
   * 请求数据来更新我嗯狗狗对象
   * @param {Object} context 上下文对象
   * @param {Object} dogHttp 请求到的狗狗对象数据
   * @return {Promise} - return一个promise实例
   */
  updateDog(context, dogHttp = {name: 'actionName dog'}) {
    context.commit('DOG', dogHttp)
    // return Promise.resolve()
    // return new Promise((resolve) => {
    //   return axios.post('/api/testdog', dogHttp.id).then((res) => {
    //     if (res.data) {
    //       context.commit('DOG', res.data)
    //       // 当然你也可以写更多的逻辑
    //       resolve(res.data)
    //     }
    //   })
    // })
  }
}


const getters = {
  // 定义一个过滤 返回true false 
  filterDog: dogState => {
    return dogState.name !== '狗狗'
  }
}

export default {
  state: {...dogState},
  mutations,
  actions,
  getters
}

