<template>
  <div>
    <h2 class="h1">sass练习路由页面1</h2>
    <div id="extend-test"></div>
    <!-- <input type="button"  value="按钮" v-focus:arg.bar="{ color: '#ff0', fontSize: '24px'}"/> -->
    <input type="text" placeholder="自动聚焦的自定义指令" v-focus:arg.foo="'text'">

    <input type="button"  value="按钮" v-focus:arg.bar="{ color: '#f00', fontSize: '24'}"/>
    <span v-focus:arg.bar="{ color: '#0f0', fontSize: '48'}">12</span>
    <p @click="handleApp">添加</p>
    <span v-for="(item, index) in list" :key="index"> ～{{item.name}}</span>
  </div>
</template>
<script>
import { mixinDemo } from '../../mixins/mixinDemo.js'
export default {
  mixins: [mixinDemo],
  data() {
    return {
      testFilter: 1,
      list: [1]
    }
  },
  created() {
    const date = new Date()
    console.log(new Date().getMonth())
    const d = new Date(new Date().getFullYear().toString())

    Math.ceil(( new Date() - new Date(new Date().getFullYear().toString()))/(24*60*60*1000))+1;
  },
  methods: {
    
  }
}
</script>

<style lang="scss" scoped>
  $h-color: #f0f;
  @mixin rounde-radius($width, $height, $h-color, $border-color, $radius) {
    width: $width;
    height: $height;
    color: $h-color;
    border: 1px solid $border-color;
    border-radius: $radius;
    margin: 20px;
  }
  .h1 {
    @include rounde-radius(200px, 30px, green, red, 5px)
  }
  .h2 {
    @include rounde-radius(300px, 40px, gray, green, 0px)
  }
  .h3 {
    @include rounde-radius(400px, 50px, black, green, 0px)
  }
  .h4 {
    @include rounde-radius(500px, 40px, #ff0, #f67, 6px)
  }
  .h5 {
    @include rounde-radius(600px, 30px, #0ff, #78f, 8px)
  }
  .test-extend {
    @extend .h5
  }
</style>
