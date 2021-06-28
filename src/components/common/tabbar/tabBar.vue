<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'tabBar',
  data() {
    return {

        };
    },
  created() {

    },
  mounted() {

    },
  methods: {

    }
};
</script>

<style scoped>
  #tab-bar {
    display: flex;
    background-color: #f6f6f6;
    /* 绝对定位元素，相对于浏览器窗口 */
    /* 通过left、right、top、bottom进行位置锁定 */
    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 0px;
    /* x y 偏移 模糊度 阴影颜色和透明度 */
    box-shadow: 0px -1px 1px rgba(100, 100, 100, 0.1);
    z-index: 20;
  }
</style>
