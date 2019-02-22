<template>
  <div>
    <van-nav-bar
      title="我的资料"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-cell-group>
      <van-cell title="头像" value="内容" is-link/>
      <van-cell title="昵称" value="Gaollard" is-link/>
      <van-cell title="背景图" value="内容" is-link/>
      <van-cell title="性别" value="男" is-link/>
      <van-cell title="手机号码" value="18620343136" is-link/>
      <van-cell title="QQ绑定" value="1056834607" is-link/>
      <van-cell title="微信绑定" value="GaoXiong957" is-link/>
    </van-cell-group>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, Toast, Cell, CellGroup } from 'vant'
Vue.use(NavBar).use(Cell).use(CellGroup)

export default {
  methods: {
    onClickLeft () {
      Toast('返回')
    },
    onClickRight () {
      Toast('按钮')
    }
  }
}
</script>

<style>

</style>
