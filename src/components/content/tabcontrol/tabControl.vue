<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" :key="index" @click="tabClick(index)"
    :class="{active: currentIndex === index}" class="tab-item">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'tabControl',
  props: {
    titles: {
      type: Array,
      default: []
    },
    changeIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      currentIndex: 0,
        };
    },
  created() {

    },
  mounted() {

    },
  methods: {
    tabClick (index) {
      this.currentIndex = index;
      // 点击了哪个按钮传给父组件
      this.$emit('itemClick', index);
    }

    },
  watch: {
    changeIndex(newVal, oldVal) {
      this.currentIndex = newVal;
    }
  }
};
</script>

<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  line-height: 39px;
  border-top: 10px solid #eee;
}
.tab-item {
  flex: 1;
  font-size: 15px;
}

.tab-item span {
  padding: 3px;
}
.active.tab-item span {
  border-bottom: 2px solid var(--color-tint);
  color: var(--color-high-text);
}
</style>
