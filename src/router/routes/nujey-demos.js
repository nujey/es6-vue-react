export const nujeyDemos = [
  {
    path: '/demos',
    name: 'demos',
    meta: {
      title: 'nujey-demos',
      layout: true
    },
    component: () => import("../../views/demos/index.vue"),
    children: [
      {
        path: 'page',
        name: 'page',
        meta: {
          title: '1',
          layout: true
        },
        component: () => import("../../views/demos/page/page.vue")
      }
    ]
  }
]
