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
        // component: resolve => require(['../../views/demos/page/page'], resolve),
      }
    ]
  }
]
