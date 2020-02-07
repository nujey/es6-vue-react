<template>
  <div>
    <div >{{text}}</div>
    <Child :foo="'foo'" :name.sync="text" @one.native="clickOne" @two="clickTwo"/>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Child from './child/child'
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
  components: { Child },
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
