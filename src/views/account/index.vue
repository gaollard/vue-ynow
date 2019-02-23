<template>
  <div class="view-account">
    <div class="card-cover">
      <template v-if="userInfo">
        <img class="avatar" :src="userInfo.avatar">
        <div class="profile">
          <div class="nickname">{{ userInfo.nickname }}</div>
          <div class="mobile">{{ userInfo.mobile }}</div>
        </div>
        <!-- <div class="btn-set" @click="$router.push('/userInfo')">账户设置</div> -->
        <div class="btn-checkin">
          <span @click="handleCheckin">{{ checkinStatus ? '已签到' : '签到' }}</span>
        </div>
      </template>
      <template v-else>
        <div>加载中...</div>
      </template>
    </div>
    <div class="card-menu">
      <div>收藏</div>
      <div>关注</div>
      <div>订单</div>
      <router-link to="/point">积分</router-link>
      <router-link to="/checkin">签到</router-link>
    </div>
    <div class="card-link">
      <van-cell title="地址管理" to="/DeliveryAddress"/>
      <van-cell title="我的发布" to="/"/>
      <van-cell title="我的收藏" to="/collect"/>
      <van-cell title="我的喜欢" to="/"/>
      <van-cell title="账户设置" to="/userInfo"/>
      <van-cell title="立即登录" to="/login"/>
    </div>
  </div>
</template>

<script lang="ts">
import ynowApi from '../../api/ynow';

export default {
  data () {
    return {
      userInfo: null,
      checkinStatus: true
    };
  },
  mounted () {
    this.doGetUserInfo();
    this.doGetCheckInStatus();
  },
  methods: {
    doGetCheckInStatus () {
      ynowApi.getCheckinStatus().then(res => {
        this.checkinStatus = res.data.status === 1;
      });
    },
    doGetUserInfo () {
      ynowApi.getUserInfo().then(res => {
        this.userInfo = res.data;
      });
    },
    handleCheckin () {
      if (!this.checkinStatus) {
        ynowApi.checkin().then(res => {
          this.doGetCheckInStatus();
        });
      } else {
        this.$router.push('/checkin');
      }
    }
  }
};
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
</style>
