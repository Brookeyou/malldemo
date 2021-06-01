import Vue from 'vue'
import Router from 'vue-router'
const category = () => import('views/category/category.vue');
const home = () => import('views/home/home.vue');
const shopCart = () => import('views/shopcart/shopCart.vue');
const profile = () => import('views/profile/profile.vue');
const detail = () => import('views/detail/detail.vue');

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
      name: 'shopCart',
      component: shopCart
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
