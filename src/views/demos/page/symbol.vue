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
    console.log(objSym)
  }
}
</script>
