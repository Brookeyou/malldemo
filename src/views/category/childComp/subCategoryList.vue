<template>
  <scroll id="sub-cate" ref="scroll">
    <div>
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

export default {
  name:'subCategoryList',
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

        };
    },
  created() {

    },
  mounted() {
    this.refresh()
    },
  updated() {
    this.refresh()
  },
  methods: {
    refresh() {
      this.$refs.scroll.refresh()
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
  right: 0;
  left: 26vw;
  top: 60px;
  z-index: -1
}
.sub-category-item {
  /* max-width: 33.3%; */
}
</style>
