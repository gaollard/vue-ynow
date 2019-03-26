<template>
  <div class="view">
    <van-nav-bar title="我的资料" @click-left="onClickLeft" />
    <ul class="list">
      <li class="item" v-for="(item, index) in list" :key="index">
        {{ item.date.substr(0, 10) }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { NavBar } from 'vant'
import ynowApi from '../../api/ynow'
Vue.use(NavBar)

export default {
  data () {
    return {
      list: []
    }
  },
  mounted () {
    ynowApi.getCheckinList().then(res => {
      this.list = res.data.list
    })
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss" scoped>
.view {
  background: #eee;
}
.list {
  overflow: hidden;
  padding: 12px;
}
.item {
  padding: 12px;
  background: #fff;
  margin-bottom: 10px;
}
</style>
