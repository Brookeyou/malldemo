<template>
  <div class="settlement-bar">
    <div class="select">
      <select-btn :isChecked="checkAll" @click.native="selectAll"></select-btn>
      <div class="text">全选</div>
    </div>
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
        结算({{settlementQuantity}})
      </div>
    </div>
  </div>
</template>

<script>
import selectBtn from 'components/common/selectbtn/selectBtn';
import { mapState } from 'vuex';

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
  activated() {
    // console.log(this.shopcartGoods);
  },
  methods: {
    // 点击触发selectAll改变item.checked------判断checkAll状态（全选按钮所处是全选还是未选）------数据发生变化触发计算属性改变全选按钮样式
    selectAll() {
      if (this.checkAll === true) {
        this.shopcartGoods.forEach(item => item.checked = false);
      }else{
        this.shopcartGoods.forEach(item => item.checked = true);
      }
      this.$store.commit('oneGoodsTotal');
    }
    },
  computed: {
    ...mapState([
      'shopcartGoods'
    ]),
    checkAll() {
      if (this.shopcartGoods.length === 0) {
        return false;
      }
      return !this.shopcartGoods.find(item => item.checked === false);
    },
    settlementQuantity() {
      return this.shopcartGoods.reduce((total, val, index, arr) => {
        if (val.checked) {
          return total += 1;
        }else{
          return total
        }
      }, 0)
    }
  },
  filters: {
    formatTotalPrice(price) {
      return price.toFixed(2)
    }
  },
  components: {
    selectBtn
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
  /* line-height: 60px; */
  box-shadow: 0px -2px 1px rgba(100, 100, 100, 0.1);
}
.select {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
}
.select .select-btn {
  margin: 20px 0 20px 5px;
}
.select .text {
  padding-top: 3px;
  margin-left: 10px;
}
.total {
  width: 50vw;
  text-align: right;
  padding-right: 10px;
  line-height: 60px;
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
