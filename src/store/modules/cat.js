import store from '../index'

const CAT = 'CAT'

const catState = {
  name: '',
  code: '10011'
}

const actions = {
  upDateCat(context, catData = {name: '默认的猫数据'}) {
    // catData = store.state.dog
    context.commit('CAT', catData)
  }
}

const mutations = {
  [CAT](state, newCat) {
    state.name = newCat.name
    state.code = newCat.code
  }
}

export default {
  state: {...catState},
  mutations,
  actions
}
