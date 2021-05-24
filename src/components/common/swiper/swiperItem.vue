<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'slide',
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
.slide{
  width: 100%;
  flex-shrink: 0;
}
img {
  width: 100%;
}
</style>
