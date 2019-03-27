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
  }
}
</script>

