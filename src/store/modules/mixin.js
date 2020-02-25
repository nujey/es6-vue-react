const MIXINDATA = 'MIXINDATA'
const MIXINLIST = 'MIXINLIST'

export const mixinStore = {
  state: {
    mixinData: {},
    mixinList: []
  },
  actions: {
    getMixinData(context, mixinData) {
      context.commit('MIXINDATA', mixinData)
    },
    setMixinList(context, list = [1, 2, 3]) {
      context.commit('MIXINLIST', list)
    }
  },
  mutations: {
    [MIXINDATA](state, payload) {
      state.mixinData = Object.assign({}, payload)
    },
    [MIXINLIST](state, list) {
      state.mixinList = list.slice(0)
    }
  },
  getters: {
    mixinDataName: state => {
      return state.mixinData.name ? state.mixinData.name : 'defaultName'
    },
    mixinListFilter: state => {
      return state.mixinList.filter((item, index) => index !== 2)
    }
  }
}
