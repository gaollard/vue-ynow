<template>
  <div class="view">
    <div class="filter">
      <ul>
        <li v-for="(item, index) in filterMenu" :key="index">
          <span>{{ item.text }}</span>
          <van-icon class="arrow-right" name="arrow-down" />
        </li>
      </ul>
    </div>
    <ul class="demand-list">
      <div class="loading" v-if="listLoading">加载中...</div>
      <li class="demand-item" v-for="(item, index) in list" :key="index" @click="switchItem(item.id)">
        <div class="demand-item__hd">
          <img class="demand-item__logo" src="https://zb.oschina.net/file/get?path=static/project-reward/cover/youxikaifa_2.png">
          <ul>
            <li class="title">{{ item.title }}</li>
            <li class="tags">
              <span class="tag">程序开发</span>
            </li>
          </ul>
        </div>
        <div class="demand-item__bd">
          <div class="column">
            <span class="label">需求预算：</span>
            <span>￥{{ item.reward / 100 }}</span>
          </div>
          <div class="column">
            <span class="label">技能要求：</span>
            <span>{{ item.requires || '无任何要求' }}</span>
          </div>
        </div>
        <div class="demand-item__ft">
          <div class="ui-flex">
            <img class="demand-item__avatar" :src="item.userInfo.avatar"/>
            <div class="demand-item__name">{{ item.userInfo.mobile }}</div>
          </div>
          <div class="ui-flex">
            <van-icon class="arrow-right" name="friends" />
            <span>10人</span>
            <van-icon class="arrow-right" name="arrow" />
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue'
import { Icon } from 'vant'
import ynowApi from '../../api/ynow'

Vue.use(Icon)

export default {
  data () {
    return {
      list: [],
      listLoading: false,
      filterMenu: [{
        text: '分类'
      }, {
        text: '标签'
      }, {
        text: '周期'
      }, {
        text: '地区'
      }]
    }
  },
  mounted () {
    this.getDataList()
  },
  methods: {
    switchItem (itemId) {
      this.$router.push(`/demand/${itemId}`)
    },
    async getDataList () {
      this.listLoading = true
      try {
        let ret = await ynowApi.getDemandList()
        if (+ret.retCode === 0) {
          this.list = ret.data.list
        }
      } catch (error) {
        console.log(error)
      }
      this.listLoading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.view {
  min-height: 100vh;
  background: #F4F7F9;
}

.loading {
  text-align: center;
  color: #48576A;
}

.demand-list {
  overflow: hidden;
  padding: 12px;
}

.demand-item {
  overflow: hidden;
  padding: 12px 12px;
  background: #fff;
  border-bottom: solid 1px #f5f5f5;
  margin-bottom: 10px;
  .tags {
    margin-top: 4px;
  }
  .tag {
    display: inline-block;
    padding: 2px 6px;
    font-size: 12px;
    color: #409eff;
    margin-right: 5px;
    background: rgba(64, 158, 255, .1);
  }
  &__logo {
    width: 55px;
    height: 55px;
    margin-right: 10px;
    background: #2a98ff;
  }
  &__avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
  &__hd {
    display: flex;
    align-items: center;
    font-size: 14px;
    line-height: 20px;
    font-weight: bold;
  }
  &__bd {
    font-size: 13px;
    line-height: 24px;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #48576A;
  }
  &__ft {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    color: #48576A;
    padding-top: 10px;
    border-top: 1px solid #E7EFF5;
  }
  &__name {
    margin-left: 4px;
  }
}

.filter {
  position: sticky;
  top: 0;
  ul {
    display: flex;
    color: #48576A;
  }
  li {
    flex: 1;
    font-weight: bold;
    font-size: 14px;
    line-height: 44px;
    text-align: center;
    background: #fff;
    border-bottom: solid 1px #f5f5f5;
  }
}
</style>
