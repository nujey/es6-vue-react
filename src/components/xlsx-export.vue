<template>
  <div class="export">
    <div class="export__btn" @click="handleExport">导出</div>
  </div>
</template>

<script>
import fileSaver from 'file-saver'
import XLSX from 'xlsx'
export default {
  inheritAttrs: false,
  props: {
    exportName: {
      type: String,
      required: true,
      default: 'excel'
    },
    exportTag: {
      type: String,
      required: true,
      default: 'excel'
    }
  },
  data() {
    return {
      tagname: this.exportTag,
    }
  },
  methods: {
    handleExport() {
      const info = {}
      var wb = XLSX.utils.table_to_book(document.querySelector('#' + this.tagname))
      var wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array'})
      fileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), this.exportName + '.xlsx')
      info.msg = wb ? '导出成功' : '导出失败'
      this.$emit('on-export', info)
      return wb
    }
  }
}
</script>

<style scoped>
  .export {
    display: inline-block;
    width: 88px;
    height: 40px;
    line-height: 40px;
    background: #38adff;
    color: #fff;
    font-size: 16px;
    border-radius: 4px;
  }
  .export__btn {
    width: 100%;
    height: 100%;
  }
</style>

