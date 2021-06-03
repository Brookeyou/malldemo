<template>
  <div class="shop-info">

    <div class="shop-name">
      <img :src="shopInfo.shopLogo" alt="">
      <div>
        {{shopInfo.shopName}}
      </div>
    </div>

    <div class="base-shop-info">

      <div class="shop-total">
        <div class="shop-total-item">
          <div>{{shopInfo.totalSell | sellCountFilter}}</div>
          <div>总销量</div>
        </div>
        <div class="shop-total-item">
          <div>{{shopInfo.totalGoods}}</div>
          <div>全部宝贝</div>
        </div>
      </div>

      <div class="score">
        <div v-for="(item, index) in shopInfo.score" :key="index" class="item">
          <span class="item-name">{{item.name}}</span>
          <span v-if="item.isBetter">
            <span style="color: red" class="item-score">{{item.score}}</span>
            <span style="background-color: red; color: white; font-size: 10px;">高</span>
          </span>
          <span v-else>
            <span style="color: green" class="item-score">{{item.score}}</span>
            <span style="background-color: green; color: white; font-size: 10px">低</span>
          </span>
        </div>
      </div>

    </div>

    <div class="shop-url">
      <div>
        <a :href="shopInfo.shopUrl">进店逛逛</a>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name:'',
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {}
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

    },
  computed: {

  },
  filters: {
    sellCountFilter(val) {
      if (val < 10000) {return val};
      return (val / 10000).toFixed(1) + '万';
    }
  }

};
</script>

<style scoped>
.shop-info {
  margin-bottom: 10px;
  padding-top: 5px;
}
.shop-name {
  line-height: 30px;
  font-size: 15px;
}
.shop-name div {
  display: inline-block;
  margin-left: 5px;
}
.shop-name img{
  vertical-align: middle;
  border-radius: 50%;
  width: 8%;
}
.base-shop-info {
  display: flex;
}
.shop-total {
  flex: 1;
  display: flex;
  text-align: center;
  line-height: 20px;
  padding: 0px 5px;
  margin: 10px 0px;
  border-right: 2px solid #eee;
  justify-content: space-evenly;

}
.shop-total-item {
  /* 服从space-evenly */
  /* flex: 1; */
  vertical-align: middle;
  font-size: 13px;
}
.score {
  flex: 1;
  /* padding-left: 5px; */
  text-align: center;
  line-height: 20px;
}
.score .item-name {
  font-size: 13px;
}
.score .item-score {
  display: inline-block;
  width: 26px;
  font-size: 10px;
  margin-left: 6px;
  margin-right: 6px;
}
.shop-url {
  margin-top: 5px;
  text-align: center;
  line-height: 24px;
}
.shop-url div {
  display: inline-block;
  background-color: rgb(243, 241, 241);
  height: 100%;
  width: 45%;
  font-size: 15px;
  box-shadow: 2px 2px 2px rgba(243, 241, 241, 0.5);
}
</style>
