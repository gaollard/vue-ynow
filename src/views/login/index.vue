<template>
  <div class="view-login">
    <div class="form">
      <van-cell-group>
        <van-field v-model="mobile" placeholder="输入账户昵称" />
        <van-field v-model="password" placeholder="输入登录密码" type="password"/>
      </van-cell-group>
      <van-button
        class="button"
        type="primary"
        size="large"
        :loading="loading"
        :disabled="disabled"
        @click="handleClick">立即{{ authType === LOGIN_TYPE ? '登录' : '注册' }}</van-button
      >
      <div class="btm-wrap">
        <template v-if="authType===LOGIN_TYPE">
          <span>没有账户？</span>
          <span class="btn-toggle" @click="authType=REGISTER_TYPE">注册</span>
        </template>
        <template v-else>
          <span>已有账户？</span>
          <span class="btn-toggle" @click="authType=LOGIN_TYPE">登录</span>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Field, Button } from 'vant'
import { mapState } from 'vuex'

Vue.use(Field).use(Button)

const LOGIN_TYPE = 1
const REGISTER_TYPE = 2

export default {
  props: {
    onLogin: Function
  },
  data () {
    return {
      mobile: '',
      password: '',
      LOGIN_TYPE,
      REGISTER_TYPE,
      authType: LOGIN_TYPE
    }
  },
  computed: {
    ...mapState({
      loading: state => state.user.loading,
      userInfo: state => state.user.userInfo
    }),
    disabled () {
      return this.mobile.length !== 11 || this.password.length < 6
    },
    redirect () {
      return this.$route.query.redirect
    }
  },
  created () {
    if (this.$route.query.authType) {
      this.authType = this.$route.query.authType
    }
  },
  methods: {
    handleClick () {
      const dispatchName = this.authType === LOGIN_TYPE ? 'user/login' : 'user/register'
      this.$store.dispatch(dispatchName, {
        mobile: this.mobile,
        password: this.password,
        onSuccess: () => {
          if (this.onLogin) {
            return this.onLogin()
          }
          if (this.redirect) {
            this.$router.push(this.redirect)
          } else {
            this.$router.go(-1)
          }
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  padding: 12px;
}

.button {
  margin-top: 20px;
}

.btm-wrap {
  color: #999;
  font-size: 14px;
  margin-top: 10px;
  text-align: right;
}

.btn-toggle {
  color: #07c160;
}
</style>
