
<script>
  // Vue.component('test-render', {
  //   template: '#test-render',
  //   render(createElement) {
  //     return createElement(
  //       'h' + this.level,
  //       this.level
  //     )
  //   },
  //   props: {
  //     level: { type: Number, required: true }
  //   }
  // })
  import testSlot from './test-slot.vue'

  export default {
    render: function(createElement) {
      // 如果是多个组件的时候
      let children = []
      // 后面的this.$slots.default 如果组件中有用到slot的时候，就是必须要带的
      children.push(createElement(testSlot, {
        'class': {
          'child-class-slot': true
        },
        style: {
          color: '#38adff'
        },
        attrs: {
          id: 'child-slot' + this.level
        },
        props: {
          childProps: 'childProps'
        },
        domProps: {
          innerHTML: this.childProps
        },
        on: {
          click: function() {
            console.log(this.childProps)
          }
        },
        nativeOn: {
          // click: this.handleClick
        }
      }, this.$slots.default))
      return createElement(
        'h' + this.level,
        {
          'class': {
            testClass: true,
            falseClass: false
          },
        },
        children
      )
    },
    props: {
      level: { type: Number, required: true}
    },
    methods: {
      handleClick: function() {
        console.log('nativeOn')
      }
    }
  }
</script>
