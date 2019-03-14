<template>
  <div>
    <h3>测试store页面-----不需要辅助函数</h3>、
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  data() {
    return {
      detailData: {}
    }
  },
  created() {
    let arr1 = [{id: '1'}, {id: '2'}, {id: '3'}]
    let arr2 = [{id: '2'}]
    let arr = _.pullAllBy(arr1, arr2, 'id')
    console.log(arr, 1111)
  }
}
</script>

