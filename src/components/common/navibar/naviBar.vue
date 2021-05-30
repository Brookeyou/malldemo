<template>
  <div class="navi-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="mid">
      <slot name="mid"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'naviBar',
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
  }
};
</script>

<style scoped>
  .navi-bar{
    /* 流式布局用于横排多块，非流式会按照文档流的形式 */
    display: flex;
    /* 撑起div */
    height: 44px;
    /* 行高水平居中作用 */
    line-height: 44px;
    /* align-items: center; */
    text-align: center;
    font-weight: bold;
    letter-spacing: 2px;
    /* 透明度 */
    box-shadow: 0px 2px 1px rgba(100, 100, 100, 0.1);
  }
  .left, .right {
    width: 60px;

  }
  .mid {
    flex: 1;

  }
</style>
