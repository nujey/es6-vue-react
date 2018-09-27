<template>
  <div>
    <div class="header-wrap">
      <span class="extend-icon"></span><span>返回</span>
      <h1 @click="showStatus = !showStatus">I Love U</h1>
    </div>
    <transition name="fade">
      <div v-if="showStatus">我就是测试一下过渡效果</div>
    </transition>


    <div class="scoped_father">
      <hild ref="childref"></hild>
    </div>

    <div>
      <p ref="myWidth" v-show="status">{{text}}</p>
      <button @click="handleNext">获取元素高度</button>
      <hr/>
      <span>{{name}}</span>
      <span>{{age}}</span>
      <span>{{info.sex}}</span>
      <span>{{info.content}}</span>
    </div>
    <div class="search">
      <span class="search-icon"></span>
    </div>
  </div>
</template>
<script>
  import hild from './reader.vue'

  function * generatorTest() {
    let yieldArray = [1, 2, 3, 4, 5]
    for(let i = 0; i < yieldArray.length; i++) {
      if (i === 2) {
        yield console.log(i)
      }
    }
    return yieldArray
  }
  export default ({
    data() {
      return {
        calendarBar: '',
        showStatus: true,
        text: 'typescript',
        status: false,
        name: '张锋',
        age: '2',
        info: {
          content: '描述文字',
          ['a']: 'aaaaa'
        }
      }
    },
    components: {
      hild
    },
    created() {
      this.newProperty = 'hi'
      // let hello = generatorTest().next()
      const keyA = { cc: 1 }
      // this.info['v'] = 123
      this.$set(this.info, ['v'], 121)
      // console.log(this.info, 222)
    },
    mounted() {
      this.$refs.childref.handleConsoleRef()
    },
    methods: {
      handleNext: function() {
        this.$set(this.info, "sex", '男')
        this.status = true
        this.$nextTick().then(() => {
          this.text = this.$refs.myWidth.offsetWidth
        })
      }
    }
  })
</script>

<style scoped>
.father {
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  /* justify-content: flex-start; */
  align-items: center;
}
p {
  width: 30px;
  height: 30px;
  background: #f00;
  color: #000;
  margin: 5px;
  flex-grow: 5;
}
.header-wrap {
  position: relative;
  width: 100%;
  height: 56px;
  box-sizing: border-box;
  box-shadow: 0 1px 0 0 #999999;
}
.header-wrap>h1 {
  position: absolute;
  top: 0;
  width: 100%;
  text-align: center;
}
.conment-wrap {
  background: #888888;
  padding: 9px 0;
}
.params-item {
   display: flex;
   height: 40px;
   align-items: center;
}
.fade-enter-active, .fade-leave-active {
  transition: .8s;
  opacity: 0;
}
.fade-enter .fade-enter-to{
  transition: 1s;
  opacity: 1;
}
.scoped_father >>> .scoped_child {
  color: #f00
}
.scoped_father /deep/ .scoped_child {
  color: #f00
}
/* 搜索动画 */
.search {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, .6);
}
.search-icon {
  width: 100px;
  height: 103px;
  display: inline-block;
  position: absolute;
  left: 150px;
  top: 200px;
  background: url("../../assets/fangdajing.png") no-repeat 0 0;
  background-size: contain;
  animation: animateFirst 3s infinite;
}
@keyframes animateFirst {
  0% {
    left: 150px;
    top: 198px
  }
  20% {
    left: 148px;
    top: 198px
  }
  40% {
    left: 150px;
    top: 200px
  }
  60% {
    left: 153px;
    top: 202px
  }
  80% {
    left: 152px;
    top: 202px
  }
  100% {
    left: 150px;
    top: 198px
  }
}
</style>
