<template>
  <div id="home">
    <navi-bar class="navi-bar">
      <div slot="mid">{{naviTitle}}</div>
    </navi-bar>
    <tab-control v-show="showTabControl" :titles="titles" @itemClick="tabClick" class="tab-control-top"></tab-control>
    <!-- <div style="float:left; width:300px">1</div> -->
    <!-- <div class="hSwiper" style="float:left; width:200px;"> offsetwidth根据div大小确定-->
    <scroll @scrollEvent='scrollShow'
            @pullUpLoading='loadMore'
            :goodsPage="goodsPage"
            :pullUpLoad="true"
            ref='scroll'>
      <div>
        <div class="hSwiper">
          <home-swiper :banners="banners" ref="homeSwiper"></home-swiper>
        </div>
        <home-recommend :recommends="recommends"></home-recommend>
        <feature-view></feature-view>
        <tab-control :titles="titles" @itemClick="tabClick" class="tab-control-pos" ref="tabControl"></tab-control>
        <show-goods-list :goodsList="showGoodsList"></show-goods-list>
      </div>
    </scroll>
    <!-- <div class="fill">
    </div> -->
    <load-more-ani v-show="isShowLoadAni">
      <img src='~assets/img/common/loadmore.gif'>
    </load-more-ani>
    <scroll-top v-show="showScrollTop" @backTop="backScroll">
      <img src="~assets/img/common/top.png" alt="">
    </scroll-top>
  </div>
</template>

<script>
import naviBar from 'components/common/navibar/naviBar';
import scroll from 'components/common/scroll/scroll';
import homeSwiper from 'views/home/childComp/homeSwiper';
import homeRecommend from 'views/home/childComp/homeRecommend';
import featureView from 'views/home/childComp/featureView';
import tabControl from 'components/content/tabcontrol/tabControl';
import showGoodsList from 'views/home/childComp/showGoodsList';
import loadMoreAni from 'components/common/loadmoreani/loadMoreAni';
import scrollTop from 'components/common/scrolltop/scrollTop';
import {POP, NEW, SELL} from '@/common/const';
import {multiData, homeData} from 'network/home';
export default {
  name:'home',
  data() {
    return {
      naviTitle: '购物街',
      banners: null,
      recommends: null,
      titles: ['流行', '新款', '精选'],
      currentType: POP,
      goodsList: {
        'pop': {page: 1, list:[]},
        'new': {page: 1, list:[]},
        'sell': {page: 1, list:[]}
      },
      tabControlOffsetTop: 0,
      showTabControl: false,
      showScrollTop: false,
      isShowLoadAni: false,
        };
    },
  created() {
    multiData().then((res) => {
      // console.log(res);
      this.banners = res.data.data.banner.list;
      // console.log(this.banners);
      this.recommends = res.data.data.recommend.list;
    });
    this.getHomeData(POP);
    this.getHomeData(NEW);
    this.getHomeData(SELL);

  },
  mounted() {
    // this.$refs.scroll.refresh在赋值进方法时已经解析找到了相关的方法
    const refresh = this.debounce(this.$refs.scroll.refresh, 1000);
    this.$bus.$on('imageLoad', () => {
      //this.$refs.scroll.refresh();
      refresh();
    })
    },
  activated () {
    //this.$refs.homeSwiper.startTimer();
  },
  deactivated () {
    //this.$refs.homeSwiper.stopTimer();
  },
  methods: {
    debounce (func, time) {
      let timer = null;
      return (...args) => {
        if (timer) {clearTimeout(timer)};
        timer = setTimeout(() => {
          // func.apply(this, args);
          func(...args);
        }, time);
      }
    },
    debounceV2 (func, time) {
      let timer = null;
      return (...args) => {
        if (timer) {
          clearTimeout(timer);
        }
        timer = setTimeout(function () {
          // console.log(this.$refs.scroll.refresh);
          // console.log(func);
          func(...args)
        }, time);
      }
    },

    tabClick (index) {
      switch(index) {
        case 0:
          this.currentType = POP;
          break;
        case 1:
          this.currentType = NEW;
          break;
        case 2:
          this.currentType = SELL;
          break;
      }
    },
     scrollShow (position) {
       this.showTabControl = position.y < -this.tabControlOffsetTop;
       this.showScrollTop = position.y < -1800;
     },

     loadMore () {
       this.isShowLoadAni = true;
       this.getHomeData(this.currentType);
       setTimeout(() => {
         this.isShowLoadAni = false;
       }, 500)
     },

     backScroll () {
       this.$refs.scroll.backTop(0, 0, 500);
     },

    getHomeData (type) {
      homeData(type, this.goodsList[type].page).then((res) => {
        // console.log(res);
        const goodsList = res.data.data.list;
        this.goodsList[type].list.push(...goodsList);
        this.goodsList[type].page += 1;
        //console.log(this.goodsList[type].list);
        // console.log(this.goodsList[type].page);
        this.tabControlOffsetTop = this.$refs.tabControl.$el.offsetTop;
        // console.log(this.tabControlOffsetTop);
        this.$refs.scroll.finishPullUp();

      })
    }
    },
  computed: {
    showGoodsList () {
      return this.goodsList[this.currentType].list;
    },
    goodsPage () {
      return this.goodsList[this.currentType].page;
    }
  },
  components: {
    naviBar,
    scroll,
    homeSwiper,
    homeRecommend,
    featureView,
    tabControl,
    showGoodsList,
    loadMoreAni,
    scrollTop
  }
};
</script>


 <style scoped>
  #home {
    /* 影响子元素sticky */
    /* height: 100vh; */
    padding-top: 44px;
  }
  .navi-bar {
    background-color: var(--color-tint);
    color: white;
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    z-index: 6;
  }
  .hSwiper {
    /* offsetWidth 取决于上级div 给定的长宽 */
    margin: 2px 2px 0px 2px;
  }
  .fill {
    height: 50px;
  }
  .tab-control-pos {
    /* position: sticky;
    top: 44px; */
    background-color: white;
    /* z-index: 5; */
  }
  .tab-control-top {
    position: fixed;
    top: 44px;
    left: 0;
    right: 0;
    z-index: 5;
    background-color: white;
  }
</style>
