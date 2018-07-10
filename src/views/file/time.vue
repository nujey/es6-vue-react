<template>
  <div></div>
</template>
<script>
export default {
  methods: {
    handleGetTime(n) {
      // 获取几天后的时间？
      let nowDate = new Date()
      const threeDay = nowDate.getTime() + 86400000 * n
      const nextDate = new Date(threeDay)
      const d = nextDate.getDate() > 10 ? nextDate.getDate() : '0' + nextDate.getDate()
    }
  }
}
</script>

