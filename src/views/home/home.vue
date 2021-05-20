<template>
  <div id="home">
    <navi-bar class="navi-bar">
      <div slot="mid">{{naviTitle}}</div>
    </navi-bar>
    首页
  </div>
</template>

<script>
import naviBar from 'components/common/navibar/naviBar'
import {multiData} from 'network/home'
export default {
  name:'home',
  data() {
    return {
      naviTitle: '购物街',
      banner: null,
      recommend: null,
        };
    },
  created() {
    multiData().then((res) => {
      console.log(res);
      this.banner = res.data.data.banner.list;
      this.recommend = res.data.data.recommend.list;
    })
    },
  mounted() {

    },
  methods: {

    },
  components: {
    naviBar
  }
};
</script>

<style scoped>
  .navi-bar {
    background-color: var(--color-tint);
    color: white;
  }

</style>
