import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    shopcartGoods: [],
    shopcartGoodsTotalPrice: 0
  },
  mutations: {
    addToShopcart(state, payload) {
      let flag = false;
      if (state.shopcartGoods.length !== 0) {
        for (let item of state.shopcartGoods) {
          if (item.stockId === payload.obj.stockId) {
            item.quantity += payload.obj.quantity;
            flag = true;
            break;
          }
        }
        if (!flag) {
          state.shopcartGoods.push(payload.obj);
        }
      }else{
        state.shopcartGoods.push(payload.obj)
      }
      this.commit('oneGoodsTotal');
    },
    quantityIncrement(state, index) {
      state.shopcartGoods[index].quantity++;
      this.commit('oneGoodsTotal');
    },
    quantityDecrement(state, index) {
      state.shopcartGoods[index].quantity--;
      this.commit('oneGoodsTotal');
    },
    oneGoodsTotal(state) {
      state.shopcartGoodsTotalPrice = 0;
      for (let item of state.shopcartGoods) {
        item.goodsTotal = (item.price * item.quantity).toFixed(2);
        state.shopcartGoodsTotalPrice += Number(item.goodsTotal);
      }
    },
    deleteShopcartGoods(state, index) {
      state.shopcartGoods.splice(index, 1);
      this.commit('oneGoodsTotal');
    }
  }
})

export default store
