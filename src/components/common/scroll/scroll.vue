<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import bScroll from 'better-scroll'
export default {
  name:'Scroll',
  props: {
    goodsPage: {
      type: Number,
      default: 1
    },
    probeType: {
      type: Number,
      default: 2
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null,
        };
    },
  created() {

    },
  mounted() {
    setTimeout(this._initScroll(), 100);
    },
  methods: {
    _initScroll () {
      let wrapper = document.querySelector('.wrapper');
      this.scroll = new bScroll(wrapper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true
    })

      this.scroll.on('scroll', (position) => {
        this.$emit('scrollEvent', position);
      })

      this.scroll.on('pullingUp', () => {
        this.$emit('pullUpLoading')
      })
    },

    refresh () {
      return this.scroll && this.scroll.refresh && this.scroll.refresh();
    },
    finishPullUp () {
      return this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp();
    },

    backTop (x, y, time) {
      return this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time);
    },

    getScrollY () {
      return this.scroll? this.scroll.y : 0;
    }
    },
    watch: {
      goodsPage (newVal, oldVal) {
        setTimeout(this.refresh, 100);
      }
    }
};
</script>

<style scoped>
.wrapper {
  position: absolute;
  top: 46px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
