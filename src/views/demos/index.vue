<template>
  <div>
    <!-- <div >{{text}}</div> -->
    <Child :foo="'foo'" :name.sync="text" @one.native="clickOne" @two="clickTwo"/>
    <!-- <router-view></router-view> -->
    <Mixin />
  </div>
</template>

<script>
import Child from './child/child'
import Mixin from './child/mixin'

export default {
  data() {
    return {
      text: '1111'
    }
  },
  provide: {
    house: '大别墅',
    money: 100000
  },
  components: { Child, Mixin },
  methods: {
    changeEmit(val) {
      this.text = val
    },
    clickOne() {
      console.log('click1')
    },
    clickTwo() {
      console.log('click2')
    }
  }
}
</script>
