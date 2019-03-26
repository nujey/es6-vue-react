<template>
  <div>
    <slot name="header">我是一个头部slot</slot>
     <div></div>
     <slot name="footer">我是默认的一个底部slot</slot>
  </div>
</template>

<script>
export default {
  created() {
    // console.log(this.$slots)
  }
}
</script>

