import Vue from 'vue'

Vue.component('render-demo', {
  render: function(creteElement) {
    return creteElement(
      'h' + this.level,
      this.$slots.default
    )
  },
  props: {
    level: {
      type: Number,
      required
    }
  }
})
