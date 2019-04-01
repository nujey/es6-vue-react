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
      [mySymbol]: ((i) => {return i + 'KKK'})(0)
    }

    Object.defineProperty(a, Symbol(), { value: 'PHP' })

    a[Symbol('a')] = 'Hello'
    a[Symbol('b')] = 'world'
    console.log(a)

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
    
  }
}
</script>
