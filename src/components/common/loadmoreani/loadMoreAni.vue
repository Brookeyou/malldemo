<template>
  <div class="load-more-ani">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'',
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
.load-more-ani {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 200px;
  height: 50px;
  text-align: center;
  z-index: 6;
}
.load-more-ani img {
  width: 15%;
}
</style>
