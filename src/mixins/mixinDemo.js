// var moment = require('moment')

// console.log(moment)
export var mixinDemo = {
  data() {
    return {
      mixins: '我是mixins'
    }
  },
  created() {
    console.log(this.mixins)
  },
  methods: {
    handleApp: function() {
      this.list.push({name: 1234})
      console.log(this.list)
    }
  }
}
