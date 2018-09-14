import { nujeyDemos } from './nujey-demos.js'
console.log(...nujeyDemos)
export default [
  {
    path: '/',
    meta: {
      layout: true,
      title: '首页'
    },
    component: () => import('../../views/file/index.vue'),
    children: [{
      name: 'raber',
      path: 'raber',
      meta: {
        title: 'raberflex',
        layout: true
      },
      component: () => import('../../views/file/xifu.vue')
    }, {
      name: 'file-reader',
      path: 'file-reader',
      meta: {
        title: 'filereader',
        layout: true
      },
      component: () => import('../../views/file/reader.vue')
    }, {
      name: 'sass',
      path: 'sass',
      meta: {
        title: 'sass',
        layout: true
      },
      component: () => import('../../views/index/sass.vue')
    }, {
      name: 'test-store',
      path: 'test-store',
      meta: {
        title: 'test-store',
        layout: true
      },
      component: () => import('../../views/file/test-store.vue')
    }]
  },
  ...nujeyDemos
]