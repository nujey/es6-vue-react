<template>
  <div class="loading" v-if="isShow">
    <i :class="icon"></i>
    <span>{{message}}</span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShow: false,
      icon: 'el-icon-loading',
      message: '加载中'
    }
  },
  methods: {
    showLoading(msg, callback) {
      this.message = msg
      this.isShow = true
      callback('我是一个回调')
    },
    hideLoading() {
      this.isShow = false
    }
  }
}
</script>

<style lang="less" scoped>
.loading {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0, 0, 0, .6);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  color: #fff;
  font-size: 20px;
}
</style> 

