import Vue from 'vue'
import Router from 'vue-router'
const category = () => import('views/category/category.vue');
const home = () => import('views/home/home.vue');
const shopcart = () => import('views/shopcart/shopcart.vue');
const profile = () => import('views/profile/profile.vue');
const detail = () => import('views/detail/detail.vue');



// const originalPush = Router.prototype.push;
// //修改原型对象中的push方法
// Router.prototype.push= function push(location) {
//   return originalPush.call(this, location).catch(err => err)
// };

Vue.use(Router)

const router =  new Router({
  linkActiveClass: 'active',
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/category',
      name: 'category',
      component: category
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      component: shopcart
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    }
  ]
})



export default router
