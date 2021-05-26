<template>
  <div class="recommendItem">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'recommendItem',
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
.recommendItem {
  flex: 1;
  /* height: 100px; */
}
img {
  width: 80%;
  /* height: 60px; */
  /* margin-bottom: 5px; */
  /* 垂直对其方式 */
  /* vertical-align: middle; */
}
.title {
  /* height: 40px; */
  font-size: 15px;
  /* vertical-align: middle; */
}
</style>
