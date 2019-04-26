<template>
  <div class="view" v-if="userInfo">
    <div class="card-banner">
      <div class="blur-bg" :style="stl"></div>
      <div class="box">
        <div class="userInfo">
          <img class="avatar" :src="userInfo.avatar">
          <p class="account">{{ userInfo.nickname }}</p>
          <p class="nickname">昵称：独到之处找我</p>
        </div>
        <div class="desc">现居{{ userInfo.residence }}，{{ userInfo.college }}毕业。</div>
        <div class="ui-flex assets">
          <div>50超赞</div>
          <div>2关注</div>
          <div>57粉丝</div>
        </div>
        <van-button class="follow" size="small" type="primary" @click="handleFollow">+关注</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { Button, Toast } from 'vant'
import ynowApi from '../../api/ynow'

export default {
  comments: {
    [Button.name]: Button
  },
  data () {
    return {
      userInfo: null
    }
  },
  computed: {
    stl () {
      return {
        'background-image': `url(${this.userInfo.avatar})`
      }
    }
  },
  mounted () {
    this.doGetUserProfile()
  },
  methods: {
    /**
     * 获取用户介绍信息
     */
    async doGetUserProfile () {
      try {
        let ret = await ynowApi.getUserProfile({
          uid: this.$route.params.userId
        })
        if (+ret.retCode === 0) {
          this.userInfo = ret.data
        } else {
          Toast(ret.errMsg)
        }
      } catch (error) {
        console.log(error)
      }
    },

    /**
     * 添加关注
     */
    async handleFollow () {
      try {
        let ret = await ynowApi.addFollow({
          followId: this.$route.params.userId
        })
        if (+ret.retCode === 0) {
          Toast.success('添加成功')
        } else {
          Toast(ret.errMsg)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card-banner {
  position: relative;
  height: 200px;
  .blur-bg {
    height: 100%;
    filter: blur(2px);
    background-size: 100%;
  }
  .box {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    font-size: 14px;
    line-height: 18px;
    padding-top: 30px;
    color: #fff;
    background: rgba(0, 0, 0, .4);
  }
  .avatar {
    float: left;
    width: 50px;
    height: 50px;
    border-radius: 2px;
    margin-right: 10px;
  }
  .desc {
    margin-top: 20px;
  }
  .assets {
    margin-top: 18px;
    > div {
      margin-right: 10px;
    }
  }
  .account {
    font-size: 18px;
    font-weight: bold;
  }
  .userInfo {
    overflow: hidden;
  }
  .nickname {
    margin-top: 14px;
  }
  .follow {
    position: absolute;
    top: 40px;
    right: 20px;
  }
}
</style>
