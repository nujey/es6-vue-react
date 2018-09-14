<template>
  <div>
    <nujey-vc :total="pageInfo.total"
              :pageSize="pageInfo.pageSize"
              :currentPage="pageInfo.currentPage"
              @on-change="handleChange"></nujey-vc>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageInfo: {
        total: 100,
        pageSize: 10,
        currentPage: 1
      }
    }
  },
  methods: {
    handleChange: function(info) {
      this.pageInfo.pageSize = info.pageSize
      this.pageInfo.currentPage = info.currentPage
      console.log(this.pageInfo)
    }
  }
}
</script>

