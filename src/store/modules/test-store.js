// import { stat } from "fs";

/**
 * 测试store的更深层次用法
 * author nujey
 */

const DETAILDATA = 'DETAILDATA' // 详情对象
const COMMONSTROE = 'COMMONSTROE' // 子数组

const testStore = {
  state: {
    detailData: {},
    commonStore: {}
  },
  actions: {
    setDatailData(context, {}){
      return new Promise((resolve, reject) => {
        const data = {
          name: 'testStore',
          list: [{id: 1, item: '第一个'}, {id: 2, item: '第二个'}, {id: 2, item: ''}]
        }
        setTimeout(() => {
          context.commit('DETAILDATA', data)
        }, 2000)
      })
    },
    async asyncCommonStore({commit}, obj) {
      return new Promise((resolve, reject) => {
        const { text: txt } = obj
        if (txt !== '') {
          setTimeout(() => {
            commit('COMMONSTROE', {res: txt})
          }, 5000)
          resolve('测试store成功')
        } else {
          commit('COMMONSTROE', {res: '测试失败'})
          reject('测试store失败')
        }
      })
    },
    async asyncTestStore({ dispatch, commit }) {
      await dispatch('asyncCommonStore', {text: '测试async'})
      commit('DETAILDATA', {text: 'await之后的操作'})
    }
  },
  mutations: {
    [DETAILDATA](state, data) {
      state.detailData = data
    },
    [COMMONSTROE](state, commonObj) {
      state.commonStore.text = commonObj.res
    }
  }
}

export default testStore
