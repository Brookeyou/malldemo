<template>
  <div>
    <detail-navi-bar></detail-navi-bar>
  </div>
</template>

<script>
import detailNaviBar from 'views/detail/childComp/detailNaviBar'
export default {
  name:'detail',
  data() {
    return {
      iid: null,

        };
    },
  created() {
    this.iid = this.$route.query.iid;
    },
  mounted() {

    },
  methods: {

    },
  components: {
    detailNaviBar
  }
};
</script>

<style scoped>

</style>
