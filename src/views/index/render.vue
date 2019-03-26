<template>
  <div>
    <h3 style="text-align: center;">render函数与JSX</h3>
    <div id="test-render">
      <test-render v-for="item in titleList" :level="item"></test-render>
    </div>
    <!-- <test-slot>
      <p>测试一下</p>
    </test-slot> -->
    <hr/>
    <!-- <render-demo :level="1"></render-demo> -->
    <render-two v-for="item in titleList" :item="item"></render-two>
  </div>
</template>

<script>
import testRender from './components/test-render.vue'
import testSlot from './components/test-slot'
import renderTwo from './components/render2'

export default {
  customOption: 'foo',
  data() {
    return {
      title: '测试的title',
      titleList: [1, 2]
    }
  },
  created() {
    console.log(this.$parent)
  },
  components: { testRender, testSlot, renderTwo }
}
</script>
