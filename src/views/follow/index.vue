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
        <li class="item"
          v-for="(item, index) in userList"
          :key="index"
          @click="switchUserProfile(item.userInfo)"
        >
          <div class="ui-flex">
            <img class="item-avatar" :src="item.userInfo.avatar">
            <span class="item-nickName">{{ item.userInfo.nickname }}</span>
          </div>
          <van-button class="follow-btn" @click.stop="cancleFollow(index)" size="small">取消关注</van-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, Toast, Button } from 'vant'
import ynowApi from '../../api/ynow'
Vue.use(NavBar).use(Button)

export default {
  data () {
    return {
      loading: false,
      userList: []
    }
  },
  async mounted () {
    this.initPageData()
  },
  methods: {
    // 获取关注列表
    async getDataList () {
      Toast.loading('加载中')
      this.loading = true
      try {
        let ret = await ynowApi.getFollowList()
        if (+ret.retCode === 0) {
          this.userList = ret.data.list
        } else {
          Toast(ret.errMsg)
        }
      } catch (error) {
        console.log(error)
      }
      Toast.clear()
      this.loading = false
    },

    // 跳转到用户简介界面
    async switchUserProfile (userInfo) {
      this.$router.push(`/user/profile/${userInfo.id}`)
    },

    // 取消关注
    async cancleFollow (index) {
      Toast.loading('加载中')
      try {
        let ret = await ynowApi.removeFollow({
          followId: this.userList[index].follow_id
        })
        if (+ret.retCode === 0) {
          Toast.success('取消成功')
          this.userList.splice(index, 1)
        } else {
          Toast(ret.errMsg)
        }
      } catch (error) {
        console.log(error)
      }
      Toast.clear()
    },

    // 加载页面数据
    async initPageData () {
      await this.getDataList()
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
