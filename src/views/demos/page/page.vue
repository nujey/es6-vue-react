<template>
  <div>
    <nujey-el-page :total="pageInfo.total"
              :pageSize="pageInfo.pageSize"
              :currentPage="pageInfo.currentPage"
              @on-change="handleChange"></nujey-el-page>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageInfo: {
        total: 200,
        pageSize: 10,
        currentPage: 1
      },
      arr: [{id: 1, name: '1'}, {id: 2, name: '1'}, {id: 3, name: '2'}, {id: 4, name: '3'}, {id: 5, name: '3'}, {id: 5, name: '4'}]
    }
  },
  created() {
    this.arrReduce(this.arr, 'name')
  },
  methods: {
    handleChange: function(info) {
      this.pageInfo.pageSize = info.pageSize
      this.pageInfo.currentPage = info.currentPage
      console.log(this.pageInfo)
    },
    arrReduce: function(arr, name) {
      var hash = {};
      let temp = this.arr.reduce(function (item, next) {
        hash[next[name]] ? '' : hash[next[name]] = true && item.push(next);
        // if (hash[next[name]]) {
        //   console.log(hash[next[name]])
        // } else {
        //   hash[next[name]] = true
        //   item.push(next)
        // }
        return item;
      }, []);
    }
  }
}
</script>

