<template>
  <div id="app">
    <van-tabbar class="tabbar" v-show="$route.meta.tabbar" v-model="activeIndex" @change="handleChange">
      <van-tabbar-item icon="home-o" to="/">闲鸭</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="fire-o" to="/auction">竞拍</van-tabbar-item>
      <van-tabbar-item info="5" icon="chat-o" to="/news">消息</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="/account">我的</van-tabbar-item>
    </van-tabbar>
    <router-view class="view" :class="{'has-tabbar': $route.meta.tabbar}"/>
  </div>
</template>

<script>
import Vue from 'vue';
import { Tabbar, TabbarItem } from 'vant';
Vue.use(Tabbar).use(TabbarItem);

export default {
  name: 'App',
  data () {
    return {
      activeIndex: 0
    };
  },
  methods: {
    handleChange (index) {
      this.activeIndex = index;
    }
  }
};
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
