<template>
  <div class="show-goods-item" @click="itemClick(goods.iid || goods.item_id)">
    <img :src="showImg" alt="" @load="imageLoad">
    <div class="goods-info">
      <p>{{goods.title}}</p>
      <span class="price">价格：￥{{goods.price}}</span>
      <span class="collect">{{goods.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'showGoodsItem',
  props: {
    goods: {
      type: Object,
      default: {}
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
    imageLoad () {
      // 事件总线 需要在main vue prototype new vue
      this.$bus.$emit('imageLoad');
    },
    itemClick (iid) {
      this.$router.push({name: 'detail', query: {iid: iid}}).catch(err => err);
    }
    },
  computed: {
    showImg() {
      return this.goods.showLarge !== undefined? this.goods.showLarge.img : this.goods.image;
    }
  }
};
</script>

<style scoped>
.show-goods-item {
  padding-bottom: 40px;
  position: relative;
}
.show-goods-item img {
  width: 100%;
  border-radius: 2%;
}
.goods-info {
  /* 根据底部定位锁定块级位置不会根据图片大小变动 */
  position: absolute;
  bottom: 5px;
  left: 0px;
  right: 0px;
  overflow: hidden;
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  /* 超出的文本隐藏方式... */
  text-overflow: ellipsis;
  /* 不换行 */
  white-space: nowrap;
  font-size: 15px;
}
.goods-info .price {
  color: var(--color-high-text);
  font-size: 10px;
  margin-right: 20px;
  padding-right: 10px;
}
.goods-info .collect {
  position: relative;
  font-size: 10px;
}
.goods-info .collect::before {
  content: '';
  position: absolute;
  /* 往左偏移防止重合 */
  left: -15px;
  top: 0;
  width: 12px;
  height: 12px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
