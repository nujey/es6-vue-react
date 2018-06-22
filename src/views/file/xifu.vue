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
  </div>
</template>
<script>
  export default ({
    data() {
      return {
        text: 'typescript'
      }
    },
    created() {
      console.log(this.$router)
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
