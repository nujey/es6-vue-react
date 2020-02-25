function jsonp(url, fn) {
  console.log(111)

  window['__jp0'] = function(url) {
    console.log(222222)
    fn(url)
  }
}
