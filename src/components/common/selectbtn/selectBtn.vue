<template>
  <div class="select-btn" :class="{checked: isChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name:'selectBtn',
  props: {
    isChecked: {
      type: Boolean,
      default: false
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

    }
};
</script>

<style scoped>
.select-btn {
  display: inline-block;
  width: 5vw;
  height: 5vw;
  margin: auto 5px auto 0;
  background-color: rgb(211, 210, 210);
  border-radius: 50%;
}
.checked {
  background-color: tomato;
}
.select-btn img {
  width: 100%
}
</style>
