import { nujeyDemos } from './nujey-demos.js'
// const _import = require('./import')
const _import = (file) => {
  return () => import(`../../views/${file}.vue`)
}

const _import_one = (file) => {
  return (resolve) => require([`../../views/${file}.vue`], resolve)
}

// const _import_two = (file, groupName) => {
//   return r => require.ensure([], r(require(`../../views/${file}.vue`)), groupName)
// }

export default [
  {
    path: '/',
    meta: {
      layout: true,
      title: '首页'
    },
    component: _import('file/index'),
    children: [{
      name: 'raber',
      path: 'raber',
      meta: {
        title: 'raberflex',
        layout: true
      },
      component: () => import(/* webpackChunkName: "raber" */'../../views/file/xixi.vue')
    }, {
      name: 'file-reader',
      path: 'file-reader',
      meta: {
        title: 'filereader',
        layout: true
      },
      // component: (resolve) => require(['../../views/file/reader.vue'], resolve)
      component: _import_one('file/reader')
    }, {
      name: 'sass',
      path: 'sass',
      meta: {
        title: 'sass',
        layout: true
      },
      // component: () => import('../../views/index/sass.vue')
      component: r => require.ensure([], () => r(require('../../views/index/sass.vue')), 'sass-group')
    }, {
      name: 'test-store',
      path: 'test-store',
      meta: {
        title: 'test-store',
        layout: true
      },
      // component: () => import('../../views/file/test-store.vue')
      component: _import_one('file/test-store')
    }]
  },
  ...nujeyDemos
]