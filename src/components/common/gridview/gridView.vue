<template>
  <div class="grid-view" ref="gridView">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'gridView',
  props: {
    cols:{
      type: Number,
      default: 2
    },
    // 上下
    vMargin: {
      type: Number,
      default: 8
    },
    hMargin: {
      type: Number,
      default: 8
    },
    itemSpace: {
      type: Number,
      default: 8
    },
    lineSpace: {
      type: Number,
      default: 8
    }
  },
  data() {
    return {

        };
    },
  created() {

    },
  mounted() {
    setTimeout(this._autoLayout(), 1000);
    },
  updated() {
    this._autoLayout();
  },
  methods: {
    // 自动化布局
    _autoLayout () {
      // 获取DOM元素 ref加载普通标签的应用场景
      let grid = this.$refs.gridView;
      // 所有二级子元素
      let children = grid.children;
      // 设置grid内边距
      grid.style.padding = `${this.vMargin}px ${this.hMargin}px`;
      // hMargin 左右外边距 itemSpace 两元素中间的间隔  每个元素的宽度 减去左右外边距 减去两元素中间的宽度
      let itemWidth = (grid.clientWidth - this.hMargin * 2 - (this.cols - 1) * this.itemSpace) / this.cols;

      for (let i=0; i<children.length; i++) {
        let child = children[i];
        child.style.width = itemWidth + 'px';
        if ((i + 1) % this.cols !== 0) {
          child.style.marginRight = this.itemSpace + 'px';
        }
        if (i >= this.cols) {
          child.style.marginTop = this.lineSpace + 'px';
        }
      }
    }
    }
};
</script>

<style scoped>
.grid-view {
  display: flex;
  flex-wrap: wrap;
}
</style>
