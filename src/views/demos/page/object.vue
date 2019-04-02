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
    console.log(Object.length)
    const c = Object.assign({}, a, b)
    console.log(Object.entries(c))
    console.log(Object.seal(a))

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
    console.log(obj)
  }
}
</script>
