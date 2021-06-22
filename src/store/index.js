import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    shopcartGoods: []
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
      for (let item of state.shopcartGoods) {
        item.goodsTotal = (item.price * item.quantity).toFixed(2);
      }
    }
  }
})

export default store
