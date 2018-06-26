<template>
  <div>
    <div class="header-wrap">
      <span class="extend-icon"></span><span>返回</span>
      <h1>I Love U</h1>
    </div>
    <div class="conment-wrap">
      <div class="father">
        <p>2</p>
        <p>4</p>
        <p>3</p>
        <p>1</p>
      </div>
    </div>
    <div>
      <p ref="myWidth" v-show="status">{{text}}</p>
      <!-- <span>{{testMsg}}</span> -->
      <button @click="handleNext">获取元素高度</button>
      <hr/>
      <span>{{name}}</span>
      <span>{{age}}</span>
      <span>{{info.sex}}</span>
      <span>{{info.content}}</span>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  export default ({
    data() {
      return {
        text: 'typescript',
        status: false,
        name: '张锋',
        age: '2',
        info: {
          content: '描述文字'
        }
      }
    },
    created() {
      // this.sex = '男'
      
      console.log(this.$data)
      this.newProperty = 'hi'
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
.header-wrap>span {

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
</style>
