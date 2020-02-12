<template>
  <div>
    <span v-study:[{direction}].small="{color: 'red', fontSize: 20, distance: 20}"
          @click="handleClick">混入</span>

    <p v-my-haha="'yellow'">tttttt</p>
    <!-- <div style="border: 1px solid #f00">
      <img src="../../../assets/111.png" width="300px" height="300px" style="object-fit: cover;" alt="">
    </div> -->
    {{obj.a}} - {{mixinDataName}}
    <button @click="handleArr">过滤数组</button>
    <span v-for="item in mixinListFilter" :key="item">{{item}}</span>
    <span v-for="item in mixinList" :key="item + '1'">{{item}}</span>
  </div>
</template>

<script>
import { MixinTest } from '../../../mixins/mixin-test'
import { mapActions, mapMutations, mapGetters, mapState } from 'vuex'

export default {
  mixins: [MixinTest],
  data: () => {
    return {
      direction: 'top',
      obj: {a: 'aaaaa'}
    }
  },
  computed: {
    ...mapGetters([
      'mixinDataName',
      'mixinListFilter'
    ]),
    ...mapState({
      // 传字符串参数的话相当于 state => state.mixinList
      mixinList: state => state.mixinStore.mixinList
    })
  },
  created() {
    this.minxinTest()
  },
  methods: {
    ...mapActions([
      'getMixinData',
      'setMixinList'
    ]),
    ...mapMutations([
      'MIXINDATA'
    ]),
    handleClick() {
      this.direction = 'left'
      // this.getMixinData({name: 'mapAction-name'})
      this['MIXINDATA']({name: 'mapMutation-name'})
      console.log(this.mixinList)
    },
    handleArr() {
      this.setMixinList([3, 4, 5, 6])
    }
  }
}
</script>

<style>

</style>templete>