<template>
  <div class="base-goods-info">
    <div class="goods-title">
      {{baseGoodsInfos.title}}
    </div>

    <div class="goods-price">
      <div class="new-price">
        {{baseGoodsInfos.price}}
      </div>
      <div class="old-price">
        {{baseGoodsInfos.oldPrice}}
      </div>
      <div class="discount-type" :style="{'background-color': baseGoodsInfos.discountBgColor}">
        {{baseGoodsInfos.discountDesc}}
      </div>
    </div>

    <div class="cols">
      <div v-for="(item, index) in baseGoodsInfos.columns" :key="index" class="col">{{item}}</div>
    </div>

    <div class="services">
      <div v-for="(item, index) in baseGoodsInfos.services" :key="index" class="services-item">
        <img :src="item.icon" alt="">
        {{item.name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'baseGoodsInfo',
  props: {
    baseGoodsInfos: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {

        };
    },
  created() {

    },
  mounted() {

    },
  methods: {

    }
};
</script>

<style scoped>
.base-goods-info {
  border-bottom: 5px solid #eee;
}
.goods-title {
  word-wrap: break-word;
  font-size: 20px;
  margin-bottom: 10px;
}
.goods-price {
  display: flex;
  justify-content: flex-start;
  line-height: 20px;
  margin-bottom: 10px;
}
.goods-price .new-price {
  color: var(--color-high-text);
  font-size: 18px;
  margin-right: 5px;
  padding-top: 2px;
}
.goods-price .old-price {
  color: var(--color-text);
  font-size: 10px;
  text-decoration: line-through;
  padding-top: 2px;
  margin-right: 5px;
}
.goods-price .discount-type {
  color: white;
  font-size: 16px;
  border-radius: 5px;
  padding: 2px 5px;
}
.cols {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  padding: 5px;
}
.cols .col {
  font-size: 10px;
}
.services {
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
  justify-content: space-between;
}
.services .services-item {
  display: inline-block;
  line-height: 20px;
  font-size: 10px;
}
.services .services-item img {
  display: inline-block;
  width: 10%;
}
</style>
