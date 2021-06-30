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
    oneGoodsSelect(state, index) {
      state.shopcartGoods[index].checked = !state.shopcartGoods[index].checked;
      this.commit('oneGoodsTotal');
    },
    oneGoodsTotal(state) {
      state.shopcartGoodsTotalPrice = 0;
      for (let item of state.shopcartGoods) {
        item.goodsTotal = (item.price * item.quantity).toFixed(2);
        if (item.checked) {
          state.shopcartGoodsTotalPrice += Number(item.goodsTotal);
        }
      }
    },
    deleteShopcartGoods(state, index) {
      state.shopcartGoods.splice(index, 1);
      this.commit('oneGoodsTotal');
    },
    addNewGoods(state, obj) {
      state.shopcartGoods.push(obj);
      this.commit('oneGoodsTotal');
    },
    oldGoodsIncrease(state, payload){
      for (let item of state.shopcartGoods) {
        if (item.stockId === payload.obj.stockId) {
          item.quantity += payload.obj.quantity;
          this.commit('oneGoodsTotal');
          break;
        }
      }
    }
  },
  actions: {
    addShopcart(context, obj){
      return new Promise((resolve, reject) => {
        let oldGoodsIndex = context.state.shopcartGoods.find(item => item.stockId === obj.stockId);
        if (oldGoodsIndex) {
          context.commit({
            type: 'oldGoodsIncrease',
            obj: obj
          })
          context.commit('oneGoodsTotal');
          resolve(`相关商品数量+${obj.quantity}`);
        }else{
          context.commit('addNewGoods', obj);
          resolve('商品已加入购物车');
        }
      })
    }
  }
})

export default store
