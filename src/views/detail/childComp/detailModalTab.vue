<template>
  <div>
  <modal-tab v-if="Object.keys(skuInfo) !== 0" :bottom="bottom" ref="modalEvent">
    <div class="title">
      {{skuInfo.styleKey}} {{skuInfo.sizeKey}}
      <div class="close" @click="close">X</div>
    </div>
    <div class="skus">
      <modal-item v-for="(item, index) in skuInfo.skus" :key="index"
                           :class="{active: index === currentIndex}"
                           @selectClick="skuSelect(index)">
        {{item.style}}-{{item.size}}
      </modal-item>
    </div>
    <div class="quantity">
      <div class="quantity-title">数量：</div>
      <div class="quantity-calc">
        <button @click="increment">+</button>
        <input type="text" :value="quantity" readonly>
        <button @click="decrement" :disabled="checkquantity">-</button>
      </div>
    </div>
    <div class="modal-btn">
      <div class="addShopcart">
        加入购物车
      </div>
      <div class="immediately-purchase">
        立即购买
      </div>
    </div>
  </modal-tab>
  </div>
</template>

<script>
import modalItem from 'components/common/skumodal/modalItem'
import modalTab from 'components/common/skumodal/modalTab'
export default {
  name:'detalModalTab',
  props: {
    skuInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {
      currentIndex: 0,
      quantity: 0,
      bottom: 0
        };
    },
  created() {

    },
  mounted() {

    },
  methods: {
    skuSelect(index) {
      this.currentIndex = index;
    },
    increment() {
      this.quantity++;
    },
    decrement() {
      this.quantity--;
    },
    showModal() {
      this.$refs.modalEvent.showModalTab();
    },
    close() {
      this.$refs.modalEvent.close();
    }
    },
  computed: {
    checkquantity() {
      return this.quantity <= 0? true: false;
    }
  },
  components: {
    modalTab,
    modalItem
  }
}
</script>

<style scoped>
.title {
  padding: 2px 0 5px 5px;
  margin: 5px;
  border-bottom: 1px solid #eee;
  font-size: 12px;
  position:relative;
}
.skus {
  display: grid;
  grid-template-columns: repeat(2, 50%);
  padding: 5px;

}
.quantity {
  display: flex;
  line-height: 15px;
  /* justify-content: space-around; */
  font-size: 12px;
  padding: 10px;
  line-height: 33px;

}
.quantity-title {
  flex: 1;
}
.quantity-calc {
  width: 50vw;
  text-align: right;
}
.quantity-calc input {
  display: inline-block;
  width: 20px;
  border: 1px solid rgba(226, 226, 226, 0.877);
}
.quantity-calc button {
  display: inline-block;
  width: 18px;
  flex: 1;
  margin: 0 5px;
  background-color: rgba(226, 226, 226, 0.877);
  border: 1px solid whitesmoke;
  height: 18px;
}
.modal-btn {
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 0 auto 10px auto;
}
.modal-btn div {
  width: 35vw;
  padding: 5px;
  font-weight: bold;
  font-size: 13px;
}
.modal-btn .addShopcart {
  background-color: #ffe817;
  border-radius: 12px 0 0 12px;
  color: #333333;
}
.modal-btn .immediately-purchase {
  background-color: #ff6347;
  border-radius: 0 12px 12px 0;
  color: white;
}
.close {
  display: inline-block;
  position: absolute;
  right: 0;
  padding: 0 5px;
  border: 1px solid #eee;
  text-align: center;

}
</style>
