<template>
  <div>
    <span class="scoped_child">the refs of child test-reader</span>
    <!-- <send-msg></send-msg> -->
  </div>
</template>
<script type="text/bable">
export default {
  created() {
    this.$loadingself('加载中')
  },
  methods: {
    handleConsoleRef: function () {
      console.log('ref is successful of child')
      console.log(this)
    }
  }
}
</script>

<style>

</style>

