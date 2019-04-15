<template>
  <div class="view-register">
    <div class="login-form">
      <van-cell-group>
        <van-field v-model="mobile" placeholder="输入账户昵称" />
        <van-field v-model="password" placeholder="输入登录密码" type="password"/>
      </van-cell-group>
      <van-button
        class="login-button"
        type="primary"
        size="large"
        :loading="loading"
        :disabled="disabled"
        @click="handleClick">立即注册</van-button
      >
      <div class="btm-wrap">
        <div class="register-wrap">
          <span>已有账户？</span>
          <router-link class="register-link" to="/login">登录</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import { Field, Button } from 'vant'
Vue.use(Field).use(Button)

export default {
  data () {
    return {
      mobile: '',
      password: ''
    }
  },
  computed: {
    ...mapState({
      loading: state => state.user.loading,
      userInfo: state => state.user.userInfo
    }),
    disabled () {
      return this.mobile.length !== 11 || this.password.length < 6
    }
  },
  methods: {
    async handleClick () {
      await this.$store.dispatch('user/register', {
        mobile: this.mobile,
        password: this.password,
        onSuccess: () => {
          this.$router.go(-1)
        }
      })
    }
  }
}
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
