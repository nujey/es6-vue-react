<template>
  <div>
    <div><span style="color: #f00;">测试store</span>{{testStore}}</div>
  </div>
</template>
<script>
var testPromise = new Promise(function(resolve, reject){
  resolve('reslove')
})
export default {
  computed: {
    testStore() {
      return this.$store.state.testStore.commonStore.text
    }
  },
  created() {
    this.$store.dispatch('asyncTestStore', {text: ''})
  },
  methods: {
    handlePromise () {
      testPromise().then(res => {
        console.log(res)
      })
    }
  }
}
</script>
