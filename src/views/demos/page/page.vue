<template>
  <div>
    <nujey-el-page :total="pageInfo.total"
              :pageSize="pageInfo.pageSize"
              :currentPage="pageInfo.currentPage"
              @on-change="handleChange"></nujey-el-page>
    <el-button type="primary" @click="handleexport">导出</el-button>
    <el-table :data="list2" border id="out-table">
      <el-table-column prop="编号" label="编号"></el-table-column>
      <el-table-column prop="姓名" label="姓名"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
      <el-table-column prop="desc" label="描述"></el-table-column>
    </el-table>

    <!-- <el-button type="primary" @click="handleImport">导入</el-button> -->
    <!-- <input type="file" @change="handleImport(this)"> -->
    <input ref="fileUpload" type="file" @change="handleImport"  accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
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
      }],
      xlsindex: 2,
      list2: [],
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
    handleImport(obj) {
      // console.log(obj)
      const that = this
      const fileUpload = this.$refs.fileUpload
      const fileCon = this.$refs.fileUpload.files[0]
      let rABS = false

      FileReader.prototype.readAsBinaryString = function(f) {
        let binary = ''
        let wb
        let reader = new FileReader()
        reader.onprogress = function() {
          console.log('正在上传')
        }
        reader.onload = function(e) {
          try {
            let bytes = new Uint8Array(reader.result)
            let length = bytes.byteLength
            for(var i = 0; i < length; i++) {
              binary += String.fromCharCode(bytes[i]);
            }
            if(rABS) {
              wb = XLSX.read(btoa(fixdata(binary)), {//手动转化
                type: 'base64'
              });
            } else {
              wb = XLSX.read(binary, {
                type: 'binary'
              });
            }
          } catch(e) {
            console.log('文件类型不正确')
            return
          }
          var fromTo = '';
          for (var sheet in wb.Sheets) {
            if (wb.Sheets.hasOwnProperty(sheet) && sheet.indexOf(that.xlsindex) !== -1) {
              fromTo = wb.Sheets[sheet]['!ref'];
              that.list2 = that.list2.concat(XLSX.utils.sheet_to_json(wb.Sheets[sheet]));
            }
          }
          console.log(that.list2);
          // that.list2 = that.list2.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));
        }
        reader.readAsArrayBuffer(f);
      }
      let reader = new FileReader()
      if (rABS) {
        reader.readAsArrayBuffer(fileCon)
      } else {
        reader.readAsBinaryString(fileCon)
      }
    }
  }
}
</script>

