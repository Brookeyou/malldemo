<template>
  <div class="shopcart-goods-list">
    <div class="swiper-box" v-for="(item, index) in $store.state.shopcartGoods" :key="index"
                          @touchstart="touchStart($event, index)" @touchmove="touchMove($event, index)" @touchend="touchEnd($event, index)">
      <div class="banner" ref="banner">
        <div class="goods-item">
          <div class="goods-image">
            <img :src="item.image" alt="" @click="redirectDetail(item.iid)">
          </div>
          <div class="goods-info">
            <div class="goods-title">
              {{item.title}}
            </div>
            <div class="goods-sku">
              {{item.style}},{{item.size}}
            </div>
            <div class="goods-price-info">
              <div class="price">
                <div class="sign">
                ￥
                </div>
                {{item.price}}
              </div>
              <div class="quantity">
                <div class="change-box">
                  <div class="change" v-if="isChangebtn" @click="showChangeQuantity">修改</div>
                  <div class="change" @click="showChangeQuantity" v-else>提交</div>
                </div>
                <div class="if-quantity" v-if="isShowChangeQuantity">
                  <div class="increment" @click.stop="increment(index)">+</div>
                  <div class="number">{{item.quantity}}</div>
                  <div class="decrement" @click.stop="decrement(index)">-</div>
                </div>
                <div class="if-else" v-else>
                  x{{item.quantity}}
                </div>
              </div>
              <div class="total">
                  ￥{{item.goodsTotal}}
              </div>
            </div>
          </div>
        </div>
        <div class="operation">
          <div class="collect">
            加入收藏夹
          </div>
          <div class="delete">
            删除
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'shopcartGoodsList',
  data() {
    return {
      isShowChangeQuantity: false,
      isChangebtn: true,
      touchStartX: 0,
      touchcurrentX: 0,
      distance: 0,
      offsetWidth: 0,
      banner: [],
      swiperBox: [],
      lastTimeIndex: null
        };
    },
  created() {

    },
  mounted() {
    this.handlerDom();
    },
  activated() {
    this.handlerDom();
    this.checkLastTimeScroll(true);

  },
  methods: {
    showChangeQuantity() {
      this.isShowChangeQuantity = !this.isShowChangeQuantity;
      this.isChangebtn = !this.isChangebtn;
    },
    increment(index) {
      this.$store.commit('quantityIncrement', index);
    },
    decrement(index) {
      this.$store.commit('quantityDecrement', index);
    },
    redirectDetail(iid) {
      this.$router.push({name: 'detail', query: {iid: iid}})
    },
    handlerDom() {
      this.banner = document.getElementsByClassName('banner');
      this.swiperBox = document.getElementsByClassName('swiper-box');
      if (this.banner.length !== 0) {
          this.offsetWidth = this.swiperBox[0].offsetWidth;
        //   for (let i = 0; i < this.banner.length; i++) {
        //     this.banner[i].style.width = `${this.offsetWidth * 1.5}px`
        //     console.log(this.offsetWidth)
        //     console.log(this.banner[i].scrollWidth)
        // }
      }

    },
    setTransform(banner, position) {
      banner.style.transform = `translate3d(${position}px, 0, 0)`;
      banner.style['-webkit-transform'] = `translate3d(${position}px, 0, 0)`;
      banner.style['-ms-transform'] = `translate3d(${position}px, 0, 0)`;
    },
    scrollContent(banner, position) {
      banner.style.transition =`transform 500ms`;
      this.setTransform(banner, position);
    },
    backOff(banner) {
      banner.style.transition = 'transform 0ms';
      this.setTransform(banner, 0)
    },
    checkLastTimeScroll(flag, index) {
      if (this.lastTimeIndex === null) {
        return;
      }else if(flag){
        this.backOff(this.banner[this.lastTimeIndex]);
        return;
      }else if(!flag && this.lastTimeIndex === index){
        return;
      }else {
        this.backOff(this.banner[this.lastTimeIndex]);
      }
    },
    touchStart(e, index) {
      this.touchStartX = e.touches[0].pageX;
    },
    touchMove(e, index) {
      this.currentX = e.touches[0].pageX;
      this.distance = this.currentX - this.touchStartX;
      let translatesX = parseFloat(this.banner[index].style.transform.substring(12).split(',')[0])
      if (translatesX >= 0 && this.distance < 0) {
        this.setTransform(this.banner[index], this.distance);
      }else if (translatesX < 0) {
        this.setTransform(this.banner[index], this.distance);
      }
    },
    touchEnd(e, index) {
      if (this.distance < 0 && -this.distance > 100) {
        this.checkLastTimeScroll(false, index);
        this.lastTimeIndex = index;
        this.scrollContent(this.banner[index], -this.offsetWidth / 2);
      }else if (this.distance >= 0 && this.distance > 100) {
        let translatesX = parseFloat(this.banner[index].style.transform.substring(12).split(',')[0])
        if (translatesX === -this.offsetWidth / 2) {
          this.lastTimeIndex = null;
          this.scrollContent(this.banner[index], 0);
        }
      }else{
        this.scrollContent(this.banner[index], 0);
      }
    }
    }
};
</script>

<style scoped>
.swiper-box {
  width: 100vw;
  overflow: hidden;

}
.banner {
  width: 150vw;
  display: flex;

}
.goods-item {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  margin: 5px;
  padding-bottom: 5px;
  width: 100vw;
}
.goods-image {
  width: 70px;
  height: 70px;
  border-radius: 5px;
  overflow: hidden;
}
.goods-image img{
  width: 100%;
}
.goods-info {
  width: 245px;
  margin-left: 5px;
}
.goods-info div {
  margin: 5px 0 0 0;
}
.goods-info .goods-title {
  white-space: nowrap;
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.goods-info .goods-sku {
  text-align: center;
  font-size: 8px;
  color: grey;
}
.goods-info .goods-price-info {
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
}
.goods-price-info div {
  flex: 1;
  text-align: center;
  font-size: 13px;
}
.goods-price-info .price {
  padding-top: 2px;
  color: var(--color-high-text);
  font-size: 15px;
}
.goods-price-info .price .sign {
  display: inline-block;
  font-size: 10px;
}
.quantity .change-box {
  display: inline-block;

}
.change-box .change {
  font-size: 8px;
  color: hotpink;
  border-bottom: 1px solid hotpink;
  margin: 0 2px 0 0;
}
.quantity .if-else {
  display: inline-block;
  border: 1px solid #eee;
  border-radius: 3px;
  margin: 0 auto;
  padding: 2px 5px;
}
.quantity .if-quantity{
  display: inline-block;
  border: 1px solid #eee;
  border-radius: 3px;
  justify-content: center;
}
.quantity .if-quantity div {
  display: inline-block;
  margin: 0;
  padding: 2px 5px;
}
.if-quantity .increment {
  border-right: 1px solid #eee;
}
.if-quantity .number {
  border-right: 1px solid #eee;
}
.goods-price-info .total {
  margin-top: 12px;
}
.banner .operation {
  display: flex;
  width: 50vw;
  font-size: 10px;
  font-weight: bold;
  text-align: center;
  line-height: 80px;
  padding: 0 0 5px 0;
}
.operation .collect {
  flex: 1;
  background-color: #ffe817;
}
.operation .delete {
  flex: 1;
  background-color: red;
  color: white;

}
</style>
