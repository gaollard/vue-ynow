<template>
  <div class="view">
    <div class="content">
      <div class="side">
        <ul class="categoryList" v-if="categoryList.length">
          <li
            class="item"
            v-for="(item, index) in categoryList"
            :key="index"
            :data-cid="item.id"
            @click="onClickCate(item)"
          >
            <span v-text="item.name"></span>
          </li>
        </ul>
        <div class="loading" v-else>
          <van-loading />
        </div>
      </div>
      <div class="main">
        <ul class="product-list" v-if="productList.length">
          <li class="product-item" v-for="(item, index) in productList" :key="index">
            <router-link :to="'/xzProductItem/' + item.id">
              <div>
                <div class="p-img" :style="{ backgroundImage: 'url(' + item.imgs[0] + ')' }"></div>
                <div class="p-info">
                  <p class="p-name">{{ item.title }} {{ item.description }}</p>
                  <p class="p-price">￥{{ item.price / 100 }}</p>
                </div>
                <div class="line"></div>
                <div class="user-info">
                  <img class="p-avatar" :src="item.userInfo.avatar" alt="">
                  <span class="p-username">{{ item.userInfo.nickname }}</span>
                  <!-- <span class="p-credit">{{ item.userInfo.residence }}</span> -->
                </div>
              </div>
            </router-link>
          </li>
        </ul>
        <div v-else>
          <van-loading v-if="productListLoading"/>
          <div class="zero-list" v-else>暂无数据</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Loading, Toast } from 'vant'
import ynowApi from '../../api/ynow'

Vue.use(Loading)

export default {
  data () {
    return {
      categoryList: [],
      productList: [],
      productListLoading: false
    }
  },
  computed: {
    categoryId () {
      return this.$route.query.cid || 1
    }
  },
  watch: {
    categoryId (val) {
      this.doGetXzProductList()
    }
  },
  async mounted () {
    await this.doGetXzCategorytList()
    await this.doGetXzProductList()
  },
  methods: {
    // 获取分类列表
    async doGetXzCategorytList () {
      try {
        let ret = await ynowApi.getXzCategorytList()
        if (+ret.retCode === 0) {
          this.categoryList = ret.data.list
        } else {
          Toast(ret.errMsg)
        }
      } catch (error) {
        console.log(error)
      }
    },

    // 获取商品列表
    async doGetXzProductList () {
      this.productListLoading = true
      try {
        let ret = await ynowApi.getXzProductList({
          categoryId: this.categoryId
        })
        if (+ret.retCode === 0) {
          this.productList = ret.data.list
        } else {
          Toast(ret.errMsg)
        }
      } catch (error) {
        console.log(error)
      }
      this.productListLoading = false
    },

    // 点击分类
    onClickCate (obj) {
      this.$router.replace(`/category?cid=${obj.id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.view {
  padding-bottom: 0;
}

.content {
  display: flex;
  height: calc(100vh - 50px);
}

.side {
  overflow: auto;
  height: 100%;
  width: 84px;
  text-align: center;
  background: #eee;
  color: #9b9b9b;
  font-size: 13px;
  -webkit-overflow-scrolling: touch;
  .item {
    line-height: 44px;
    border-bottom: 1px solid #e1e1e1;
  }
  .loading {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.main {
  position: relative;
  overflow: hidden;
  flex: 1;
  height: 100%;
  background: #fff;
}

.product-list {
  overflow: hidden;
  // padding: 10px 14px;
  .product-item {
    width: 50%;
    // width: 124px;
    float: left;
    &:nth-child(odd) {
      // margin-right: -1px;
    }
  }
  /deep/ a {
    display: block;
    padding: 10px;
    padding-bottom: 4px;
    border-bottom: 1px solid #eee;
    border-right: 1px solid #eee;
  }
  .p-img {
    width: 100%;
    height: 120px;
    background-size: 100%;
    background-position: center;
  }
  .p-item {
    width: 48.4%;
    font-size: 14px;
    color: #000;
    background-color: #fff;
    box-sizing: border-box;
    margin-bottom: 10px;
  }
  .p-info {
    padding: 5px;
  }
  .p-item:nth-of-type(2n) {
    margin-left: 3.2%;
  }
  .p-name {
    font-size: 13px;
    color: #222;
    height: 40px;
    line-height: 20px;
    overflow: hidden;
    text-align: justify;
  }
  .p-price {
    font-size: 16px;
    font-weight: 600;
    color: #f44;
  }
  .line {
    padding: 2px 0;
    border-bottom: 0.5px solid #e6e6e6;
  }
  .user-info {
    display: flex;
    align-items: center;
    padding: 4px 0px;
    font-size: 12px;
    // line-height: 36px;
  }
  .p-credit {
    float: right;
  }
  .p-avatar {
    width: 24px;
    height: 24px;
    margin-right: 6px;
    border-radius: 50%;
  }
}

.zero-list {
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999;
}
</style>
