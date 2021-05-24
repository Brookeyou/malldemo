<template>
  <div>
    <swiper ref="swiper">
      <!-- 层级逻辑更清晰，通过一个容器，套组件，再遍历数据插入多个item， item数据易获得 -->
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {swiper, swiperItem} from 'components/common/swiper/index'

export default {
  name:'homeSwiper',
  props: {
    banners: {
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
    startTimer: function () {
      this.$refs.swiper.startTimer();
    },
    stopTimer: function () {
      this.$refs.swiper.stopTimer();
    }
    },
  components: {
    swiper,
    swiperItem
  }
};
</script>

<style scoped>

</style>
