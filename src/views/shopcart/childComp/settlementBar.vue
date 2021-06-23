<template>
  <div class="settlement-bar">
    <div class="total">
      <div class="text">
        合计：
      </div>
      <div class="sign">
        ￥
      </div>
      <div class="total-price">
        {{$store.state.shopcartGoodsTotalPrice | formatTotalPrice}}
      </div>
    </div>
    <div class="settlement-btn">
      <div class="botton">
        结算
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'settlementBar',
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
  filters: {
    formatTotalPrice(price) {
      return price.toFixed(2)
    }
  }
};
</script>

<style scoped>
.settlement-bar {
  position: fixed;
  bottom: 48px;
  left: 0;
  right: 0;
  height: 60px;
  display: flex;
  background-color: white;
  z-index: 6;
  line-height: 60px;
  box-shadow: 0px -2px 1px rgba(100, 100, 100, 0.1);
}
.total {
  flex: 1;
  text-align: right;
  padding-right: 10px;
  color: var(--color-high-text);
}
.total .text {
  display: inline-block;
  font-size: 15px;
  font-weight: bold;
  color: var(--color-text);

}
.total .sign {
  display: inline-block;
  font-size: 15px;
}
.total .total-price {
  display: inline-block;
  font-size: 20px;
  font-weight: 900;
}
.settlement-btn {
  width: 30vw;
}
.settlement-btn .botton {
  text-align: center;
  background-color: rgb(255, 81, 0);
  margin: 10px;
  height: 40px;
  border-radius: 20px;
  line-height: 40px;
  color: white;
  font-weight: bold;
}
</style>
