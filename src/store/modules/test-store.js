/**
 * 测试store的更深层次用法
 * author nujey
 */

const DETAILDATA = 'DETAILDATA' // 详情对象
const CHILDLIST = 'CHILDLIST' // 子数组

const testStore = {
  state: {
    detailData: {},
    childList: []
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
    }
  },
  mutations: {
    [DETAILDATA](state, data) {
      state.detailData = data
    }
  }
}

export default testStore