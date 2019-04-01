<template>
  <div>
    <p>symbol</p>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {
    let s = Symbol('foo')
    // console.log(s) // Symbol(foo)

    const obj = {
      i: 'a',
      toString() {
        return 'abc'
      }
    }
    let objSym = Symbol(obj)
    // console.log(objSym) // abc

    let mySymbol = Symbol()

    let a = {
      aa: 'aa',
      [mySymbol]: ((i) => {return i + 'KKK'})(0)
    }

    Object.defineProperty(a, Symbol(), { value: 'PHP' })

    a[Symbol('a')] = 'Hello'
    a[Symbol('b')] = 'world'
    console.log(a)
    // 作为属性名的Symbol
    const COLOR_RED = Symbol()
    const COLOR_GREEN = Symbol()

    function testSymbol(color) {
      switch(color) {
        case COLOR_RED:
          console.log(COLOR_RED, 'COLOR_RED')
          return COLOR_RED;
        case COLOR_GREEN:
          console.log(COLOR_GREEN, 'COLOR_GREEN')
          return COLOR_GREEN;
        default:
          throw new Error('undefined color')
      }
    }

    testSymbol(COLOR_GREEN)

    // 消除魔术字符串，实际上就是把频繁出现的字符串变成变量
    const shapeType = {
      triangle: Symbol()
    }
    function testMagicStr (shape, options) {
      let res = 0
      switch(shape) {
        case shapeType.triangle:
          res = 0.5 + options.w + options.h
          break
        default:
          throw new Error('没有参数')
      }
      return res
    }
    // console.log(testMagicStr(shapeType.triangle, { w: 1, h: 2 }))

    // 属性名的遍历
    console.log(Object.getOwnPropertySymbols(a))    
  }
}
</script>
