<template>
  <scroll id="sub-cate" ref="scroll" :isOpenPullUp="true" @pullUpLoading='changeCate'>
    <div>
      <!-- @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" -->
      <grid-view :cols="3" :vMargin='2' :hMargin="2" :itemSpace="2" v-if="subCateList.length !== 0">
        <sub-cate-item v-for="(item, index) in subCateList" :key="index" :item="item"></sub-cate-item>
      </grid-view>
    </div>
  </scroll>
</template>

<script>
import scroll from 'components/common/scroll/scroll'
import gridView from 'components/common/gridview/gridView';
import subCateItem from 'components/content/subcateitem/subCateItem';
import {imageLoadListener} from 'common/mixin';

export default {
  name:'subCategoryList',
  mixins: [imageLoadListener],
  props: {
    subCateList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      touchStartY: 0,
      touchCurrentY: 0,
      touchDistance: 0,

        };
    },
  created() {

    },
  activated() {

  },
  deactivated() {
    this.$bus.$off('imageLoad', this.imageLoadListenerFunc);
  },
  mounted() {
    this.refresh()
    },
  updated() {
    this.refresh()
    this.$refs.scroll.backTop(0, 0, 100);
  },
  methods: {
    refresh() {
      this.$refs.scroll.refresh()
    },
    finishPullUp() {
      this.$refs.scroll.finishPullUp();
    },
    closePullUp() {
      this.$refs.scroll.closePullUp();
    },
    changeCate() {
      this.$emit('pullUp')
    },
    touchStart(e) {
      this.touchStartY = e.touches[0].pageY;
    },
    touchMove(e) {
      this.touchCurrentY = e.touches[0].pageY;
      this.touchDistance = this.touchCurrentY - this.touchStartY;
    },
    touchEnd(e) {
      console.log(this.touchDistance);
    }
    },
  components: {
    gridView,
    subCateItem,
    scroll
  }
};
</script>

<style scoped>
.wrapper {
  width: 74vw;
  height: 30vh;
  right: 0;
  left: 26vw;
  top: 60px;;
  z-index: -1
}
/* .sub-category-item {
  max-width: 33.3%;
} */
</style>
