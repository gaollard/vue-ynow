<template>
  <div class="view-point">
    <van-nav-bar
      title="我的宝贝"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <div class="content">
      <div class="list">
        <div
          class="item"
          v-for="(item, index) in list"
          :key="index"
          @click="switchPage('/xzProductItem/' + item.id)"
        >
          <div class="item__header">
            <div class="item-logo" :style="{'background-image': 'url(' + item.imgs[0] + ')'}"></div>
            <div class="item-right">
              <div class="item-name">{{ item.title }}</div>
              <div class="item-price">￥{{ item.price / 100 }}</div>
              <div class="item-tags">
                <span>留言0</span>
                <span>浏览0</span>
                <span>收藏0</span>
                <span>点赞0</span>
              </div>
            </div>
          </div>
          <div class="item__footer">
            <div class="item-state">已上架</div>
            <div class="">
              <van-button size="small" plain>下架</van-button>
              <van-button size="small" plain>删除</van-button>
              <van-button size="small" plain @click.stop="switchPage('/xzProductCreate?itemId=' + item.id)">编辑</van-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/**
 * 我的宝贝
 * 包含上架和未上架
 */
import Vue from 'vue'
import { NavBar, Button, Toast } from 'vant'
import ynowApi from '../../api/ynow'
Vue.use(NavBar).use(Button)

export default {
  data () {
    return {
      list: []
    }
  },
  async mounted () {
    this.doGetMyProduct()
  },
  methods: {
    switchPage (url) {
      this.$router.push(url)
    },
    async doGetMyProduct () {
      try {
        let ret = await ynowApi.getMyProduct()
        if (+ret.retCode === 0) {
          console.log(111)
          this.list = ret.data.list
          console.log(this.list)
        } else {
          Toast(ret.errMsg)
        }
      } catch (error) {
        console.log(error)
      }
    },
    // 删除我的宝贝
    async doDeleteXzProduct () {
      // let ret =
    },

    // 下架我的宝贝
    async doTakeOffXzProduct () {

    }
  }
}
</script>

<style lang="scss" scoped>
.view-point {
  min-height: 100vh;
  background: #eee;
}

.item {
  overflow: hidden;
  display: block;
  padding: 12px 12px;
  padding-bottom: 0;
  color: #333;
  background: #fff;
  margin-bottom: 8px;
  &__header {
    overflow: hidden;
    padding-bottom: 12px;
  }
  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 0;
    text-align: right;
    border-top: 1px solid #eee;
    /deep/ .van-button {
      margin-left: 8px;
    }
  }
  &-logo {
    float: left;
    width: 86px;
    height: 86px;
    background-size: 100%;
    background-position: center;
    border-right: 1px solid #eee;
  }
  &-right {
    margin-left: 98px;
  }
  &-price {
    margin-top: 4px;
  }
  &-name {
    margin-top: 2px;
    font-size: 15px;
    line-height: 24px;
    font-weight: bold;
  }
  &-tags {
    margin-top: 12px;
    font-size: 13px;
    color: #666;
  }
  &-state {
    font-size: 14px;
    color: #666;
  }
}
</style>
