<template>
  <div class="h-swiper">
    <swiper>
      <swiper-item v-for="(item, index) in swiperImages" :key="index" class="item">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {swiper, swiperItem} from 'components/common/swiper/index';

export default {
  name:'detailSwiper',
  props: {
    swiperImages: {
      type: Array,
      default() {
        return []
      }
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
  computed: {

  },
  components: {
    swiper,
    swiperItem
  }
};
</script>

<style scoped>
.h-swiper {
  margin: 2px 2px 0px 2px;
}
.item {
  text-align: center;
  height: 300px;
}
</style>
