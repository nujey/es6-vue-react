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
    // console.log(Object.getOwnPropertySymbols(a))    
    const obj2 = {
      a: 'a',
      b: 'b'
    }
    // for ...in 循环也是遍历不出 symbol类型的属性名
    for(let i in a) {
      // console.log(i)
    }

    Object.getOwnPropertyNames(a) // 遍历不出symbol类型 的属性名

    Reflect.ownKeys(a) // 这是一个新的API 可以反悔所有类型的键名

    let size = Symbol('size')
    class Collection {
      constructor() {
        this[size] = 0
      }

      add(item) {
        this[this[size]] = item
        this[size]++
      }
      static sizeOf(instance) {
        return instance[size]
      }
    }

    // symbol.for
    //重新使用symbol值
    let s1 = Symbol.for('foo')
    let s2 = Symbol.for('foo')

    console.log(s1 === s2)

    // 模块的singleton模式
    
  },
  methods: {
    test1(){},
    test2(){}
  }
}
</script>
