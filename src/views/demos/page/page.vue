<template>
  <div>
    <nujey-el-page :total="pageInfo.total"
              :pageSize="pageInfo.pageSize"
              :currentPage="pageInfo.currentPage"
              @on-change="handleChange"></nujey-el-page>
    <el-button type="primary" @click="handleexport">导出</el-button>
    <el-table :data="list" border id="out-table">
      <el-table-column prop="id" label="编号"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
      <el-table-column prop="desc" label="描述"></el-table-column>
    </el-table>

    <!-- <el-button type="primary" @click="handleImport">导入</el-button> -->
    <input type="file" @change="handleImport">
  </div>
</template>

<script>
import fileSaver from 'file-saver'
import XLSX from 'xlsx'

export default {
  data() {
    return {
      pageInfo: {
        total: 200,
        pageSize: 10,
        currentPage: 1
      },
      list: [{
        id: 1,
        name: '第一名',
        age: 10,
        desc: '622253562762536382'
      }, {
        id: 2,
        name: '第二名',
        age: 13,
        desc: '622253562762536382'
      }, {
        id: 3,
        name: '第三名',
        age: 16,
        desc: '622253562762536382'
      }, {
        id: 4,
        name: '第四名',
        age: 18,
        desc: '622253562762536382'
      }],
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
        return item;
      }, []);
    },
    handleExcel() {
      var wb = XLSX.utils.table_to_book(document.querySelector('#out-table'))
      var wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array'})
      fileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), 'test.xlsx')
      return wbout
    },
    handleexport() {
      this.handleExcel()
    },
    handleImport(event) {
      console.log(event.files[0])
    }
  }
}
</script>

