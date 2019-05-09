<template>
  <div>
    <span class="scoped_child">the refs of child test-reader</span>
    <!-- <send-msg></send-msg> -->
    <el-button type="primary" @click="handleClick">点击</el-button>
  </div>
</template>
<script type="text/bable">
export default {
  created() {
    
  },
  methods: {
    handleConsoleRef: function () {
      console.log('ref is successful of child')
      console.log(this)
    },
    handleClick: function() {
      this.$loadingself('小r很努力的在加载了', {
        icon: 'el-icon-more',
        success: (res) => {
          console.log(res)
        }
      })

      setTimeout(() => {
        this.$loadingself.hide()
      }, 2000)
    }
  }
}
</script>

<style>

</style>

