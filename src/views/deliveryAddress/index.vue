<template>
  <div class="view-deliveryAddress">
   <van-nav-bar
      title="收货地址"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="content">
      <ul class="list">
        <li class="item" v-for="(item, index) in list" :key="index">
          <div class="item__hd">
            <span class="username">{{ item.username }}</span>
            <span class="mobile">{{ item.mobile }}</span>
            <span class="remark">公司</span>
          </div>
          <div class="item__bd">
            <span>{{ item.province }}</span>
            <span>{{ item.city }}</span>
            <span>{{ item.district }}</span>
            <span>{{ item.address }}</span>
          </div>
          <div class="item__ft">
            <van-button class="btn btn-detail" plain type="primary" size="small">修改地址</van-button>
            <van-button class="btn btn-remove" plain type="primary" size="small" @click="handleRemove(item.id)">删除地址</van-button>
          </div>
        </li>
      </ul>
    </div>
    <div class="bottom-fixed">
      <button class="btn" @click="$router.push('/addAddress')">新建收货地址</button>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { NavBar, Toast, Button, Dialog } from 'vant';
import ynowApi from '../../api/ynow';
Vue.use(NavBar).use(Button);

export default {
  data () {
    return {
      list: []
    };
  },
  mounted () {
    this.doGetAddressList();
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1);
    },
    doGetAddressList () {
      ynowApi.getdeliveryAddressList().then(res => {
        this.list = res.data.list;
      });      
    },
    handleRemove (id) {
      Dialog.confirm({
        title: '标题',
        message: '删除之后不可恢复'
      }).then(() => {
        ynowApi.removeAddress({ id }).then(res => {
          if (+res.errCode === 0) {
            Toast('删除成功');
            this.doGetAddressList();
          } else {
            Toast(res.errMsg);
          }
        });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.view {
  background: #eee;
}

.content {
  padding-bottom: 50px;
}

.list {
  overflow: hidden;
}

.item {
  margin-bottom: 10px;
  background: #fff;
}

.item__hd {
  display: flex;
  align-items: center;
  font-size: 15px;
  line-height: 24px;
  padding: 10px 12px;
  font-weight: bold;
  .username {
    margin-right: 10px;
  }
  .remark {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    padding: 2px 4px;
    margin-left: 10px;
    color: #fff;
    background: #07c160;
    border-radius: 2px;
  }
}

.item__bd {
  font-size: 14px;
  line-height: 20px;
  padding: 10px 12px;
  color: #666;
  border-top: 1px solid #f5f5f5;
}

.item__ft {
  overflow: hidden;
  padding: 10px 12px;
  border-top: 1px solid #f5f5f5;
  .btn {
    float: right;
    margin-left: 10px;
  }
}

.bottom-fixed {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #fff;
  .btn {
    display: block;
    width: 100%;
    font-size: 16px;
    font-weight: bold;
    line-height: 44px;
    color: #fff;
    text-align: center;
    background: #07c160;
  }
}
</style>
