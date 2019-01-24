<template>
  <div class="view-point">
    <ul class="list">
      <li class="item" v-for="(item, index) in list" :key="index">
        <div class="item-date">{{ item.createTime.substr(0, 10) }}</div>
        <div class="item-value" :class="{'is-negative': !item.action}">{{ item.action ? '+' : '-' }}{{ item.value }}</div>
        <div class="item-desc">{{ item.description }}</div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import ynowApi from '../../api/ynow'

@Component
export default class AccountView extends Vue {
  list = []
  mounted () {
    ynowApi.getPointList().then(res => {
      this.list = res.data.list
    })
  }
}
</script>

<style lang="scss" scoped>
.view-point {
  min-height: 100vh;
  background: #eee;
}
.list {
  overflow: hidden;
}
.item {
  padding: 6px 12px;
  margin-bottom: 10px;
  background: #fff;
}
.item-date {
  font-size: 14px;
  line-height: 24px;
  font-weight: bold;
  &.is-negative {
    color: #ccc;
  }
}
.item-value {
  float: right;
  margin-top: -14px;
  color: #f44;
}
.item-desc {
  font-size: 12px;
  margin-top: 4px;
  margin-bottom: 4px;
  color: #666;
}
</style>
