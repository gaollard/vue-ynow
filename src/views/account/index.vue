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
      </template>
      <template v-else>
        <div>加载中...</div>
      </template>
    </div>
    <div class="card-menu">
      <div>收藏</div>
      <div>关注</div>
      <div>订单</div>
      <div>积分</div>
    </div>
    <div class="card-link">
      <router-link class="cell" to="/DeliveryAddress">地址管理</router-link>
      <div class="cell">银行卡管理</div>
      <div class="cell">帮助中心</div>
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
  mounted () {
    ynowApi.getUserInfo().then(res => {
      this.userInfo = res.data
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
}

.card-menu {
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  > div {
    flex: 1;
    font-size: 14px;
    padding: 10px 0;
    text-align: center;
    border: 1px solid #f5f5f5;
    border-right: 0;
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
