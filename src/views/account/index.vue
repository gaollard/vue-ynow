<template>
  <div class="view-account">
    <div class="card-cover card-cover" v-if="userInfo">
      <img class="avatar" :src="userInfo.avatar || require('./img/avatar.png')" />
      <div class="profile">
        <div class="nickname">{{ userInfo.nickname }}</div>
        <div class="mobile">{{ userInfo.mobile }}</div>
      </div>
      <div class="btn-checkin">
        <span @click="handleCheckin">{{ checkinStatus ? '已签到' : '签到' }}</span>
      </div>
    </div>
    <div class="card-cover" v-else>
      <img class="avatar" src="./img/avatar.png">
      <div class="btn-login" @click="$router.push('/login')">登录/注册</div>
    </div>
    <div class="card-menu">
      <router-link to="/follow">关注</router-link>
      <router-link to="/collect">收藏</router-link>
      <router-link to="/like">喜欢</router-link>
      <router-link to="/point">积分</router-link>
      <router-link to="/order">订单</router-link>
    </div>
    <div class="card-link">
      <van-cell title="发布宝贝" to="/xzProductCreate" is-link />
      <van-cell title="我的发布" to="/myProdcust"  is-link />
      <van-cell title="地址管理" to="/DeliveryAddress" is-link />
      <van-cell title="账户设置" to="/userInfo" is-link />
      <van-cell title="立即登录" to="/login" is-link />
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'
import { mapState } from 'vuex'
import ynowApi from '../../api/ynow'

export default {
  data () {
    return {
      checkinStatus: true,
      isLoginValid: false
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo
    })
  },
  watch: {
    userInfo (val) {
      if (val) {
        this.initPageData()
      }
    }
  },
  methods: {
    async initPageData () {
      await this.doGetCheckInStatus()
    },
    async doGetCheckInStatus () {
      try {
        let ret = await ynowApi.getCheckinStatus()
        if (+ret.retCode === 0) {
          this.checkinStatus = +ret.data.status === 1
        } else {
          throw ret.errMsg
        }
      } catch (error) {
        Toast(error.toString())
      }
    },
    async doCheckIn () {
      try {
        let ret = await ynowApi.checkin()
        if (+ret.retCode === 0) {
          this.doGetCheckInStatus()
          return true
        } else {
          throw ret.errMsg
        }
      } catch (error) {
        Toast(error.toString())
      }
    },
    async handleCheckin () {
      if (!this.checkinStatus) {
        if (await this.doCheckIn()) {
          this.$router.push('/checkin')
        }
      } else {
        this.$router.push('/checkin')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.view-account {
  min-height: 100vh;
  background: #f5f5f5;
}
.card-cover {
  position: relative;
  display: flex;
  align-items: center;
  height: 160px;
  padding: 15px;
  color: #fff;
  background: #292727;
  background-size: 100%;
  box-sizing: border-box;
  .avatar {
    width: 60px;
    height: 60px;
    margin-right: 10px;
    border-radius: 50%;
  }
  .profile {
    text-align: left;
  }
  .nickname {
    font-size: 16px;
    font-weight: bold;
  }
  .mobile {
    font-size: 14px;
    margin-top: 6px;
  }
  .btn-set {
    position: absolute;
    right: 20px;
    top: 60px;
    font-size: 14px;
    line-height: 20px;
    padding: 5px 8px;
    border: 1px solid #999;
  }
  .btn-checkin {
    position: absolute;
    top: 70px;
    right: 20px;
    font-size: 14px;
    line-height: 20px;
    padding: 5px 8px;
    border: 1px solid #999;
  }
}

.card-menu {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  > * {
    flex: 1;
    font-size: 14px;
    padding: 10px 0;
    text-align: center;
    border: 1px solid #f5f5f5;
    border-right: 0;
    color: #333;
    &:first-child {
      border-left: 0;
    }
  }
}

.card-link {
  font-size: 14px;
  margin-top: 10px;
  background: #fff;
  .cell {
    display: block;
    padding: 10px 15px;
    line-height: 24px;
    color: #333;
    border-bottom: 1px solid #f5f5f5;
    box-sizing: border-box;
  }
}

.join-us {
  font-size: 12px;
  padding-top: 12px;
  text-align: center;
  font-weight: bold;
}
</style>
