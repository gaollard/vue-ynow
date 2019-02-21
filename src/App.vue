<template>
  <div id="app">
    <van-tabbar>
      <van-tabbar-item icon="home-o" to="/">闲鸭</van-tabbar-item>
      <van-tabbar-item icon="bar-chart-o" to="/active">活动</van-tabbar-item>
      <van-tabbar-item icon="chat-o" info="5" to="/news">消息</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="/account">我的</van-tabbar-item>
    </van-tabbar>
    <router-view class="view"/>
  </div>
</template>

<script>
import Vue from 'vue'
import Navbar from './components/navbar/index.vue'
import { Tabbar, TabbarItem } from 'vant'

Vue.use(Tabbar).use(TabbarItem)

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
