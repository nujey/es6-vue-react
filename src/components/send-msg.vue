<template>
  <div :class="['send-msg', isClick === '2' ? 'send-ok' : '']" @click="handleClick">
    <span>{{sendText}}</span>
    <div class="send-clicked" v-if="isClick === '1'"></div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    secondNum: {
      type: Number,
      default: 60
    },
    sendIsSuccess: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      sendText: '发送验证码',
      isClick: '0',
      timer: null
    }
  },
  watch: {
    sendIsSuccess(newVal, oldVal) {
      this.isClick = newVal === true ? '2' : '0'
      if (this.isClick === '2') {
        this.timeStep(this.secondNum)
      }
    }
  },
  methods: {
    handleClick: function() {
      if (this.isClick === '2') return false
      this.isClick = '1'
      clearInterval(this.timer)
      setTimeout(() => {
        this.$emit('send-start')
      }, 200)
    },
    timeStep: function(num) {
      if (num < 1) return false
      let that = this
      that.sendText = num + 's'
      this.timer = setInterval(function() {
        num--
        that.sendText = num + 's'
        if (num < 1) {
          clearInterval(that.timer)
          that.isClick = '0'
          that.sendText = '重新发送'
          that.$emit('send-end')
          return false
        }
      }, 1000)
    }
  }
}
</script>

<style scoped>
.send-msg {
  width: 76px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 100px;
  font-size: 12px;
  color: #fff;
  background: #38adff;
  position: relative;
}
.send-clicked {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: #000;
  border-radius: 100px;
  opacity: 0.1;
}
.send-ok {
  opacity: 0.4;
}
</style>
