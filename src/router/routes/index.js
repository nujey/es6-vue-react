
export default [
  {
    path: '/',
    meta: {
      layout: true,
      title: '首页'
    },
    component: () => import('../../views/file/index.vue'),
    children: [{
      name: 'face-check',
      path: 'face-check',
      meta: {
        title: '人脸认证',
        layout: true
      },
      component: () => import('../../views/file/face-check.vue')
    }, {
      name: 'xifu',
      path: 'xifu',
      meta: {
        title: '媳妇flex',
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
    }]
  }
]