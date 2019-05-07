<template>
  <div class="item xzProduct-collect-item">
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
</template>

<script>
export default {
  props: {
    item: Object,
    cancelText: String
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
</style>
