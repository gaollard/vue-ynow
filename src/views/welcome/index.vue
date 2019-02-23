<template>
  <div class="view-welcome">
    <Swipe class="swiper">
      <SwipeItem class="swiper-slide">1</SwipeItem>
      <SwipeItem class="swiper-slide">2</SwipeItem>
    </Swipe>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { Swipe, SwipeItem } from 'vant';

@Component({
  components: {
    Swipe,
    SwipeItem
  }
})
export default class WelcomeView extends Vue {
};
</script>

<style lang="scss" scoped>
.swiper {
  height: 180px;
}
.swiper-slide:nth-child(1) {
  background: #03a9f4;
}
.swiper-slide:nth-child(2) {
  background: #009688;
}
</style>
