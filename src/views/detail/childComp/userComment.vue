<template>
  <div v-if="Object.keys(userComment).length !== 0" class="user-comment">
    <div class="theme">
      <div class="theme-item">用户评价</div>
      <div class="theme-item">共{{userComment.cRate}}条评价</div>
    </div>
    <div v-for="(item, index) in userComment.list" :key="index" class="user-comment-item">
      <div class="uname-info">
        <img :src="item.user.avatar" alt="">
        <div class="uname">{{item.user.uname}}</div>
      </div>
      <div class="content">
        {{item.content}}
      </div>
      <div class="sku-info">
        {{item.created | handlerDate}}
        {{item.style}}
      </div>
      <div class="user-images" v-if="item.images !== undefined">
        <div v-for="(image, index) in item.images" :key="'image' + index" class="user-images-item">
          <img :src="image" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {formatDate} from 'common/utils'

export default {
  name:'userComment',
  props: {
    userComment: {
      type: Object,
      default() {
        return {};
      }
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

    },
  filters: {
    handlerDate(value) {
      let date = new Date(value * 1000);
      return formatDate(date, 'yyyy-MM-dd');
    }
  }
};
</script>

<style scoped>
.user-comment {
  padding: 0 0 5px 0;
  border-bottom: 5px solid #eee;
}
.theme {
  padding: 10px 0;
  margin: 0 10px;
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  border-bottom: 1px solid #eee;
}
.uname-info {
  padding: 10px 10px;
}
.uname-info img {
  width: 10%;
  vertical-align: middle;
}
.uname-info .uname {
  display: inline-block;
  font-size: 13px;
  margin-left: 5px;
}
.content {
  font-size: 10px;
  padding: 10px 10px 0 10px;
}
.sku-info {
  padding: 5px 10px;
  font-size: 10px;
  color: rgb(185, 185, 185);
}
.user-images {
  display: flex;
  flex-wrap: wrap;
  padding: 0 10px;
}
.user-images-item {
  width: 10vh;
  height: 10vh;
  overflow: hidden;
}
.user-images-item img {
  width: 100%;
}

</style>
