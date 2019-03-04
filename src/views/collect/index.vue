<template>
  <div class="view-point">
    <van-nav-bar
      title="我的收藏"
      left-text="返回"
      @click-left="onClickLeft"
    />
    <div class="content">
      <div class="list">
        <div class="item" v-for="(item, index) in list" :key="index" @click="switchPage('/xzProductItem/'+item.itemInfo.id)">
          <div class="item-logo" :style="{'background-image': 'url('+item.itemInfo.imgs[0]+')'}"></div>
          <div class="item-right">
            <div class="item-name">{{ item.itemInfo.name.substr(0, 45) }}</div>
            <div class="item-btm">
              <span class="item-price">￥{{ item.itemInfo.price / 100 }}</span>
              <span class="item-discount">{{ item.itemInfo.depreciation }}</span>
              <span class="item-postion">{{ item.itemInfo.position }}</span>
              <span class="item-btn" @click.stop="doDeleteXzProductCollect(item)">取消收藏</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { NavBar } from 'vant';
import ynowApi from '../../api/ynow';
Vue.use(NavBar);

export default {
  data () {
    return {
      list: []
    };
  },
  mounted () {
    this.doGetXzProductCollect();
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1);
    },
    switchPage (url) {
      this.$router.push(url);
    },
    doGetXzProductCollect () {
      ynowApi.getXzProductCollect({ typeId: 1 }).then(res => {
        this.list = res.data.list;
      });
    },
    doDeleteXzProductCollect (record) {
      ynowApi.deleteXzProductCollect({ recordId: record.id }).then(res => {
        this.doGetXzProductCollect();
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.view-point {
  min-height: 100vh;
  background: #eee;
}
.item {
  overflow: hidden;
  display: block;
  padding: 6px 12px;
  color: #333;
  background: #fff;
  border-radius: 4px;
  border-bottom: 1px solid #eee;
}
.item-logo {
  float: left;
  width: 80px;
  height: 80px;
  background-size: 100%;
  background-position: center;
  border-right: 1px solid #eee;
}

.item-name {
  margin-top: 6px;
  height: 44px;
  font-size: 12px;
}

.item-right {
  margin-left: 90px;
}

.item-btm {
  margin-top: 5px;
  font-size: 13px;
  color: #666;
}

.item-btn {
  float: right;
  font-size: 12px;
  padding: 4px;
  color: #fff;
  background: #ff5722;
  border-radius: 2px;
}
</style>
