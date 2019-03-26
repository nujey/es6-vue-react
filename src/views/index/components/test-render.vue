
<script>
  import Vue from 'vue'
  Vue.component('test-render', {
    template: '#test-render',
    render(createElement) {
      return createElement(
        'h' + this.level,
        this.level
      )
    },
    props: {
      level: { type: Number, required: true }
    }
  })
</script>
