<template>
  <div>
    <navi-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div slot="mid" class="navi-title-box">
        <div v-for="(item, index) in naviBarTitle" :key="index" class="navi-title"
        :class="{active: index === currentIndex}" @click="itemClick(index)">
          {{item}}
        </div>
      </div>
    </navi-bar>
  </div>
</template>

<script>
import naviBar from 'components/common/navibar/naviBar'
export default {
  name:'detailNaviBar',
  props: {
    scrollCurrentIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      naviBarTitle: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
        };
    },
  created() {

    },
  mounted() {

    },
  updated() {

  },
  methods: {
    backClick () {
      this.$router.back();
    },
    itemClick (index) {
      this.currentIndex = index;
      this.$emit('naviBarIndex', index)
    }

    },
  watch: {
    scrollCurrentIndex: {
      immediate: true,
      handler(val) {
        this.currentIndex = val;
      }
    }
  },

  components: {
    naviBar
  }
};
</script>

<style scoped>
.navi-title-box {
  display: flex;
  text-align: center;
}
.navi-title {
  flex: 1;
  font-size: 15px;
}
.navi-title-box .active{
  color: var(--color-high-text);
}
.left {
  line-height: 44px;
}
.back {
  padding: 5px 10px;
}
img {
  width: 50%;
}
</style>
