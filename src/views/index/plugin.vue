<template>
  <div v-toast:top.foo="'左侧的提示'">插件的测试</div>
</template>

<script>
import Vue from 'vue'

export default {
  data() {
    return {
      arr1: [{id: 1, age: 20}],
      arr2: [{id: 2, age: 21}]
    }
  },
  created() {

    let params = {
      name: '张小鹿',
      title: 20,
      type: 'type1'
    }
    const { type, ...other } = params
    // console.log(type, ...other)

    // 这题考察的应该是类型的隐式转换,考引用类型在比较运算符时候,隐式转换会调用本类型toString或valueOf方法.
    // let a = {
    //   [Symbol.toPrimitive]: ((i) => () => ++i)(0)
    // }
    // console.log(+a, +a, +a) // 1， 2， 3

    // Object.defineProperty(window, 'a', {
    //   get: function() {
    //     return this.value = this.value ? (this.value +=1 ) : 1
    //   }
    // })
    // console.log(a)
    const symbol1 = Symbol()
    // console.log(typeof symbol1)
    const symbol2 = Symbol(42)
    // console.log(typeof symbol2)
  },
  mounted() {
    // console.log(this.$firstPlugin())
    this.$toast('我', {
      type: 'center',
      duration: 2000
    })
  }
}
</script>

<style lang="scss" >
.vue-toast {
  min-width: 100px;
  max-width: 300px;
  padding: 0px 10px;
  height: 20px;
  line-height: 25px;
  font-size: 14px; background: rgba($color: #000, $alpha: 0.7);
  text-align: center;
  color: #fff;
  position: fixed;
  left: 50%;
}
.toast-top {
  top: 20px;
}
.toast-bottom {
  bottom: 20px;
}
.toast-center {
  top: 50%;
}
</style>


