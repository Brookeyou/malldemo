<template>
  <div class="category-item" @click="cateClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'categoryItem',
  data() {
    return {
      timer: null
        };
    },
  created() {

    },
  mounted() {

    },
  methods: {
    cateClick() {
      if(this.timer) {clearTimeout(this.timer)};
      this.clickFunc();
    },
    clickFunc() {
      this.timer = setTimeout(() => {
        this.$emit('categoryClick');
      }, 10)
    }
    }
};
</script>

<style scoped>
.category-item {
  width: 100%;
  height: 8vh;
  /* border: 1px solid rgb(218, 218, 218); */
  background-color: #eee;
  text-align: center;
  line-height: 8vh;
}
</style>
