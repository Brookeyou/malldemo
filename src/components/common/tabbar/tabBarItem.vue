<template>
  <div class="tab-bar-item" @click="btnClick">
    <div v-if="iconToggle">
      <slot name="tabBarIconDe"></slot>
    </div>
    <div v-else>
      <slot name="tabBarIcon"></slot>
    </div>
    <!-- 改成块级元素 -->
    <!-- 计算属性判断后返回一个对象 -->
    <div :style="textCss">
      <slot name="tabBarText"></slot>
    </div>
  </div>

</template>

<script>
export default {
  name:'tabBarItem',
  props: {
    path: {
      type: String,
      default: '/index'
    },
    color: {
      type: String,
      default: 'red'
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
    btnClick () {
      if (this.$route.path === this.path){
        return;
      }else{
        this.$router.push(this.path);
      }
    }

    },
  computed: {
    iconToggle () {
      //console.log(this.$route.path)
      //return this.$route.path.indexOf(this.path) == -1
      return this.$route.path !== this.path
    },
    textCss () {
      return this.$route.path === this.path? {'color': this.color, 'font-weight': 'bold'} : {};
    }

  }
};
</script>

<style scoped>
.tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    line-height: 20px;
    font-size: 12px;
  }
.tab-bar-item img {
  width: 18px;
  height: 18px;
  margin-top: 3px;
  /* 垂直对其方式 */
  vertical-align: middle;
}

</style>
