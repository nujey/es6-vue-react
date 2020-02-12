import Vue from 'vue'

export const MixinTest = {
  data: function() {
    return {
      minxStr: '混入字符串1111',
      obj: {a: 'aaaa', b: 'bbbb'}
    }
  },
  methods: {
    minxinTest() {
      // console.log(this.minxStr)
      this.$store.dispatch('getMixinData', { name: 'mixin-store-name' })
    }
  }
}

Vue.mixin({
  created() {
    // console.log(this.$options)
  }
})
