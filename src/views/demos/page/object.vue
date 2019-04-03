<template>
  <div>object内置方法测试</div>
</template>

<script>
export default {
  created() {
    const a = {
      a: 1
    }
    const b = {
      b: 2
    }
    // console.log(Object.length)
    const c = Object.assign({}, a, b)
    // console.log(Object.entries(c))
    // console.log(Object.seal(a))

    var obj = {}
    Object.defineProperties(obj, {
      'a': {
        writable: true,
        value: 'aaa'
      },
      'b': {
        writable: false,
        value: 'bbb'
      }
    })
    
    // obj.b = 'bbbbbbb'
    Object.defineProperty(obj, 'a', {
      enumerable: false, // 置为true的时候，才能出现在枚举属性中
      configurable: false, // 该属性才能被改变，同时该属性能在对象上被删除
      writable: true,
      value: '测试'
    })
    Object.freeze(obj)
    // console.log(obj)
    Object.isFrozen(obj)

    let sealObj = { a: '1' }
    Object.seal(sealObj)
    sealObj.a = '2'
    // Object.defineProperty(obj, 'b', {
    //   writable: true,
    //   value: '测试'
    // })
    // delete sealObj.a
    // console.log(sealObj, 'aaaa')

    let getObjs = { a: 1, b: 2, c: 3}
    getObjs[Symbol('foo')] = 'symbol'
    console.log(getObjs)
    const arr = Object.getOwnPropertyNames(getObjs)
    console.log(arr)
    const arr1 = Object.getOwnPropertySymbols(getObjs)
    console.log(arr1)
    const d1 = Object.getOwnPropertyDescriptors(getObjs, "a")
    console.log(d1)

    var objEn = { a: 'a1', b: 'b1', c: 'c1' }
    console.log(Object.entries(objEn)) 
    const res = Object.fromEntries(Object.entries(objEn))
    console.log(res)
  }
}
</script>
