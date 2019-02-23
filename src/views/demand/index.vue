<template>
  <div class="view">
    <div class="filter">
      <ul>
        <li>赏金</li>
        <li>类别</li>
        <li>信用</li>
        <li>地区</li>
      </ul>
    </div>
    <ul class="demand-list">
      <li class="demand-item" v-for="(item, index) in list" :key="index">
        <div class="demand-item__hd">
          <span class="username">{{ item.title }}</span>
        </div>
        <div class="demand-item__bd">{{ item.description }}</div>
        <div class="demand-item__ft"></div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import ynowApi from '../../api/ynow';

@Component
export default class AccountView extends Vue {
  list = null
  mounted () {
    ynowApi.getDemandList().then(res => {
      this.list = res.data.list;
    });
  }
};
</script>

<style lang="scss" scoped>
.view {
  min-height: 100vh;
  background: #fff;
}

.demand-item {
  overflow: hidden;
  padding: 18px 24px;
  background: #fff;
  border-bottom: solid 1px #f5f5f5;
}

.demand-item__hd {
  display: flex;
  align-items: center;
  font-size: 16px;
  line-height: 20px;
  // padding: 10px 0;
  // padding-top: 10px;
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

.demand-item__bd {
  font-size: 13px;
  line-height: 20px;
  // padding: 10px 0;
  padding-top: 10px;
  color: #b2bac2;
}

.filter {
  ul {
    display: flex;
  }
  li {
    flex: 1;
    font-weight: bold;
    font-size: 16px;
    line-height: 44px;
    color: #009688;
    text-align: center;
    background: #fff;
    border-bottom: solid 1px #f5f5f5;
  }
}
</style>
