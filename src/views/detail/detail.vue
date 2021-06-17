<template>
  <div id="detail"  :key="refreshIndex">
    <detail-navi-bar class="detail-navi-bar" @naviBarIndex="detailScrollTo"
                     :scrollCurrentIndex="scrollIndex"></detail-navi-bar>
    <scroll ref="scroll"
            @scrollEvent="showScroll">
      <div>
        <detail-swiper :swiperImages="swiperImages" ref="detailSwiper"></detail-swiper>
        <base-goods-info :baseGoodsInfos="baseGoods"></base-goods-info>
        <shop-info :shopInfo="shopInfo"></shop-info>
        <detail-info :detailInfo="detailInfo" @detailImageLoad="detailImageRefresh"></detail-info>
        <item-params :itemParams="itemParams" ref="itemParams"></item-params>
        <user-comment :userComment="userComment" ref="userComment"></user-comment>
        <recommend-goods :recommendGoods="recommendGoods" ref="recommendGoods"></recommend-goods>
      </div>
    </scroll>
    <scroll-top v-show="showScrollTop" @backTop="backScroll">
      <img src="~assets/img/common/top.png" alt="">
    </scroll-top>
  </div>
</template>

<script>
import detailNaviBar from 'views/detail/childComp/detailNaviBar';
import scroll from 'components/common/scroll/scroll';
import detailSwiper from 'views/detail/childComp/detailSwiper';
import baseGoodsInfo from 'views/detail/childComp/baseGoodsInfo';
import shopInfo from 'views/detail/childComp/shopInfo';
import detailInfo from 'views/detail/childComp/detailInfo';
import itemParams from 'views/detail/childComp/itemParams';
import scrollTop from 'components/common/scrolltop/scrollTop';
import userComment from 'views/detail/childComp/userComment';
import recommendGoods from 'views/detail/childComp/recommendGoods'
import {imageLoadListener} from 'common/mixin';
import {detailData, recommendData, BaseGoodsInfo, ShopInfo, ItemParams} from 'network/detail';
import {BACKTOP_DISTANCE} from 'common/const';

export default {
  name:'detail',
  mixins: [imageLoadListener],
  data() {
    return {
      iid: null,
      swiperImages: [],
      baseGoods: {},
      shopInfo: {},
      detailInfo: {},
      itemParams: {},
      userComment: {},
      recommendGoods: [],
      showScrollTop: false,
      goodsOffsetTop: 0,
      paramsOffsetTop: 0,
      userCommentOffsetTop: 0,
      recommendGoodsOffsetTop: 0,
      scrollIndex: 0,
      refreshIndex: false,
        };
    },
  created() {
    this.iid = this.$route.query.iid;
    this.getDetail(this.iid);
    this.getRecommendData();
    },
  updated() {
    this.iid = this.$route.query.iid;
    this.getDetail(this.iid);
    this.getOffsetTop();
  },
  destroyed() {
    this.$bus.$off('imageLoad', this.imageLoadListenerFunc)
  },
  mounted() {
    this.$bus.$on('detailImageLoad', () => {
      try {
        this.$refs.scroll.refresh();
      } catch (error) {
        }
    })
    this.getOffsetTop();
    },
  methods: {
    getDetail (iid) {
      detailData (iid).then((res) => {
        this.swiperImages = res.data.result.itemInfo.topImages;
        // this.baseGoods = {
        //   title: res.data.result.itemInfo.title,
        //   price: res.data.result.itemInfo.price,
        //   oldPrice: res.data.result.itemInfo.oldPrice,
        //   discountType: {
        //     discountDesc: res.data.result.itemInfo.discountDesc,
        //     discountBgColor: res.data.result.itemInfo.discountBgColor
        //   },
        //   columns: res.data.result.columns,
        //   services: res.data.result.shopInfo.services
        // };
        this.baseGoods = new BaseGoodsInfo(
          res.data.result.itemInfo,
          res.data.result.columns,
          res.data.result.shopInfo.services
        );
        this.shopInfo = new ShopInfo(res.data.result.shopInfo);
        this.detailInfo = res.data.result.detailInfo;
        this.itemParams = new ItemParams(res.data.result.itemParams);
        this.userComment = res.data.result.rate;
      })
    },

    getRecommendData() {
      recommendData().then((res) => {
        this.recommendGoods = res.data.data.list;
      })
    },

    detailImageRefresh() {
      this.$refs.scroll.refresh();
      },
    showScroll(position) {
      this.showScrollTop = position.y < -BACKTOP_DISTANCE;
      this.getScrollIndex(position.y);
      },

    backScroll() {
      this.$refs.scroll.backTop(0, 0, 500);
      this.showScrollTop = false;
      this.scrollIndex = 0;
      },

    getOffsetTop() {
      this.goodsOffsetTop = this.$refs.detailSwiper.$el.offsetTop;
      this.paramsOffsetTop = this.$refs.itemParams.$el.offsetTop;
      this.userCommentOffsetTop = this.$refs.userComment.$el.offsetTop;
      this.recommendGoodsOffsetTop = this.$refs.recommendGoods.$el.offsetTop;
    },

    getScrollIndex(y) {
      if (y <= -this.goodsOffsetTop && y > -this.paramsOffsetTop) {
        this.scrollIndex = 0;
      }else if (y <= -this.paramsOffsetTop && y > -this.userCommentOffsetTop) {
        this.scrollIndex = 1;
      }else if (y <= -this.userCommentOffsetTop && y > -this.recommendGoodsOffsetTop) {
        this.scrollIndex = 2;
      }else if (y <= -this.recommendGoodsOffsetTop) {
        this.scrollIndex = 3;
      }
    },

    detailScrollTo(index) {
      // 传值属性如果不随着子组件传出值改变，当遇到默认值与改变值相同时，不会进行响应式处理将值传给子组件
      if (this.scrollIndex != index) {
        this.scrollIndex = index;
      }
      switch(index) {
        case 0:
          this.$refs.scroll.backTop(0, -this.goodsOffsetTop, 200);
          this.showScrollTop = false;
          break;
        case 1:
          this.$refs.scroll.backTop(0, -this.paramsOffsetTop, 200);
          if (-this.paramsOffsetTop < -BACKTOP_DISTANCE) {
            this.showScrollTop = true;
          }
          break;
        case 2:
          this.$refs.scroll.backTop(0, -this.userCommentOffsetTop, 200);
          if (-this.userCommentOffsetTop < -BACKTOP_DISTANCE) {
            this.showScrollTop = true;
          }
          break;
        case 3:
          this.$refs.scroll.backTop(0, -this.recommendGoodsOffsetTop, 200);
          if (-this.userCommentOffsetTop < -BACKTOP_DISTANCE) {
            this.showScrollTop = true;
          }
      }

    }
    },
  watch: {
    $route(newVal, oldVal) {
      this.refreshIndex = !this.refreshIndex;
      this.scrollIndex = 0;
    }
  },
  components: {
    detailNaviBar,
    scroll,
    detailSwiper,
    baseGoodsInfo,
    shopInfo,
    detailInfo,
    itemParams,
    userComment,
    recommendGoods,
    scrollTop
  }
};
</script>

<style scoped>
#detail{
  padding-top: 44px;
  padding-bottom: 50px;
  height: 100vh;
}
.detail-navi-bar {
  background-color: white;
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  z-index: 6;
}
</style>
