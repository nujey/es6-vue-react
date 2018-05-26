let iterator = {
  name: 'iterator',
  makeIterator: function(params) {
    let current = 0
    return {
      next: function() {
        return current < params.length ?
          {value: params[current++], done: true} :
          {value: undefined, done: false}
      }
    }
  }
}
// 对象的iterator
class ObjectIterator {
  constructor(start, stop) {
    this.value = start
    this.stop = stop
  }
  [Symbol.iterator]() {
    return this
  }
  next() {
    var value = this.value
    if (value < this.value) {
      this.value++
      return {
        done: false,
        value: value
      }
    }
    return {
      done: true, value: undefined
    }
  }
}
function range(start, stop) {
  return new ObjectIterator(start, stop)
}
for (var value of range(0, 2)) {
  console.log(value)
}
export { iterator }