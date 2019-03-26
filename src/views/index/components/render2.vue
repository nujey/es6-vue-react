
<script>
export default {
  render: function(h) {
    console.log(this.$slots)
    if (this.item > 1) {
      return h('h1', {
        style: {
          color: '#f00'
        }
      }, this.item)
    } else {
      return h('h6', {
        style: {
          color: '#f0f'
        }
      }, this.item)
    }
  },
  props: {
    item: {
      type: Number,
      required: true
    }
  }
}
</script>
