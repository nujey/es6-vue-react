<template>
  <div class="box">
    <div>
      姓名: <input class="input" type="text" placeholder="请输入姓名">
    </div>
    <div>
      语文: <input class="input" type="text" placeholder="请输入语文成绩">
    </div>
    <div>
      数学: <input class="input" type="text" placeholder="请输入数学成绩">
    </div>
    <div>
      英语: <input class="input" type="text" placeholder="请输入英语成绩">
    </div>
    <input type="button" value="提交成绩">
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
.box {
  display: flex;
  flex-direction: column;
  border: 1px solid #000;
  justify-content: center;
  align-items: center;
  & > div {
    margin: 10px;
  }
  .input { border: 1px solid #000;}
  input[type="button"] {
    width: 100px;
    border: 1px solid #38adff;
    background: #38adff;
    color: #fff;
    font-size: 20px;
    margin-bottom: 10px;
  }
}
</style>

