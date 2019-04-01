let a1 = {
  i: 1,
  toString() {
    return a1.i++
  }
}
if (a1 == 1 && a1 == 2 & a1 == 3) {
  console.log('a1')
}

let a2 = {
  i: 1,
  valueOf() {
    return a2.i++
  },
  toString() {
    return a2.i + 3
  }
}
if (a2 == 1 && a2 == 2) {
  console.log(+a2)
}

let a3 = [1, 2, 3]
a3.toString = a3.shift
if(a3 == 1 && a3 == 2 && a3 == 3) {
  console.log('a3')
}

let a = {
  [Symbol.toPrimitive]: ((i) => () => ++i)(0)
}

Object.defineProperty(window, 'a', {
  get: function() {
    return this.value = this.value ? (this.value +=1 ) : 1
  }
})


