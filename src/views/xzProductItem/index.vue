<template>
  <div class="view" v-if="itemInfo">
    <Swipe class="swiper" @change="onSwipeIndexChange">
      <SwipeItem class="swiper-slide" v-for="(item, index) in itemInfo.imgs" :key="index">
        <div class="p-slide-img" :style="{backgroundImage: 'url(' + item + ')'}"></div>
      </SwipeItem>
      <div class="custom-indicator" slot="indicator">
        {{ current + 1 }}/ {{ itemInfo.imgs.length }}
      </div>
    </Swipe>
    <div class="group group-price">
      <div class="price">
        <span>¥{{ itemInfo.price / 100 }}元</span>
        <span class="depreciation">{{ itemInfo.depreciation }}</span>
      </div>
      <div class="name">{{ itemInfo.name }}</div>
      <div class="line"></div>
      <div class="userInfo">
        <div class="avatar-wrap">
          <img src="//img.alicdn.com/imgextra/i2/2371776744/TB2Iu5CXc4IxuRkSS2eXXcguVXa_!!2371776744.jpg_760x760Q50s50.jpg_.webp">
        </div>
        <div>
          <div class="username">笨猪就是你啦</div>
          <div class="remark">诚信做人呀～</div>
        </div>
      </div>
    </div>
    <div class="group group-comment">
      <div class="title">留言</div>
      <div class="line"></div>
      <div class="list"></div>
    </div>
    <div class="group group-btm">
      <div>
        <span>喜欢</span>
      </div>
      <div>
        <span>留言</span>
      </div>
      <div>
        <span>收藏</span>
      </div>
    </div>
  </div>
</template>

<script>
import ynowApi from '../../api/ynow'
import { Swipe, SwipeItem } from 'vant'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
  components: {
    swiper,
    swiperSlide,
    Swipe,
    SwipeItem
  },
  data () {
    return {
      itemInfo: null,
      current: 0,
      swiperOption: {
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  mounted () {
    ynowApi.getXzProductItem(this.$route.params.itemId).then(res => {
      this.itemInfo = res.data
    })
  },
  methods: {
    onSwipeIndexChange (index) {
      this.current = index
    }
  }
}
</script>

<style lang="scss" scoped>
.view {
  overflow: hidden;
  min-height: 100vh;
  background-color: #f5f5f5;
}

.view /deep/ .swiper-pagination-bullet-active {
  transition: all 1s;
  background-color: #03a9f4;
}

.p-slide-img {
  display: block;
  width: 100%;
  height: 325px;
  background-size: 100%;
  background-position: center;
}

.custom-indicator {
  position: absolute;
  right: 10px;
  bottom: 10px;
  padding: 0 6px;
  font-size: 13px;
  color: #fff;
  background: #666;
  border-radius: 5px;
}

.group {
  margin-bottom: 10px;
  background: #fff;
}

.group-price {
  .price {
    display: flex;
    align-items: center;
    padding: 5px 10px;
    font-size: 16px;
    font-weight: 600;
    color: #FF0036;
  }
  .name {
    padding: 0 10px;
    font-size: 13px;
    line-height: 1.5;
  }
  .depreciation {
    margin-left: 10px;
    background-color: #fb6878;
    color: #FFF;
    font-size: 12px;
    padding: 0 2px;
    border-radius: 2px;
  }
  .line {
    height: 1px;
    margin-top: 10px;
    background: #f5f5f5;
  }
  .userInfo {
    display: flex;
    align-items: center;
    height: 60px;
    padding: 0 10px;
    font-size: 12px;
    color: #999;
  }
  .avatar-wrap {
    margin-right: 6px;
  }
  .avatar-wrap img {
    display: block;
    width: 35px;
    height: 35px;
    border-radius: 4px;
  }
  .username {
    font-size: 13px;
    font-weight: 600;
    color: #000;
  }
}

.group-comment {
  font-size: 13px;
  .title {
    padding: 0 10px;
    line-height: 40px;
    font-weight: bold;
  }
  .line {
    height: 1px;
    background: #f5f5f5;
  }
  .list {
    min-height: 90px;
  }
}

.group-btm {
  margin-bottom: 0;
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 10px;
  font-size: 12px;
  > div {
    margin-right: 10px;
  }
}
</style>
