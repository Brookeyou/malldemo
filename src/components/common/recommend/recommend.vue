<template>
  <div class="recommend">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'recommend',
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
.recommend {
  display: flex;
  /* height: 100px; */
  line-height: 35px;
  text-align: center;
  padding: 15px 0px 20px 0px;
  border-bottom: 8px solid #eee;
}
</style>
