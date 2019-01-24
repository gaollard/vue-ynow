<template>
  <div class="view-deliveryAddress">
    <ul class="list">
      <li class="item" v-for="(item, index) in list" :key="index">
        <div class="item__hd">
          <span class="username">{{ item.username }}</span>
          <span class="mobile">{{ item.mobile }}</span>
          <span class="remark">公司</span>
        </div>
        <div class="item__bd">
          <span>{{ item.province }}</span>
          <span>{{ item.city }}</span>
          <span>{{ item.district }}</span>
          <span>{{ item.address }}</span>
        </div>
        <div class="item__ft">
          <button class="btn btn-detail">修改地址</button>
          <button class="btn btn-remove">删除地址</button>
        </div>
      </li>
    </ul>
    <div class="bottom-fixed">
      <button class="btn">新建收货地址</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import ynowApi from '../../api/ynow'

@Component
export default class AccountView extends Vue {
  list = null
  mounted () {
    ynowApi.getdeliveryAddressList().then(res => {
      this.list = res.data.list
    })
  }
}
</script>

<style lang="scss" scoped>
.list {
  overflow: hidden;
}

.item {
  margin-bottom: 8px;
  background: #fff;
}

.item__hd {
  display: flex;
  align-items: center;
  font-size: 15px;
  line-height: 20px;
  padding: 10px 12px;
  font-weight: bold;
  .username {
    margin-right: 10px;
  }
  .remark {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    padding: 2px 4px;
    margin-left: 10px;
    color: #fff;
    background: #009688;
    border-radius: 2px;
  }
}

.item__bd {
  font-size: 14px;
  line-height: 20px;
  padding: 10px 12px;
  color: #666;
  border-top: 1px solid #f5f5f5;
}

.item__ft {
  overflow: hidden;
  padding: 6px 12px;
  border-top: 1px solid #f5f5f5;
  .btn {
    float: right;
    font-size: 12px;
    line-height: 20px;
    padding: 3px 6px;
    margin-left: 10px;
    color: #333;
    background: #fff;
    border-radius: 1px;
    border: 1px solid #333;
  }
}

.bottom-fixed {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #fff;
  .btn {
    display: block;
    width: 100%;
    font-size: 16px;
    font-weight: bold;
    line-height: 44px;
    color: #fff;
    text-align: center;
    background: #009688;
  }
}
</style>
