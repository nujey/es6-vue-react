import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)
const router = new Router({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  // console.log(to)
  if (to.meta.layout) {
    document.title = to.query.title || to.meta.title || '随缘'
  } else {
    // to.name = '404'
  }
  next()
})

export default router
