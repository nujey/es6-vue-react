import store from '../store/index'
// 输出很多的自定义指令
export const testDirect = {
  bind: (el, binding) => {
    el.innerHTML = store.state.cat.name
    if (binding.value === 'add' && store.state.cat.code === '10010') {
      el.style.display = 'block'
    } else {
      el.style.display = 'none'
    }
  }
}
export const testAdd = {

}

export const testDelete = {
  
}