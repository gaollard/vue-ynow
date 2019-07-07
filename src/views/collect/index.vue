<template>
  <div class="view-point">
    <van-nav-bar
      :title="title"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <div class="content">
      <template v-if="objectId==1">
        <div class="list" >
          <div
            class="item xzProduct-item"
            v-for="(item, index) in list"
            :key="index"
            @click="switchPage('/xzProductItem/' + item.itemInfo.id)"
          >
            <div class="item-logo" :style="{'background-image': 'url(' + item.itemInfo.imgs[0] + ')'}"></div>
            <div class="item-right">
              <div class="item-name">{{ item.itemInfo.title.substr(0, 45) }}</div>
              <div class="item-btm">
                <span class="item-price">￥{{ item.itemInfo.price }}</span>
                <span class="item-discount">{{ item.itemInfo.depreciation }}</span>
                <span class="item-postion">{{ item.itemInfo.city }}</span>
                <span class="item-btn" @click.stop="doRemoveCollect(item)">{{ cancelText }}</span>
              </div>
            </div>
          </div>
        </div>
      </template>
      <template v-else-if="objectId==2">
        <ul class="demand-list">
          <li class="demand-item" v-for="(item, index) in list" :key="index" @click="switchItem(item.id)">
            <div class="demand-item__hd">
              <img class="demand-item__logo" src="https://zb.oschina.net/file/get?path=static/project-reward/cover/youxikaifa_2.png">
              <ul>
                <li class="title">{{ item.itemInfo.title }}</li>
                <li class="tags">
                  <span class="tag">程序开发</span>
                </li>
              </ul>
            </div>
            <div class="demand-item__bd">
              <div class="column">
                <span class="label">需求预算：</span>
                <span>￥{{ item.itemInfo.reward / 100 }}</span>
              </div>
              <div class="column">
                <span class="label">技能要求：</span>
                <span>{{ item.itemInfo.requires || '无任何要求' }}</span>
              </div>
            </div>
            <div class="demand-item__ft">
              <div class="ui-flex">
                <!-- <img class="demand-item__avatar" :src="item.userInfo.avatar"/> -->
                <!-- <div class="demand-item__name">{{ item.userInfo.mobile }}</div> -->
              </div>
              <div class="ui-flex">
                <van-icon class="arrow-right" name="friends" />
                <span>10人</span>
                <van-icon class="arrow-right" name="arrow" />
              </div>
            </div>
          </li>
        </ul>
      </template>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar } from 'vant'
import ynowApi from '../../api/ynow'
import xzProductCollectItem from '../../components/xzProductCollectItem'
Vue.use(NavBar)

export default {
  components: {
    xzProductCollectItem
  },
  data () {
    return {
      list: [],
      loading: false
    }
  },
  computed: {
    typeId () {
      return this.$route.query.typeId || 1
    },
    objectId () {
      return this.$route.query.objectId || 1
    },
    title () {
      return +this.typeId === 1 ? '我的收藏' : '我的点赞'
    },
    cancelText () {
      return +this.typeId === 1 ? '取消收藏' : '取消点赞'
    }
  },
  mounted () {
    this.doGetCollect()
  },
  methods: {
    switchPage (url) {
      this.$router.push(url)
    },
    async doGetCollect () {
      let ret = await ynowApi.getCollect({
        typeId: this.typeId,
        objectId: this.objectId
      })
      if (+ret.retCode === 0) {
        this.list = ret.data.list
      }
    },
    async doRemoveCollect (record) {
      let ret = await ynowApi.removeCollect({ recordId: record.id })
      if (+ret.retCode === 0) {
        this.doGetCollect()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  overflow: hidden;
  display: block;
  padding: 6px 12px;
  color: #333;
  background: #fff;
  border-radius: 4px;
  border-bottom: 1px solid #eee;
  &-logo {
    float: left;
    width: 80px;
    height: 80px;
    background-size: 100%;
    background-position: center;
    border-right: 1px solid #eee;
  }
  &-name {
    margin-top: 6px;
    height: 44px;
    font-size: 12px;
  }
  &-right {
    margin-left: 90px;
  }
  &-btm {
    margin-top: 5px;
    font-size: 13px;
    color: #666;
  }
  &-btn {
    float: right;
    font-size: 12px;
    padding: 4px;
    color: #fff;
    background: #ff5722;
    border-radius: 2px;
  }
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
</style>
