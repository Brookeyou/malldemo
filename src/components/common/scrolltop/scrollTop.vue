<template>
  <div class="scroll-top" @click="scrollTop">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'scrollTop',
  data() {
    return {

        };
    },
  created() {

    },
  mounted() {

    },
  methods: {
    scrollTop () {
      this.$emit('backTop');
    }
    }
};
</script>

<style scoped>
.scroll-top {
  position: fixed;
  bottom: 50px;
  right: 10px;
  width: 43px;
  height: 43px;
  z-index: 12;
}
.scroll-top img {
  width: 100%;
}
</style>
