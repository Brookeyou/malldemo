<template>
  <div id="shopcart">
    <shopcart-navi></shopcart-navi>
    <scroll ref="scroll">
      <div>
        <shopcart-goods-list ref="shopcartGoodsList"></shopcart-goods-list>
        <div class="stand"></div>
      </div>
    </scroll>
    <settlement-bar></settlement-bar>
  </div>
</template>

<script>
import shopcartNavi from 'views/shopcart/childComp/shopcartNavi';
import scroll from 'components/common/scroll/scroll'
import shopcartGoodsList from 'views/shopcart/childComp/shopcartGoodsList';
import settlementBar from 'views/shopcart/childComp/settlementBar'
export default {
  name:'shopCart',
  data() {
    return {

        };
    },
  created() {

    },
  mounted() {
    },
  activated() {
    // this.$refs.scroll.refresh();
  },
  deactivated() {
  },
  methods: {

    },
  components: {
    shopcartNavi,
    scroll,
    shopcartGoodsList,
    settlementBar
  }
};
</script>

<style scoped>
#shopcart {
  padding-top: 44px;
  padding-bottom: 50px;
  height: 100vh;
}
.shopcart-navi{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 6;
}
.stand {
  height: 60px;
}
</style>
