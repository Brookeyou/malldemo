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
    <home-recommend :recommends="recommends"></home-recommend>
    <feature-view></feature-view>
    <tab-control :titles="titles" @itemClick="tabClick" class="tab-control-pos"></tab-control>
    <div>
      <show-goods-list :goodsList="showGoodsList"></show-goods-list>
    </div>
    <div class="fill">
    </div>
  </div>
</template>

<script>
import naviBar from 'components/common/navibar/naviBar';
import {multiData, homeData} from 'network/home';
import homeSwiper from 'views/home/childComp/homeSwiper';
import homeRecommend from 'views/home/childComp/homeRecommend';
import featureView from 'views/home/childComp/featureView';
import tabControl from 'components/content/tabcontrol/tabControl';
import showGoodsList from 'views/home/childComp/showGoodsList'
import {POP, NEW, SELL} from '@/common/const'
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
      }
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

    },
  activated () {
    //this.$refs.homeSwiper.startTimer();
  },
  deactivated () {
    //this.$refs.homeSwiper.stopTimer();
  },
  methods: {
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
    getHomeData (type) {
      homeData(type, this.goodsList[type].page).then((res) => {
        // console.log(res);
        const goodsList = res.data.data.list;
        this.goodsList[type].list.push(...goodsList);
        this.goodsList[type].page += 1;
        //console.log(this.goodsList[type].list);
        // console.log(this.goodsList[type].page);
      })
    }
    },
  computed: {
    showGoodsList () {
      return this.goodsList[this.currentType].list
    }
  },
  components: {
    naviBar,
    homeSwiper,
    homeRecommend,
    featureView,
    tabControl,
    showGoodsList
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
    position: sticky;
    top: 44px;
    background-color: white;
    z-index: 5;
  }
</style>
