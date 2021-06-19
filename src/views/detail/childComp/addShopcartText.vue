<template>
  <div class="add-shopcart-text">
    商品已加入购物车
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
.add-shopcart-text {
  position: fixed;
  bottom: 50vh;
  left: 0;
  right: 0;
  color: white;
  width: 50vw;
  height: 5vh;
  margin: 0 auto;
  text-align: center;
  background-color: rgb(88, 88, 88);
  border-radius: 10px;
  line-height: 5vh;
  font-weight: bold;
  font-size: 13px;
  animation: ani 2s;
}

@keyframes ani {
  0% {opacity: 0;}
  20% {opacity: 1;}
  100%{opacity: 0;}
}
@-webkit-keyframes ani {
  0% {opacity: 0;}
  20% {opacity: 1;}
  100%{opacity: 0;}
}
</style>
