<template>
  <div>
    <span v-study:[{direction}].small="{color: 'red', fontSize: 20, distance: 20}"
          @click="handleClick">混入</span>

    <p v-my-haha="'yellow'">tttttt</p>
    {{obj.a}}
  </div>
</template>

<script>
import { MixinTest } from '../../../mixins/mixin-test'

export default {
  mixins: [MixinTest],
  data: () => {
    return {
      direction: 'top',
      obj: {a: 'aaaaa'}
    }
  },
  created() {
    this.minxinTest()
  },
  methods: {
    handleClick() {
      console.log(1111)
      this.direction = 'left'
    }
  }
}
</script>

<style>

</style>templete>