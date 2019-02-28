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
          <img :src="itemInfo.user.avatar">
        </div>
        <div>
          <div class="username">{{ itemInfo.user.nickname }}</div>
          <div class="remark">
            <span>{{ itemInfo.user.college }}</span>
            <span>{{ itemInfo.user.residence }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="group group-comment">
      <div class="title">留言</div>
      <div class="line"></div>
      <div class="list"></div>
    </div>
    <div class="group group-btm">
      <div :class="{'is-active': isLiked}" @click="toggle(2)">
        <van-icon class="icon" :name="isLiked ? 'like' : 'like-o'"/>
        <span>喜欢</span>
      </div>
      <div :class="{'is-active': isCollected}" @click="toggle(1)">
        <van-icon class="icon" :name="isCollected ? 'star' : 'star-o'"/>
        <span>收藏</span>
      </div>
      <div>
        <van-icon class="icon" name="chat-o"/>
        <span>留言</span>
      </div>
      <router-link class="btn-want" :to="'/chatItem/'+itemInfo.user.id">我想要</router-link>
    </div>
  </div>
</template>

<script>
import ynowApi from '../../api/ynow';
import { Swipe, SwipeItem, Toast } from 'vant';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

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
      isLiked: false,
      isCollected: false,
      likeData: null,
      collectData: null,
      current: 0,
      swiperOption: {
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    };
  },
  mounted () {
    ynowApi.getXzProductItem(this.$route.params.itemId).then(res => {
      this.itemInfo = res.data;
    });
    this.doGetXzProductCollectState(1);
    this.doGetXzProductCollectState(2);
  },
  methods: {
    onSwipeIndexChange (index) {
      this.current = index;
    },
    toggle (typeId) {
      if (typeId === 1) {
        if (this.isCollected) {
          this.doDeleteCollect(typeId);
        } else {
          this.doCreateCollet(typeId);
        }
      }
      if (typeId === 2) {
        if (this.isLiked) {
          this.doDeleteCollect(typeId);
        } else {
          this.doCreateCollet(typeId);
        }
      }
    },
    // 获取状态
    doGetXzProductCollectState (typeId) {
      ynowApi.getXzProductCollectState({ itemId: this.$route.params.itemId, typeId }).then(res => {
        if (typeId === 1) {
          this.isCollected = res.data.status === 1;
          this.collectData = res.data;
        }
        if (typeId === 2) {
          this.isLiked = res.data.status === 1;
          this.likeData = res.data;
        }
      }).catch(err => {
        console.log(err);
      });
    },
    // 常见收藏
    doCreateCollet (typeId) {
      if (typeId === 1 && this.isCollected) return;
      if (typeId === 2 && this.isLiked) return;
      ynowApi.createXzProductCollect({ itemId: this.$route.params.itemId, typeId }).then(res => {
        this.doGetXzProductCollectState(typeId);
      });
    },
    // 删除收藏
    doDeleteCollect (typeId) {
      let data = null;
      if (typeId === 1) {
        data = this.collectData;
      }
      if (typeId === 2) {
        data = this.likeData;
      }
      ynowApi.deleteXzProductCollect({ itemId: this.$route.params.itemId, typeId, recordId: data.id }).then(res => {
        if (res.errCode !== '0') {
          Toast(res.errMsg);
        }
        this.doGetXzProductCollectState(typeId);
      });
    }
  }
};
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
    width: 38px;
    height: 38px;
    border-radius: 4px;
  }
  .username {
    font-size: 13px;
    font-weight: 600;
    color: #000;
  }
  .remark {
    margin-top: 2px;
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
  position: relative;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  // justify-content: space-between;
  // justify-content: flex-end;
  height: 50px;
  padding: 0 10px;
  font-size: 12px;
  line-height: 20px;
  > div {
    display: flex;
    align-items: center;
    float: left;
    color: #333;
    margin-right: 12px;
  }
  .icon {
    font-size: 14px;
    margin-right: 4px;
    margin-top: -3px;
  }
  .btn-want {
    position: absolute;
    right: 10px;
    line-height: 18px;
    padding: 4px 10px;
    color: #fff;
    background-color: #ff5722;
  }
  .is-active {
    .icon {
      color: #ff5722;
    }
  }
}
</style>
