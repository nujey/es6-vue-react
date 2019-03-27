<template>
  <div>
    <h3 style="text-align: center;">render函数与JSX</h3>
    <div id="test-render">
      <test-render v-for="(item, index) in titleList" :key="index" :level="item">
        <!-- <div name="header">我是一个小孩子</div> -->
      </test-render>
    </div>
    <!-- <test-slot>
      <p>测试一下</p>
    </test-slot> -->
    <hr/>
    <!-- <render-demo :level="1"></render-demo> -->
    <render-two v-for="(item, index) in titleList" :key="index" :item="item"></render-two>
    <func-render :item="1"></func-render>
  </div>
</template>

<script>
import testRender from './components/test-render.vue'
import testSlot from './components/test-slot'
import renderTwo from './components/render2'
import funcRender from './components/func-render'

export default {
  customOption: 'foo',
  data() {
    return {
      title: '测试的title',
      titleList: [1, 2]
    }
  },
  created() {
    // console.log(this.$parent)
  },
  components: { testRender, testSlot, renderTwo, funcRender }
}
</script>
