<template>
  <div class="view">
    <div class="zero">
      暂无竞拍商品~
    </div>
    <div class="p-list">
      <router-link
        class="p-item"
        v-for="(item, index) in list"
        :key="index"
        :to="'/xzProductItem/' + item.id"
      >
        <div
          class="p-img"
          :style="{ backgroundImage: 'url(' + item.imgs[0] + ')' }"
        ></div>
        <div class="p-info">
          <p class="p-name">{{ item.name }}</p>
          <p class="p-price">￥{{ item.price / 100 }}</p>
        </div>
        <div class="line"></div>
        <div class="user-info">
          <span class="p-username">Gaollard</span>
          <span class="p-credit">信用良好</span>
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
    ynowApi.getXzProductList().then(res => {})
  }
}
</script>

<style lang="scss" scoped>
.view {
  min-height: 100vh;
  background-color: #eee;
}

.zero {
  color: #666;
  font-size: 13px;
  text-align: center;
  padding-top: 30px;
}

.p-list {
  overflow: hidden;
  padding: 12px;
}

.p-img {
  width: 100%;
  height: 120px;
  background-size: 100%;
  background-position: center;
}

.p-item {
  float: left;
  width: 170px;
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
  margin-left: 11px;
}

.p-name {
  text-align: justify;
  max-height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
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
