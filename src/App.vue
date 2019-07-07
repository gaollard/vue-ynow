<template>
  <div id="app">
    <van-tabbar
      class="tabbar"
      v-show="$route.meta.tabbar"
      v-model="activeIndex"
      @change="handleChange"
    >
      <van-tabbar-item icon="home-o" to="/">闲鸭</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/category">分类</van-tabbar-item>
      <van-tabbar-item icon="fire-o" to="/auction">竞拍</van-tabbar-item>
      <van-tabbar-item info="5" icon="chat-o" to="/chat">消息</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="/account">我的</van-tabbar-item>
    </van-tabbar>
    <router-view class="view" :class="[{ 'has-tabbar': $route.meta.tabbar }, $route.name]"/>
    <div class="login-pop" v-show="$store.state.user.showLoginPop">
      <span @click="$store.dispatch('user/closeLoginPop')">X</span>
      <LoginPop :onLogin="onLogin"></LoginPop>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { mapState } from 'vuex'
import { Tabbar, TabbarItem } from 'vant'
import LoginPop from './views/login'

Vue.use(Tabbar).use(TabbarItem)

export default {
  name: 'App',
  components: {
    LoginPop
  },
  data () {
    return {
      activeIndex: 0,
      currentRoute: null,
      previousRoute: null,
      nextRoute: null,
      translate: 'fade'
    }
  },
  computed: {
    ...mapState({
      isValidLogin: state => state.user.isValidLogin
    })
  },
  watch: {
    '$route': {
      handler (val) {
        this.currentRoute = val
      },
      immediate: true
    },
    isValidLogin: {
      handler (val) {
        if (val) {
          this.$store.dispatch('chat/initSocket')
          this.$store.dispatch('chat/getChatList')
        }
      },
      immediate: true
    }
  },
  methods: {
    handleChange (index) {
      this.activeIndex = index
    },
    onLogin () {
      this.$store.dispatch('user/closeLoginPop')
    }
  },
  mounted () {
    this.$store.dispatch('user/getUserInfo')
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /deep/ .van-tabbar-item--active {
    color: #c03131;
  }
}

.login-pop {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 998;
  background: #fff;
}

.has-tabbar {
  padding-bottom: 40px;
}

.tabbar {
  border-top: 1px solid #f5f5f5;
}

.fade-leave-active {
  transition: all .5s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
