module.exports = function(file) {
  return () => import(file + '.vue')
}