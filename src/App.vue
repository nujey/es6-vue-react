<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import iterator from './components/HelloWorld'
import { mapMutations, mapActions } from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      text: '11112222'
    }
  },
  computed: {
    test: function() {
      return this.$store.state.testText
    }
  },
  created() {
    this.$router.replace({
      name: 'face-check'
    })
    // mutation1
    this.$store.commit('DOG', {name: 'newDog'})
    // mutation2
    this.changeDogAge({ name: 2222 })

    this.$store.dispatch('updateDog')

    this.handleUpdateDog({name: '我是辅助函数定义的'})


    //getters
    console.log(this.$store.getters.filterDog) // getter过滤过 返回的值
  },
  methods: {
    ...mapMutations({
      changeDogAge: 'DOG'
    }),
    ...mapActions({
      handleUpdateDog: 'updateDog'
    })
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
</style>
