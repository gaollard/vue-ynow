<template>
  <div class="view">
    <!-- {{ itemInfo }} -->
    <div v-if="itemInfo">
      <swiper :options="swiperOption">
        <swiperSlide v-for="(item, index) in itemInfo.imgs" :key="index">
          <div class="p-slide-img" :style="{backgroundImage: 'url(' + item + ')'}"></div>
        </swiperSlide>
        <div v-show="itemInfo.imgs.length > 1" class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import ynowApi from '../../api/ynow'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      itemInfo: null,
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
  }
}
</script>

<style scoped>
.view {
  min-height: 100vh;
  background-color: #f5f5f5;
}

.view /deep/ .swiper-pagination-bullet-active {
  transition: all 1s;
  background-color: yellow;
}

.p-slide-img {
  display: block;
  width: 100%;
  height: 200px;
  background-size: 100%;
  background-position: center;
}
</style>
