<template>
  <div>
    <grid-view>
      <show-goods-item v-for="(item, index) in goodsList" :key="index" :goods="item"></show-goods-item>
    </grid-view>
  </div>
</template>

<script>
import gridView from 'components/common/gridview/gridView';
import showGoodsItem from 'components/content/showgoodsview/showGoodsItem';

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

    },
  components: {
    gridView,
    showGoodsItem
  }
};
</script>

<style scoped>


</style>
