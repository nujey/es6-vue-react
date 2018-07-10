<template>
  <div>
    <span class="scoped_child">the refs of child test-reader</span>
  </div>
</template>
<script type="text/bable">
export default {
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

