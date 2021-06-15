<template>
  <div id="detail">
    <detail-navi-bar class="navi-bar"></detail-navi-bar>
    <scroll ref="scroll">
      <div>
        <detail-swiper :swiperImages="swiperImages"></detail-swiper>
        <base-goods-info :baseGoodsInfos="baseGoods"></base-goods-info>
        <shop-info :shopInfo="shopInfo"></shop-info>
        <detail-info :detailInfo="detailInfo" @detailImageLoad="detailImageRefresh"></detail-info>
      </div>
    </scroll>

  </div>
</template>

<script>
import detailNaviBar from 'views/detail/childComp/detailNaviBar';
import scroll from 'components/common/scroll/scroll';
import detailSwiper from 'views/detail/childComp/detailSwiper';
import baseGoodsInfo from 'views/detail/childComp/baseGoodsInfo';
import shopInfo from 'views/detail/childComp/shopInfo';
import detailInfo from 'views/detail/childComp/detailInfo';
import {detailData, BaseGoodsInfo, ShopInfo} from 'network/detail';

export default {
  name:'detail',
  data() {
    return {
      iid: null,
      swiperImages: [],
      baseGoods: {},
      shopInfo: {},
      detailInfo: {}
        };
    },
  created() {
    this.iid = this.$route.query.iid;
    this.getDetail(this.iid);
    },
  updated() {

  },
  activated () {

  },
  mounted() {

    this.$bus.$on('detailImageLoad', () => {
      try {
        this.$refs.scroll.refresh();
      } catch (error) {
        
      }
    })
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
      })
    },

    detailImageRefresh() {
      this.$refs.scroll.refresh();
    }
    },
  components: {
    detailNaviBar,
    scroll,
    detailSwiper,
    baseGoodsInfo,
    shopInfo,
    detailInfo
  }
};
</script>

<style scoped>
#detail{
  padding-top: 44px;
  padding-bottom: 50px;
  height: 100vh;
}
.navi-bar {
  background-color: white;
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  z-index: 6;
}
</style>
