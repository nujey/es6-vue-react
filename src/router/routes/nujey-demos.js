export const nujeyDemos = [
  {
    path: '/demos',
    name: 'demos',
    meta: {
      title: 'nujey-demos',
      layout: true
    },
    component: () => import("../../views/demos/index.vue"),
    // component: resolve => require(['../../views/demos/index'], resolve),
    children: [
      {
        path: 'page',
        name: 'page',
        meta: {
          title: '分页',
          layout: true
        },
        component: () => import("../../views/demos/page/page.vue")
      },
      {
        path: 'symbol',
        name: 'symbol',
        meta: {
          layout: true
        },
        component: (resolve) => require(["../../views/demos/page/symbol.vue"], resolve)
        // component: () => import("../../views/demos/page/symbol.vue")
      },
      {
        path: 'object',
        name: 'object',
        meta: {
          layout: true
        },
        component: (resolve) => require(["../../views/demos/page/object.vue"], resolve)
        // component: () => import("../../views/demos/page/symbol.vue")
      },
      {
        path: 'common-store',
        name: 'common-store',
        meta: {
          title: '普通store',
          layout: true
        },
        component: (resolve) => require(["../../views/store/common-store/demo1.vue"], resolve)
      },
      {
        path: 'map-store',
        name: 'map-store',
        meta: {
          title: '普通store',
          layout: true
        },
        // component: (resolve) => require(["../../views/store/common-store/map-demo.vue"], resolve)
        component: r => require.ensure([], () => r(require('../../views/store/common-store/map-demo.vue')), 'store-map')
      }
    ]
  }
]
