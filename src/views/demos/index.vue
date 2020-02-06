<template>
  <div>
    <div >{{text}}</div>
    <Child :name.sync="text"/>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import Child from './child/child'
export default {
  data() {
    return {
      text: '1111'
    }
  },
  components: { Child },
  methods: {
    changeEmit(val) {
      this.text = val
    }
  }
}
</script>
