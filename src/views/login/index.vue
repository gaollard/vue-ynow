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
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import ynowApi from '../../api/ynow'
import { Field } from 'vant'
import cookies from 'js-cookie'
import store from 'store'

@Component({
  components: {
    [Field.name]: Field
  }
})
export default class AccountView extends Vue {
  userInfo = null
  mobile = '18620343136'
  password = '199389'
  loading = false

  async handleClick () {
    this.loading = true
    ynowApi.login({
      mobile: this.mobile,
      password: this.password
    }).then(res => {
      cookies.set('token', res.data.token)
      store.set('userInfo', res.data)
      this.$router.go(-1)
    })
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
</style>
