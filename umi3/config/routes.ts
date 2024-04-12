export default [
  // {
  //   path: '/',
  //   component: '@/layouts/base-layouts',
  //   routes: [
  //     { path: '/login', component: '@/pages/login' },
  //     { path: '/register', component: '@/pages/register' },
  //     {
  //       path: '/goods',
  //       // wrappers: ["@/wrappers/auth"],
  //       component: '@/layouts/aside-layouts',
  //       routes: [
  //         { path: '/goods', component: '@/pages/goods' },
  //         { path: '/goods/:id', component: '@/pages/goods/goods-detail' },
  //         { path: '/goods/:id/comment', component: '@/pages/goods/comment' },
  //         { path: '/goods/:id/comment/:cid', component: '@/pages/goods/comment-detail' },
  //         // { path: '/register', component: '@/pages/register' },
  //       ],
  //     },
  //     // { path: '/', redirect: '/login' },
  //     { component: '@/pages/404' },
  //   ],
  // },

  {path: "/", component: "@/pages/index"},
  {path: "/dva", component: "@/pages/dva"},
  // {path: "/login", component: "@/pages/login"},
  // {path: "/register", component: "@/pages/register"},

  { component: '@/pages/404' },
];
