<template>
  <div>
    <span v-study:[{direction}].small="{color: 'red', fontSize: 20, distance: 20}"
          @click="handleClick">混入</span>

    <p v-my-haha="'red'">tttt11111tt</p>
    <!-- <div style="border: 1px solid #f00">
      <img src="../../../assets/111.png" width="300px" height="300px" style="object-fit: cover;" alt="">
    </div> -->
    <div class="father">
      <p class="left">111</p>
      <p class="right">222</p>
    </div>
    {{obj.a}} - {{mixinDataName}}
    <button @click="handleArr">过滤数组</button>
    <p v-for="item in list" :key="item">{{item}}</p>
    <button @click="clickArr">改变</button>
    <span v-for="item in mixinListFilter" :key="item">{{item}}</span>
    <span v-for="item in mixinList" :key="item + '1'">{{item}}</span>
  </div>
</template>

<script>
import { MixinTest } from '../../../mixins/mixin-test'
import { mapActions, mapMutations, mapGetters, mapState } from 'vuex'

export default {
  props: {
    arr: { default: ''}
  },
  mixins: [MixinTest],
  data: () => {
    return {
      direction: 'top',
      obj: {a: 'aaaaa'},
      list: ['a', 'b', 'c']
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
    },
    clickArr() {
      this.list[1] = 'cccc' // 无效
      this.$set(this.list, 1, 'ccccc') // 有效
      this.list.splice(1, 1, 'ffff') // 有效
    }
  }
}
</script>

<style>
  .father {
    border: 1px solid #00ff00;
    /* width: 300px; */
    height: 100px;
    /* float: left; */
    overflow: auto;
  }
  .left {
    width: 50px;height: 110px;
    border: 1px solid #333333;
    float: left;
  }
  .right {
    width: 60px;height: 60px;
    float: right;
    border: 1px solid #f4a033;
  }
  .clearfix::after {
    display: block;
    clear: both;
    content: '';
    /* visibility: hidden; */
    /* height: 0; */
  }
  .clearfix {
    /* zoom: 1; */
  }
  .clearboth {
    clear: both;
  }
</style>templete>