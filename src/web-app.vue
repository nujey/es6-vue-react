<template>
  <div id="web-app">
    111111
    <button v-test-direct="'add'"></button>
    <div class="flex">
      <router-link :to="{name: 'raber', query: {id: '1'}}">{{xifuMSg}}</router-link>
      <router-link :to="{name: 'test-store'}" replace>nujey-test-store</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// import iterator from './components/HelloWorld'
import { mapMutations, mapActions } from 'vuex'

// import {default as de} from './views/ecma6/default.js' // === import de from './views/ecma6/default.js'

export default {
  name: 'webApp',
  data() {
    return {
      transitionName: 'slide-left',
      xifuMSg: 'raber',
      detail: {
        list: []
      }
    }
  },
  watch: {
    '$route'(to, from) {
      const toPath = to.path.split('/').length
      const fromPath = from.path.split('/').length
      this.transitionName = toPath < fromPath ? 'slide-right' : 'slide-left'
    }
  },
  computed: {
    test: function() {
      return this.$store.state.testText
    }
  },
  created() {
    // this.$router.replace({
    //   name: 'face-check'
    // })
    // mutation1
    this.$store.commit('DOG', {name: 'newDog'})
    // mutation2
    this.changeDogAge({ name: 2222 })

    this.$store.dispatch('updateDog')

    this.handleUpdateDog({name: '我是辅助函数定义的'})

    this.$store.dispatch('upDate')
    //getters
    // console.log(this.$store.getters.filterDog) // getter过滤过 返回的值
    this.$nextTick().then((msg) => {
      console.log(msg)
    })
    this.hanldeUpDateCat({name: '添加', code: '10010'})
  },
  methods: {
    ...mapMutations({
      changeDogAge: 'DOG'
    }),
    ...mapActions({
      handleUpdateDog: 'updateDog',
      hanldeUpDateCat: 'upDateCat'
    }),
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
.flex {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column-reverse;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  /* transform: translate3d(-100%, 0, 0); */
}
.slide-right-leave-active {
  opacity: 0;
  /* transform: translate3d(100%, 0, 0); */
}
.slide-left-enter {
  opacity: 0;
  /* transform: translate3d(100%, 0, 0); */
}
.slide-left-leave-active {
  opacity: 0;
  /* transform: translate3d(-100%, 0, 0); */
}
</style>
