<template>
  <div v-toast:top.foo="'左侧的提示'">插件的测试</div>
</template>

<script>
import Vue from 'vue'

export default {
  created() {
    console.log(Vue.pluginGlobalProps)
  },
  mounted() {
    // console.log(this.$firstPlugin())
    this.$toast('我', 'center')
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


