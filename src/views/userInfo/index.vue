<template>
  <div>
    <van-nav-bar
      title="我的资料"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="content">
      <van-cell-group>
        <van-cell title="头像" value="无"/>
        <van-cell title="昵称" :value="userInfo.nickname"/>
        <van-cell title="背景图" value="无"/>
        <van-cell title="性别" :value="userInfo.gender==1?'男':'女'"/>
        <van-cell title="手机号码" :value="userInfo.mobile"/>
        <van-cell title="电子邮箱" :value="userInfo.email"/>
        <van-cell title="QQ绑定" value="无"/>
        <van-cell title="微信绑定" value="无"/>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { NavBar } from 'vant';
import ynowApi from '../../api/ynow';
Vue.use(NavBar);

export default {
  data () {
    return {
      userInfo: {}
    };
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1);
    }
  },
  mounted () {
    ynowApi.getUserInfo().then(res => {
      this.userInfo = res.data;
    });
  }
};
</script>

<style scoped>
/* .content /deep/  */
</style>
