<script>
var comp1 = { /* */ }
var comp2 = { /* */ }
var comp3 = { /* */ }

export default {
  functional: true,
  render: function(createElement, context) {
    // context是组件的上下文传递参数
    function listComponent() {
      const item = context.item
      if (item === 0) return comp1
      if (typeof item === 'object') return comp2
      if (context.props.isOrdered) return comp3
    }
    return createElement(
      listComponent(),
      context.data,
      context.children
    )
  },
  props: {
    item: {
      type: Number,
      required: true
    },
    isOrdered: Boolean
  }
}
</script>
