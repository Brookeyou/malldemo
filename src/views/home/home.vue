<template>
  <div id="home">
    <navi-bar class="navi-bar">
      <div slot="mid">{{naviTitle}}</div>
    </navi-bar>
    <!-- <div style="float:left; width:300px">1</div> -->
    <!-- <div class="hSwiper" style="float:left; width:200px;"> offsetwidth根据div大小确定-->
    <div class="hSwiper">
      <home-swiper :banners="banners" ref="homeSwiper"></home-swiper>
    </div>
  </div>
</template>

<script>
import naviBar from 'components/common/navibar/naviBar'
import {multiData} from 'network/home'
import homeSwiper from 'views/home/childComp/homeSwiper'
export default {
  name:'home',
  data() {
    return {
      naviTitle: '购物街',
      banners: null,
      recommend: null,
        };
    },
  created() {
    multiData().then((res) => {
      console.log(res);
      this.banners = res.data.data.banner.list;
      console.log(this.banners);
      this.recommend = res.data.data.recommend.list;
    })
    },
  mounted() {

    },
  activated () {
    //this.$refs.homeSwiper.startTimer();
  },
  deactivated () {
    //this.$refs.homeSwiper.stopTimer();
  },
  methods: {

    },
  components: {
    naviBar,
    homeSwiper
  }
};
</script>

<style scoped>
  #home {
    height: 100vh;
  }
  .navi-bar {
    background-color: var(--color-tint);
    color: white;
  }
  .hSwiper {
    /* offsetWidth 取决于上级div 给定的长宽 */
    margin: 2px 2px;
  }

</style>
