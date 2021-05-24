<template>
  <div>
    <recommend>
      <recommend-item v-for="(item, index) in recommends" :key="index">
        <a :href="item.link">
          <img :src="item.image">
          <div class="title">{{item.title}}</div>
        </a>
      </recommend-item>
    </recommend>
  </div>
</template>

<script>
import {recommend, recommendItem} from 'components/common/recommend/index'
export default {
  name:'homeRecommend',
  props: {
    recommends: {
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
    recommend,
    recommendItem
  }
};
</script>

<style scoped>

</style>
