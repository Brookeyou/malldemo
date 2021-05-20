<template>
<div>
  <tab-bar>
      <!-- <tabBarItem></tabBarItem> -->
      <tab-bar-item v-for="(item,index) in tabBarData" :key="index" :path="item.path" :color="item.color">
        <img slot="tabBarIconDe" :src="item.srcDe" alt="">
        <img slot="tabBarIcon" :src="item.src" alt="">
        <div slot="tabBarText">{{item.name}}</div>
      </tab-bar-item>
    </tab-bar>
</div>
</template>

<script>
import tabBar from 'components/common/tabbar/tabBar'
import tabBarItem from 'components/common/tabbar/tabBarItem'
export default {
  name: 'mainTabBar',
  data () {
    return {
      // srcDe应用了别名，模板直接使用要加~
      tabBarData: [
        {name: '首页', color: 'deeppink', path: '/home', srcDe: require('assets/img/tabbar/home-deactivate.svg'), src: require('assets/img/tabbar/home-activate.svg')},
        {name: '分类', color: 'deeppink', path: '/category', srcDe: require('assets/img/tabbar/category-deactivate.svg'), src: require('assets/img/tabbar/category-activate.svg')},
        {name: '购物车', color: 'deeppink', path: '/shopcart', srcDe: require('assets/img/tabbar/shopcart-deactivate.svg'), src: require('assets/img/tabbar/shopcart-activate.svg')},
        {name: '我的',  color: 'deeppink', path: '/profile' , srcDe: require('assets/img/tabbar/profile-deactivate.svg'), src: require('assets/img/tabbar/profile-activate.svg')}
      ]
    }
  },
  components: {
    tabBar,
    tabBarItem
  }
}
</script>

<style>

</style>
