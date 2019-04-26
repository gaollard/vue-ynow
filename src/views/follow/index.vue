<template>
  <div class="view-follow">
    <van-nav-bar
      left-text="返回"
      left-arrow
      title="我的关注"
      @click-left="$router.go(-1)"
    />
    <div class="ui-content ui-content--full">
      <ul class="list">
        <li class="item" v-for="(item, index) in list" :key="index">
          <div class="ui-flex">
            <img class="item-avatar" :src="item.avatar" alt="">
            <span class="item-nickName">{{ item.nickName }}</span>
          </div>
          <span class="follow-btn">已关注</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, Toast } from 'vant'
import ynowApi from '../../api/ynow'
Vue.use(NavBar)

export default {
  data () {
    return {
      list: [],
      loading: false
    }
  },
  async mounted () {
    try {
      let ret = await ynowApi.getFollowList()
      console.log(ret)
    } catch (error) {
      console.log(error)
    }
    this.getDataList()
  },
  methods: {
    async getDataList () {
      Toast.loading('加载中...')
      let res = await ynowApi.getPointList()
      if (+res.errCode === 0) {
        let list = []
        for (let index = 0; index < 5; index++) {
          list.push({
            avatar: '//ci.xiaohongshu.com/e7eb4800-5850-3129-9196-af9a511849ba?imageView2/2/w/828/q/82/format/jpg',
            nickName: '花玉山'
          })
        }
        this.list = list
      }
      Toast.clear()
    }
  }
}
</script>

<style lang="scss" scoped>
.view-point {
  min-height: 100vh;
}
.item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 12px;
  background: #fff;
  font-size: 14px;
  &::after {
    content: " ";
    position: absolute;
    left: 15px;
    right: 0;
    bottom: 0;
    height: 1PX;
    background: #f5f5f5;
    transform: scaleY(0.5);
  }
  &-avatar {
    width: 45px;
    height: 45px;
    border-radius: 4px;
    margin-right: 10px;
  }
  .follow-btn {
    color: #aba6a6;
  }
}
</style>
