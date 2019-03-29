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
let options = {}
export const toast = {
  bind: (el, binding) => {
    // // // // // console.log(binding)
    options.direction = binding.arg
  },
  inserted: (el, binding) => {
    options.tips = binding.value ? binding.value : '默认toast'
    const DIV = document.createElement('div')
    DIV.innerHTML = options.tips
    DIV.style.position = 'absolute'
    DIV.style.left = 100 + 'px'
    DIV.style[options.direction] = 100 + 'px'
    document.querySelector('body').appendChild(DIV)
  },
  componentUpdated: (oldVnode) => {
    console.log(oldVnode)
  }
}

export const testDelete = {
  
}