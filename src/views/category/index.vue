<template>
  <div class="view">
    <div class="content">
      <div class="side">
        <ul class="list" v-if="list.length">
          <li class="item" v-for="(item, index) in list" :key="index" :data-cid="item.id">
            <span v-text="item.name"></span>
          </li>
        </ul>
        <div class="loading" v-else>
          <van-loading/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Loading } from 'vant';
import ynowApi from '../../api/ynow';
Vue.use(Loading);

export default {
  data () {
    return {
      list: []
    };
  },
  mounted () {
    ynowApi.getXzCategorytList().then(res => {
      setTimeout(() => {
        this.list = res.data.list;
      }, 500);
    });
  }
};
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
  background: #EEE;
  color: #9B9B9B;
  font-size: 14px;
  -webkit-overflow-scrolling : touch;

  .item {
    line-height: 44px;
    border-bottom: 1px solid #E1E1E1;
  }
  .loading {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
