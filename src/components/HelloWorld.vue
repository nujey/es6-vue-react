<template>
  <div></div>
</template>

<script>
import * as ite from './iterator/iterator.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: ''
    }
  },
  created() {
    const it = ite.iterator.makeIterator(['a', 'b', 'c'])
    it.next() // a
    it.next() // b
    let array = [{
      name: 'name1',
      age: 1
    }, {
      name: 'name2',
      age: 2
    }]
    let iter = array[Symbol.iterator]()
    iter.next()
    iter.next()

    let str = new String('我是一个新的测试字符串')
    for(let item of [...str]) {
      console.log(item, 1)
    }
    const obj = {}
    obj[Symbol.iterator] = [...str][Symbol.iterator].bind(array)

    for(let item of obj) {
      console.log(item, 2)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
