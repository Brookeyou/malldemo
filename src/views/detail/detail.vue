<template>
  <div id="detail">
    <detail-navi-bar class="navi-bar"></detail-navi-bar>
    <detail-swiper :swiperImages="swiperImages"></detail-swiper>
    <base-goods-info :baseGoodsInfos="baseGoods"></base-goods-info>
  </div>
</template>

<script>
import detailNaviBar from 'views/detail/childComp/detailNaviBar';
import detailSwiper from 'views/detail/childComp/detailSwiper';
import baseGoodsInfo from 'views/detail/childComp/baseGoodsInfo'
import {detailData, BaseGoodsInfo} from 'network/detail';
export default {
  name:'detail',
  data() {
    return {
      iid: null,
      swiperImages: [],
      baseGoods: {}
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
        )
        console.log(this.baseGoods)
      })
    }
    },
  components: {
    detailNaviBar,
    detailSwiper,
    baseGoodsInfo
  }
};
</script>

<style scoped>
#detail{
  padding-top: 44px;
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
