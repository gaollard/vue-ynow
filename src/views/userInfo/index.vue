<template>
  <div>
    <van-nav-bar
      title="我的资料"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-cell-group>
      <van-cell title="头像" value="无" is-link/>
      <van-cell title="昵称" :value="userInfo.nickname" is-link/>
      <van-cell title="背景图" value="无" is-link/>
      <van-cell title="性别" :value="userInfo.gender==1?'男':'女'" is-link/>
      <van-cell title="手机号码" :value="userInfo.mobile" is-link/>
      <van-cell title="电子邮箱" :value="userInfo.email" is-link/>
      <van-cell title="QQ绑定" value="无" is-link/>
      <van-cell title="微信绑定" value="无" is-link/>
    </van-cell-group>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, Toast, Cell, CellGroup } from 'vant'
import ynowApi from '../../api/ynow'
Vue.use(NavBar).use(Cell).use(CellGroup)

export default {
  data () {
    return {
      userInfo: {}
    }
  },
  methods: {
    onClickLeft () {
      Toast('返回')
    },
    onClickRight () {
      Toast('按钮')
    }
  },
  mounted () {
    ynowApi.getUserInfo().then(res => {
      this.userInfo = res.data
    })
  }
}
</script>

<style>

</style>
