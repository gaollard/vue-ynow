<template>
  <div class="view">
    <div class="p-list">
      <router-link
        class="p-item"
        v-for="(item, index) in list"
        :key="index"
        :to="'/xzProductItem/' + item.id"
      >
        <div>
          <div class="p-img" :style="{ backgroundImage: 'url(' + item.imgs[0] + ')' }"></div>
          <div class="p-info">
            <p class="p-name">{{ item.title }} {{ item.description }}</p>
            <p class="p-price">￥{{ item.price / 100 }}</p>
          </div>
          <div class="line"></div>
          <div class="user-info">
            <span class="p-username">{{ item.userInfo.nickname }}</span>
            <span class="p-credit">{{ item.userInfo.residence }}</span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import ynowApi from '../../api/ynow'
export default {
  data () {
    return {
      list: []
    }
  },
  mounted () {
    ynowApi.getXzProductList().then(res => {
      this.list = res.data.list
    })
  }
}
</script>

<style scoped>
.view {
  min-height: 100vh;
  background-color: #eee;
}

.p-list {
  overflow: hidden;
  padding: 12px;
  display: flex;
  flex-wrap: wrap;
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
  padding: 0 10px;
  font-size: 12px;
  line-height: 36px;
}

.p-credit {
  float: right;
}
</style>
