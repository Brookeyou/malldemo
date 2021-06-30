<template>
  <div class="wrapper" ref="wrapper">
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
    },
    isOpenPullUp: {
      type: Boolean,
      default: false
    },
    bounce: {
      type: Object,
      default() {
        return {
            top: true,
            bottom: true,
            left: true,
            right: true
        }
      }
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
      // let wrapper = document.querySelector('.wrapper');
      this.scroll = new bScroll(this.$refs.wrapper, {
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true,
      bounce: this.bounce
    })

      this.scroll.on('scroll', (position) => {
        this.$emit('scrollEvent', position);
        // console.log(this.scroll.maxScrollY);
        // console.log(this.scroll.y);
        if (this.scroll.maxScrollY > this.scroll.y) {
          this.scroll.on('touchEnd', (position) => {

          if (position.y < -80 && this.isOpenPullUp) {
            this.openPullUp();
            setTimeout(() => {
              this.closePullUp();
            }, 100);
        }
      })
        }
      })

      // this.scroll.on('touchEnd', (position) => {

      //   if (position.y < -50 && this.isOpenPullUp && this.scroll.maxScrollY > this.scroll.y) {
      //     this.openPullUp();
      //     setTimeout(() => {
      //       this.closePullUp();
      //     }, 100);
      //   }
      // })

      this.scroll.on('pullingUp', () => {
        this.$emit('pullUpLoading');
      })
    },

    refresh() {
      return this.scroll && this.scroll.refresh && this.scroll.refresh();
    },
    finishPullUp() {
      return this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp();
    },
    finishPullDown() {
      return this.scroll && this.scroll.finishPullDown && this.scroll.finishPullDown();
    },
    backTop (x, y, time) {
      return this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time);
    },

    getScrollY() {
      return this.scroll? this.scroll.y : 0;
    },
    openPullUp() {
      return this.scroll && this.scroll.openPullUp && this.scroll.openPullUp();
    },
    closePullUp() {
      return this.scroll && this.scroll.closePullUp && this.scroll.closePullUp();
    },
    openPullDown() {
      return this.scroll && this.scroll.openPullDown && this.scroll.openPullDown()
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
