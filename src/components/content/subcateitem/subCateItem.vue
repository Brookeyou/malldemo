<template>
  <div class="sub-category-item">
    <img :src="item.image" alt="" @load="imageLoad">
    <div class="title">
      {{item.title}}
    </div>
  </div>
</template>

<script>
export default {
  name:'subCateItem',
  props: {
    item: {
      type: Object,
      default(){
        return {}
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

    },
  methods: {
    imageLoad () {
      // 事件总线 需要在main vue prototype new vue
      this.$bus.$emit('imageLoad');
    }
    }
};
</script>

<style scoped>
.sub-category-item {
  text-align: center;
}
.sub-category-item img {
  border-radius: 2px;
  width: 80%
}
.sub-category-item .title {
  font-size: 10px;
  margin: 0 auto;
}
</style>
