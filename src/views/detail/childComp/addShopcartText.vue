<template>
  <div class="add-shopcart-text">
    {{text}}
  </div>
</template>

<script>
export default {
  name:'addShopcartText',
  props: {
    text: {
      type: String,
      default: ''
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
.add-shopcart-text {
  position: fixed;
  bottom: 50vh;
  left: 0;
  right: 0;
  color: white;
  width: 55vw;
  height: 5vh;
  margin: 0 auto;
  text-align: center;
  background-color: rgb(88, 88, 88);
  border-radius: 10px;
  line-height: 5vh;
  font-weight: bold;
  font-size: 13px;
  animation: ani-opacity 2s, ani-bottom 1s;
}

@keyframes ani-opacity {
  0% {opacity: 0;}
  50% {opacity: 1;}
  100%{opacity: 0;}
}

@keyframes ani-bottom {
  0% {bottom: 53vh}
  100% {bottom: 50vh}
}

@-webkit-keyframes ani-opacity {
  0% {opacity: 0;}
  50% {opacity: 1;}
  100%{opacity: 0;}
}
@-webkit-keyframes ani-bottom {
  0% {bottom: 53vh}
  100% {bottom: 50vh}
}
</style>
