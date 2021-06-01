import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// 2、配置路由映射关系
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // 嵌套子路由，在父路由Home.vue文件中决定显示
    children: [
      {
        path: '/',
        // 重定向默认路径
        redirect: 'news'
      },
      {
        path: '/news',
        name: 'News',
        component: () => import('../components/HomeNews.vue')
      },
      {
        path: '/message',
        name: 'Message',
        component: () => import('../components/HomeMessage.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    // 动态路由 path: '/user/:userId'
    path: '/user/:userId',
    name: 'User',
    // 路由懒加载，打包时路由组件打包到单独的js文件中，用到时再加载，提升浏览器速度
    component: () => import('../components/User.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../components/Profile.vue')
  }
]
// 1、创建路由对象
const router = createRouter({
  routes,
  // 配置history路由
  history: createWebHistory(process.env.BASE_URL),
  
  // linkActiveClass属性修改被点击的router-link标签类名
  // 原始类为router-link-active、router-link-exact-active，修改只改变前者
  linkActiveClass: 'active',
  // 滚动行为:切换到新路由时，控制页面滚动到顶部或是保持现在的位置
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

// 导航守卫
router.beforeEach((to, from, next) => {
  console.log(to);
  console.log(from);
  next();
})
// 3、导出路由
export default router
