<template>
  <div class="view">
    <!-- 顶部固定 -->
    <div class="header">
      <div class="search-bar">
        <div class="form">
          <van-icon class="icon-search" name="search" />
          <span class="input">搜索商品名称</span>
        </div>
      </div>
      <div class="category-list-wrapper">
        <CategoryList></CategoryList>
      </div>
    </div>

    <!-- 广告轮播 -->
    <Swipe class="swiper">
      <SwipeItem class="swiper-slide">
        <img
          src="https://mall.s.maizuo.com/8a855cd423c6681966e44ed713960ba3.jpg?x-oss-process=image/resize,w_563"
          alt
        />
      </SwipeItem>
      <SwipeItem class="swiper-slide">
        <img
          src="https://mall.s.maizuo.com/eaa6acda0f1bc0f1c2bcf2c85ef4e388.jpg?x-oss-process=image/resize,w_563"
          alt
        />
      </SwipeItem>
    </Swipe>

    <!-- 闲置列表 -->
    <XzProduct></XzProduct>
  </div>
</template>

<script>
import { Icon, Swipe, SwipeItem } from 'vant'
import ynowApi from '../../api/ynow'
import XzProduct from './product-list'
import CategoryList from './category-list'

export default {
  components: {
    [Icon.name]: Icon,
    Swipe,
    SwipeItem,
    XzProduct,
    CategoryList
  },
  data () {
    return {
      list: [],
      categoryList: [
        {
          name: '推荐'
        },
        {
          name: '生鲜'
        },
        {
          name: '推荐'
        },
        {
          name: '生鲜'
        },
        {
          name: '推荐'
        },
        {
          name: '生鲜'
        },
        {
          name: '推荐'
        },
        {
          name: '生鲜'
        }
      ]
    }
  },
  mounted () {
    ynowApi.getXzProductList().then(res => {
      this.list = res.data.list
    })
  }
}
</script>

<style lang="scss" scoped>
.view {
  padding-top: 74px;
}
.swiper {
  height: 180px;
  img {
    display: block;
    width: 100%;
  }
  /deep/ .van-swipe__indicators {
    left: auto;
    right: 0;
  }
  /deep/ .van-swipe__indicator {
    width: 5px;
    height: 5px;
    border: 1px solid hsla(0, 0%, 100%, 0.8);
    background: hsla(0, 0%, 100%, 0);
    opacity: 1;
    box-sizing: border-box;
  }
  /deep/ .van-swipe__indicator--active {
    background: #fff;
  }
}

.search-bar {
  height: 44px;
  padding: 7px 15px;
  background: #fff;
  box-sizing: border-box;
  .form {
    box-sizing: border-box;
    position: relative;
    display: flex;
    align-items: center;
    height: 30px;
    line-height: 30px;
    width: 100%;
    z-index: 1;
    border-radius: 3px;
    background: #f4f4f4;
  }
  .icon-search {
    margin-left: 6px;
  }
  .input {
    padding-left: 8px;
    font-size: 14px;
    color: #888b8e;
  }
}

.category-list-wrapper {
  overflow: hidden;
  background: #fff;
}

.category-list {
  overflow: hidden;
  height: 30px;
  line-height: 30px;
  li {
    float: left;
    padding: 0 15px;
    font-size: 14px;
    color: #797d82;
    text-align: center;
  }
}

.header {
  z-index: 5;
  position: fixed;
  width: 100%;
  top: 0;
}

.goods-topic {
  height: 200px;
  padding: 0 15px;
  margin-bottom: 10px;
  background: #fff;
  &__hd {
    height: 46px;
    line-height: 46px;
  }
}

.g-list {
  overflow: hidden;
}

.g-list-right {
  margin-left: 10px;
}

.g-item {
  float: left;
  width: 167px;
  .g-pic {
    width: 100%;
    height: 120px;
    background-size: 100%;
    background-position: center;
  }
  img {
    display: block;
    width: 100%;
  }
}
</style>
