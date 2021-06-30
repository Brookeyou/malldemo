<template>
  <div class="category-list" v-if="category.length !== 0">
    <category-box>
      <category-item v-for="(item, index) in category" :key="index"
                    @categoryClick="categoryClick(index)"
                    :class="{active: changeActive(index), 'active-previous': activePre(index), 'active-next': activeNext(index)}">
        {{item.title}}
      </category-item>
    </category-box>
  </div>
</template>
<script>
import categoryBox from 'components/common/categorylist/categoryBox';
import categoryItem from 'components/common/categorylist/categoryItem';

export default {
  name:'categoryList',
  props: {
    category: {
      type: Array,
      default() {
        return [];
      },
    },
    currentCate: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      currentIndex: 0
        };
    },
  created() {
    },
  mounted() {
    },
  methods: {
    categoryClick(index) {
      this.currentIndex = index;
      this.$emit('categoryClick', index);
    }
    },
  computed: {
    changeActive() {
      return (index) => {
        return this.currentIndex === index;
      }
    },
    activePre() {
      return (index) => {
        return this.currentIndex === index + 1;
      }
    },
    activeNext() {
      return (index) => {
        return this.currentIndex === index - 1;
      }
    }
  },
  watch: {
    currentCate(newVal, oldVal){
      this.currentIndex = newVal;
    }
  },
  components: {
    categoryBox,
    categoryItem
  }
};
</script>

<style scoped>
.category-list {
  width: 26vw;
  /* background-color: #eee; */
}
.active {
  background-color: white;
  border-radius: 10px 0 0 10px;
  margin-left: 1vw;
  border-left: 2px solid #eee;
}
.active-previous {
  border-radius: 0 0 10px 0;
}
.active-next {
  border-radius: 0 10px 0 0;
}
</style>
