<template>
  <div class="bottom-bar">
    <div class="item-left">
      <div class="service">
        <div class="icon"></div>
        <div class="text">客服</div>
      </div>
      <div class="shop">
        <div class="icon"></div>
        <div class="text"> 店铺</div>
      </div>
      <div class="collection" @click="collect">
        <div class="icon" :class="{collected: isCollection}"></div>
        <div class="text">收藏</div>
      </div>
    </div>
    <div class="item-right">
      <div class="shopcart" @click="addToShopcart">加入购物车</div>
      <div class="purchase">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name:'detailBottomBar',
  data() {
    return {
      isCollection: false
      };
    },
  created() {

    },
  mounted() {

    },
  methods: {
      collect() {
          this.isCollection = !this.isCollection;
      },
      addToShopcart() {
        this.$emit('addToShopcart');
      }
    }
};
</script>

<style scoped>
.bottom-bar {
  display: flex;
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 9;
  height: 49px;
  background-color: #fff;
  box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.1);
}
.item-left, .item-right {
  flex: 1;
  display: flex;
  text-align: center;
}
.item-right {
  line-height: 49px;
  font-size: 13px;
  font-weight: bold;
}
.shopcart {
  flex: 1;
  background-color: #ffe817;
  color: #333;
}
.purchase {
  flex: 1;
  background-color: tomato;
  color: white;

}
.item-left {
  vertical-align: middle;

}
.service, .shop, .collection {
  flex: 1;
  font-size: 12px;
  padding: 5px 0;

}

.item-left .icon {
  height: 22px;
  width: 22px;
  /* display: inline-block; */
  margin: 0 auto 5px auto;
  background: url('~assets/img/detail/detail_bottom.png') no-repeat 0 0 /100%;
}
.service .icon {
  background-position: 0 -52px;
}
.shop .icon {
  background-position: 0 -97px;
}
.collection .icon {
  background-position: 0 2px;
}
.collected.icon {
  background-position: 0 -25px;
}
</style>
