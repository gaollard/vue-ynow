<template>
  <div class="view-account">
    <div class="card-cover">
      <template v-if="userInfo">
        <img class="avatar" :src="userInfo.avatar">
        <div class="profile">
          <div class="nickname">{{ userInfo.nickname }}</div>
          <div class="mobile">{{ userInfo.mobile }}</div>
        </div>
        <div class="btn-set">账户设置</div>
        <div class="btn-checkin">
          <span>{{ checkinStatus ? '已签到' : '签到' }}</span>
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
      <van-cell title="地址管理" is-link to="/DeliveryAddress"/>
      <van-cell title="帮助中心" is-link to="/DeliveryAddress"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import ynowApi from '../../api/ynow'

@Component
export default class AccountView extends Vue {
  userInfo = null
  checkinStatus = true

  mounted () {
    ynowApi.getUserInfo().then(res => {
      this.userInfo = res.data
    })
    ynowApi.getCheckinStatus().then(res => {
      this.checkinStatus = res.data.status === 1
    })
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
  background: #607d8b;
  background: url(http://mstaticc.xianghuanji.com/react/_next/static/images/topbg1-7d30d227cde19cd9af765d3a7ded9ad8.png);
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
    top: 100px;
    right: 10px;
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
