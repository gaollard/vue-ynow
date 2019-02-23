<template>
  <div class="view-point">
    <van-nav-bar
      title="我的资料"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="content">
      <ul class="list">
        <li class="item" v-for="(item, index) in list" :key="index">
          <div class="item-date">{{ item.createTime.substr(0, 10) }}</div>
          <div class="item-value" :class="{'is-negative': !item.action}">{{ item.action ? '+' : '-' }}{{ item.value }}</div>
          <div class="item-desc">{{ item.description }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar } from 'vant'
import ynowApi from '../../api/ynow'
Vue.use(NavBar)

export default {
  data () {
    return {
      list: []
    }
  },
  mounted () {
    ynowApi.getPointList().then(res => {
      this.list = res.data.list
    })
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1);
    }
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
  border-radius: 4px;
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

.content {
  padding: 12px;
}
</style>
