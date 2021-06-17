<template>
  <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
    <div class="banner">
      <slot></slot>
    </div>
    <div class="indicator">
      <slot name="indicator" v-if="showIndicator && slideCount > 1">
        <div class="indi-item" v-for="(item, index) in slideCount" :key="index" :class="{active: index === currentIndex - 1}"></div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'swiper',
  props: {
    interval: {
		    type: Number,
        default: 3000
      },
    animDuration: {
      type: Number,
      default: 1000
    },
    moveRatio: {
      type: Number,
      default: 0.25
    },
    showIndicator: {
      type: Boolean,
      default: true
    },
  },
  data() {
    return {
      currentIndex: 1,
      slideCount: 0,
      scroll: false,
      totalWidth: 0,
      bannerStyle: {},
      timer: null,
        };
    },
  updated() {

  },
  mounted() {
    // 等数据传输
    setTimeout(() => {
      this.handleDom();
      this.startTimer();
    }, 1000)
    },
  methods: {
    //设置滚动位置
    setTransform: function (position) {
      this.bannerStyle.transform = `translate3d(${position}px, 0, 0)`;
      this.bannerStyle['-webkit-transform'] = `translate3d(${position}px), 0, 0`;
      this.bannerStyle['-ms-transform'] = `translate3d(${position}px), 0, 0`;
      },
    // 滚动过程函数
    scrollContent: function (position) {
      this.scroll = true;
      this.bannerStyle.transition = `transform ${this.animDuration}ms`;
      this.setTransform(position);
      this.checkPosition();
      this.scroll = false
      },

    checkPosition: function () {
      // 使用延时是为了要等到动画过度完成，如果即时判断会导致动画还没有过度完成，立即跳转到判断的位置，导致动画消失
      setTimeout(() => {

        this.bannerStyle.transition = '0ms'
        if (this.currentIndex >= this.slideCount + 1){
          this.currentIndex = 1;
          this.setTransform(-this.currentIndex * this.totalWidth);
        }else if (this.currentIndex <= 0){
          this.currentIndex = this.slideCount;
          this.setTransform(-this.currentIndex * this.totalWidth);
        }
      }, this.animDuration);
      },

    // dom元素初始化准备
    handleDom: function () {
      let banner = document.querySelector('.banner');
      let slide = document.getElementsByClassName('slide');
      this.slideCount = slide.length;

      if (this.slideCount > 1) {
        // 复制元素 true包括复制下级元素
        let slideFirst = slide[0].cloneNode(true);
        let slideLast = slide[this.slideCount - 1].cloneNode(true);
        // 添加在谁之前
        banner.insertBefore(slideLast, slide[0]);
        banner.appendChild(slideFirst)
        this.totalWidth = banner.offsetWidth;
        this.bannerStyle = banner.style;
      }
      this.setTransform(-this.totalWidth);
    },
    startTimer: function () {
      this.timer = window.setInterval(() => {
        this.currentIndex++;
        this.scrollContent(-this.currentIndex * this.totalWidth);
      }, this.interval);
    },
    stopTimer: function () {
      window.clearInterval(this.timer);
    },

    // 按住屏幕时
    touchStart: function(e) {
      // 正在滚动不可以拖动
      if (this.scroll){return};

      this.stopTimer();

      // 保存开始滚动的位置
      this.startX = e.touches[0].pageX;
    },

    // 触摸滑动动作
    touchMove: function (e) {
      this.currentX = e.touches[0].pageX;
      this.distance = this.currentX - this.startX;
      let currentPosition = -this.currentIndex * this.totalWidth;
      // 计算出滑动距离，然后进行移动
      let currentDistance = currentPosition + this.distance;
      this.setTransform(currentDistance);
    },

    // 滑动结束手指离开屏幕
    touchEnd: function (e) {
      this.bannerStyle.transition = `transform ${this.animDuration}ms`;
      let currentMove = Math.abs(this.distance);
      if (this.distance > 0 && currentMove > this.totalWidth * this.moveRatio){
        this.currentIndex--;
        // this.changeItem()l; return;
      }else if (this.distance < 0 && currentMove > this.totalWidth * this.moveRatio){
        this.currentIndex++;
      }else if (this.distance === 0){
        this.startTimer();
        return;
      }
      this.scrollContent(-this.currentIndex * this.totalWidth);
      this.startTimer();
    },

    // 控制跳转到前一个或者后一个
    changeItem: function(num) {
      this.stopTimer();
      this.currentIndex += num;
      this.scrollContent(-this.currentIndex * this.totalWidth);
      this.startTimer();
    },
    previous: function() {
      this.changeItem(-1);
    },
    next: function () {
      this.changeItem(1);
    }
    }
};
</script>

<style scoped>
.swiper {
  position: relative;
  overflow: hidden;
}
.banner {
  display: flex;
}
.indicator {
  display: flex;
  justify-content: center;
  bottom: 8px;
  width: 100%;
  position: absolute;
}
.indi-item {
  box-sizing: border-box;
  height: 8px;
  width: 8px;
  border-radius: 4px;
  background-color: #fff;
  line-height: 8px;
  text-align: center;
  font-size: 12px;
  margin: 0px 5px;
}
.indi-item.active {
  background-color: rgba(212, 62, 46, 1.0);
}
</style>
