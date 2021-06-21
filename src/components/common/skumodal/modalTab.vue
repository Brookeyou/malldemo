<template>
  <div class="modal-tab" ref="modalTab" :style="modalDefaultStyle" v-show="isShow">
    <slot></slot>
  </div>
</template>

<script>
import modalItem from 'components/common/skumodal/modalItem'
export default {
  name:'modalTab',
  props: {
    bottom: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      isShow: false,
      modalTabHeight: 0,
      modalDefaultStyle: {},
      aniCssAttri: {
        transition: 'all 1s',
        '-moz-transition': 'all 1s',
        '-webkit-transition': 'all 1s',
        '-o-transition': 'all 1s'
      }
        };
    },
  created() {

    },
  mounted() {
    },
  methods: {
    // 关键属性为opacity, 默认属性上设置透明，可保证激活后不显示，避免一闪而过的bug,
    showModalTab() {
      this.isShow = true;
      setTimeout(() => {
        // 获取modal高度，移动到底边之外
        this.modalTabHeight = this.$refs.modalTab.offsetHeight;
        this.modalDefaultStyle = {
          position: 'fixed',
          bottom: `-${this.modalTabHeight}px`,
          left: '0',
          right: '0',
          'background-color': 'white',
          border: '1px solid grey',
          'border-radius': '10px 10px 0 0',
          'z-index': 12,
          opacity: 1


    }

        console.log(this.modalTabHeight);
    }, 100);
      setTimeout(() => {
        this.modalDefaultStyle = Object.assign(this.modalDefaultStyle, this.aniCssAttri)
        this.modalDefaultStyle.bottom = `${this.bottom}px`;
      }, 150)
    },
    close() {
      this.modalDefaultStyle.bottom = `-${this.modalTabHeight}px`;
      setTimeout(() => {
        this.isShow = false
      }, 990);
    }
    },
  computed: {

  },
  components: {
    modalItem
  }
};
</script>

<style scoped>

.modal-tab {
  position: fixed;
  bottom: 0px;
  left: 0;
  right: 0;
  opacity: 0;

}

</style>
