<template>
  <div class="shopcart-navi">
    <navi-bar>
      <div slot="mid" class="navi-title">
        购物车
      </div>
    </navi-bar>
  </div>
</template>

<script>
import naviBar from 'components/common/navibar/naviBar.vue';
export default {
  name:'shopcartNavi',
  data() {
    return {

        };
    },
  created() {

    },
  mounted() {

    },
  methods: {

    },
  components:{
    naviBar
  }
};
</script>

<style scoped>
.navi-bar {
  background-color: var(--color-tint);
  /* color: white; */
}
.navi-title {
  color: white;
}

</style>
