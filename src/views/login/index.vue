<template>
  <div class="view-login">
    <div class="login-form">
      <van-cell-group>
        <van-field v-model="mobile" placeholder="输入手机号码"/>
        <van-field v-model="password" placeholder="输入登录密码" type="password"/>
      </van-cell-group>
      <van-button
        class="login-button"
        type="primary"
        size="large"
        :loading="loading"
        @click="handleClick">立即登录</van-button>
        <div class="btm-wrap">
          <p class="tip-text">上述账户为测试账户</p>
          <div class="register-wrap">
            <span>没有账户？</span>
            <router-link class="register-link" to="/register">注册</router-link>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import ynowApi from '../../api/ynow';
import { Field, Button } from 'vant';
import cookies from 'js-cookie';
import store from 'store';

Vue.use(Field).use(Button);

export default {
  data () {
    return {
      userInfo: null,
      mobile: '18620343136',
      password: '199389',
      loading: false
    }
  },
  methods: {
    async handleClick () {
      this.loading = true;
      ynowApi.login({
        mobile: this.mobile,
        password: this.password
      }).then(res => {
        cookies.set('token', res.data.token);
        store.set('userInfo', res.data);
        this.$router.go(-1);
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.login-form {
  padding: 12px;
}
.login-button {
  margin-top: 20px;
}
.tip-text {
  float: left;
  margin-top: 10px;
}
.btm-wrap {
  color: #999;
  font-size: 14px;
}
.register-wrap {
  float: right;
  margin-top: 10px;
}
.register-link {
  color: #07c160;
}
</style>
