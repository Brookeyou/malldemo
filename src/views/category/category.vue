<template>
  <div class="category">
    <category-navi></category-navi>
    <div class="category-area">
      <div class="cate">
        <scroll id="main-category">
          <div>
            <category-list :category="category" @categoryClick="changeSubCate"></category-list>
          </div>
        </scroll>
      </div>
      <div class="sub-category">
        <sub-category-list :subCateList="currentSubCategory.list"></sub-category-list>
      </div>
    </div>
  </div>
</template>
<script>
import categoryNavi from 'views/category/childComp/categoryNavi';
import categoryList from 'views/category/childComp/categoryList';
import subCategoryList from 'views/category/childComp/subCategoryList';
import scroll from 'components/common/scroll/scroll';
import {category, subCategory} from 'network/category';

export default {
  name:'category',
  data() {
    return {
      category: [],
      currentSubCategory: {},
      currentCategoryIndex: 0
        }
    },
  created() {
    this.getFirstCate();
    },
  updated () {

  },
  activated() {

  },
  mounted() {

    },
  methods: {
    getCategory() {
      return category().then(res => {
        this.category.push(...res.data.data.category.list)
      })
    },
    getSubCategory(maitKey) {
      subCategory(maitKey).then(res => {
        this.currentSubCategory = res.data.data
      })
    },
    getFirstCate() {
      this.getCategory().then(res => {
        this.getSubCategory(this.category[this.currentCategoryIndex].maitKey);
      })
    },
    changeSubCate(index) {
      this.currentCategoryIndex = index;
      this.getSubCategory(this.category[this.currentCategoryIndex].maitKey);
    }
    },
  components: {
    scroll,
    categoryNavi,
    categoryList,
    subCategoryList
  }
};
</script>

<style scoped>
.category-area {
  padding: 10px 0;
  display: flex;
  padding-top: 44px;
  background-color: #eee;
}
.cate {
  width: 26vw;
}
.cate .wrapper {
  width: 26vw;
  top: 54px;
  padding-top: 5px;
  z-index: -1;
}
.sub-category {
  /* position: relative; */
  width: 74vw;

}

</style>
