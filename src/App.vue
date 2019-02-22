<template>
  <div id="app">
    <van-tabbar class="tabbar" v-show="$route.meta.tabbar">
      <!-- icon="home-o"  -->
      <van-tabbar-item to="/">闲鸭</van-tabbar-item>
      <!-- icon="bar-chart-o"  -->
      <van-tabbar-item to="/auction">竞拍</van-tabbar-item>
      <!-- icon="chat-o"  -->
      <van-tabbar-item info="5" to="/news">消息</van-tabbar-item>
      <!-- icon="manager-o"  -->
      <van-tabbar-item to="/account">我的</van-tabbar-item>
    </van-tabbar>
    <router-view class="view" :class="{'has-tabbar': $route.meta.tabbar}"/>
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

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.has-tabbar {
  padding-bottom: 40px;
}

.tabbar {
  border-top: 1px solid #f5f5f5;
}
</style>
