<template>
  <div class="profile">
    <profile-navi></profile-navi>
    <profile-detail></profile-detail>
  </div>
</template>

<script>
import profileNavi from 'views/profile/childComp/profileNavi';
import profileDetail from 'views/profile/childComp/profileDetail';

export default {
  name:'profile',
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
    profileNavi,
    profileDetail
  }
};
</script>

<style scoped>

</style>
