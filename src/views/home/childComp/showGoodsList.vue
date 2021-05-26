<template>
  <div class="show-goods-list">
    <div class="goods-item" v-for="(item, index) in goodsList" :key="index">
      <img :src="item.showLarge.img">
    </div>
  </div>
</template>

<script>
export default {
  name:'showGoodsList',
  props: {
    goodsList: {
      type: Array,
      default: []
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
.show-goods-list {
  width: 100%;
  line-height: 15px;
}
.goods-item {
  display: inline-block;
  /* float: left; */
  width: 50%;
  /* height: 240px; */
}
.goods-item img {
  width: 100%;
}

</style>
