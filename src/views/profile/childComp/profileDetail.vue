<template>
  <div class="profile-detail">
    <div class="user-info">
      <div class="user">
        <div class="logo">
          <img src="~assets/img/common/logo.jpeg" alt="">
        </div>
        <div class="sign-status">
          <p class="sign">登录/注册</p>
          <p class="mobile">暂无绑定手机</p>
        </div>
      </div>
      <div class="member-info">
        <div class="balance">
          <div><span>0.00</span>元</div>
          <div>我的余额</div>
        </div>
        <div class="discount">
          <div><span>0</span>个</div>
          <div>我的优惠</div>
        </div>
        <div class="points">
          <div><span>0</span>分</div>
          <div>我的积分</div>
        </div>
      </div>
    </div>
    <div class="feature">
      <div class="message">我的消息</div>
      <div class="points-mall">积分商城</div>
      <div class="member-card">会员卡</div>
    </div>
    <div class="about">
      关于mall
    </div>
  </div>
</template>

<script>
export default {
  name:'profileDetail',
  data() {
    return {

        };
    },
  created() {

    },
  mounted() {

    },
  methods: {

    }
};
</script>

<style scoped>
.profile-detail {
  padding-top: 46px;
}
.user-info {
  height: 30vh;
}
.user {
  height: 15vh;
  align-items: center;
  text-align: center;
  background-color: var(--color-tint);
  display: flex;

}
.logo {
  width: 30vw;
}
.logo img {
  width: 75%;
  border-radius: 50%;
}
.sign-status {
  color: white;
  line-height: 5vh;
}
.sign-status .sign {
  font-size: 20px;
  font-weight: bold;
}
.sign-status .mobile{
  font-size: 10px;
}
.member-info {
  height: 15vh;
  display: flex;
  text-align: center;
  font-size: 16px;
  line-height: 5vh;
  border-bottom: 15px solid #eee;
}
.balance, .discount, .points {
  flex: 1;
  padding-top: 10px;
}
span {
  color: var(--color-high-text);
  font-size: 25px;
  font-weight: bold;
}
.balance, .discount {
  border-right: 1px solid #eee;
}
.balance div, .discount div, .points div {
  margin: auto 0;
}
.feature {
  border-bottom: 15px solid #eee;
}
.feature div {
  /* border-bottom: 1px solid #eee; */
  height: 6vh;
  line-height: 6vh;
  padding: 0 20px;
  margin: 0 5px
}
.feature .message, .feature .points-mall {
  border-bottom: 1px solid #eee;

}
.about {
  height: 6vh;
  line-height: 5vh;
  padding: 0 20px;
  margin: 0 5px
}
</style>
