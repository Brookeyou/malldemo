<template>
  <div class="profile-navi">
    <navi-bar>
      <div slot="mid">
        我的档案
      </div>
    </navi-bar>
  </div>
</template>

<script>
import naviBar from 'components/common/navibar/naviBar';

export default {
  name:'profileNavi',
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
  components: {
    naviBar
  }
};
</script>

<style scoped>
.profile-navi {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: var(--color-tint);
  color: white;
  z-index: 999;
}
</style>
