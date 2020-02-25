<template>
  <div>
    <p @click="handle">子组件</p>
    {{name}}
    <p>{{house}}~{{money}}</p>
  </div>
</template>

<script>
export default {
  props: [
    'name'
  ],
  inject: {
    house: {
      default: '没房'
    },
    money: { default: 0 }
  },
  created() {
    console.log(this)
    console.log(this.$attrs, this.$listeners)
  },
  methods: {
    handle() {
      // this.$emit('testEmit', 22222)
      this.$emit('update:name', '新的值啊')
      this.$listeners.two()
    }
  }
}
</script>

<style>

</style>