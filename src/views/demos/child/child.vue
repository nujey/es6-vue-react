<template>
  <div>
    <p @click="handle">子组件</p>
    {{name}}
  </div>
</template>

<script>
export default {
  props: [
    'name'
  ],
  methods: {
    handle() {
      this.$emit('testEmit', 22222)
      this.$emit('update:name', '新的值啊')
    }
  }
}
</script>

<style>

</style>