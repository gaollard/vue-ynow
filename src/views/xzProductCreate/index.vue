<template>
  <div class="view">
    <van-nav-bar
      title="我的收藏"
      left-text="返回"
      @click-left="$router.go(-1)"
    />
    <div class="content">
      <van-field v-model="form.name" placeholder="商品名称"/>
      <van-field v-model="form.price" placeholder="商品价格"/>
      <van-field v-model="form.depreciation" placeholder="商品成色"/>
      <van-field v-model="form.description" placeholder="商品描述"/>
      <van-field v-model="form.position" placeholder="商品交易所在城市"/>

      <div class="upload-wrap">
        <div class="preview-box" v-for="(item, index) in pickList" :key="index" >
          <img class="pre-item" :src="item.content"/>
          <div @click="removeItem(index)">
            <div>%{{ item.percent }}</div>
            <img class="icon-remove" src="./img/remove.png" alt="图片">
          </div>
        </div>
        <van-uploader class="touch-area" :after-read="onRead">
          <template v-show="pickList.length===0">
            <img class="icon-add" src="./img/add.png">
          </template>
        </van-uploader>
      </div>

      <van-cell title="是否上架">
        <van-switch v-model="checked"/>
      </van-cell>
    </div>
    <van-button class="btm-fixed" size="large" type="primary" @click="doCreateProduct">提交</van-button>
  </div>
</template>

<script>
import Vue from 'vue';
import { Field, NavBar, Switch, Cell, CellGroup, Uploader, Toast, Button } from 'vant';
import ynowApi from '../../api/ynow';
import * as qiniu from 'qiniu-js';

Vue
  .use(NavBar)
  .use(Field)
  .use(Switch)
  .use(Cell)
  .use(CellGroup)
  .use(Button)
  .use(Uploader);

export default {
  data () {
    return {
      checked: '',
      form: {
        price: '100000',
        name: '转让iphone6Splus64g 转让闲置iphone6splus64g玫瑰金！成色跟新机差不多！前后贴膜一直带后壳使',
        position: '北京东城区',
        description: '转让iphone6Splus64g 转让闲置iphone6splus64g玫瑰金！成色跟新机差不多！前后贴膜一直带后壳使',
        depreciation: '9成新'
      },
      pickList: [],
      token: ''
    };
  },
  mounted () {
    this.doGet7nToken();
  },
  methods: {
    onRead (file) {
      this.pickList.push(file);
      this.uploadImg(this.pickList.length - 1, file.file);
    },
    removeItem (index) {
      this.pickList.splice(index, 1);
    },
    doGet7nToken () {
      ynowApi.get7nToken().then(res => {
        this.token = res.data.token;
      });
    },
    uploadImg (index, file, callback) {
      const vm = this;
      const observable = qiniu.upload(file, file.name, this.token, { }, { });
      observable.subscribe({
        next (res) {
          vm.pickList[index]['percent'] = res.total.percent;
          vm.pickList = [].concat(vm.pickList);
        },
        error (error) {
          console.log(error);
          Toast(error);
        },
        complete (res) {
          vm.pickList[index]['url'] = `//c1.airtlab.com/${res.key}`;
          vm.pickList = [].concat(vm.pickList);
        }
      });
    },
    doCreateProduct () {
      let imgs = this.pickList.map(element => element.url);
      imgs = JSON.stringify(imgs);
      const params = Object.assign({
        imgs
      }, this.form);
      ynowApi.createXzProduct(params).then(res => {
        Toast('上传成功');
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.upload-wrap {
  float: right;
  padding: 20px 0;
  .touch-area,
  .pre-item {
    float: right;
    width: 80px;
    height: 80px;
    margin-right: 10px;
    margin-bottom: 10px;
    border: 1px solid #eee;
  }
  .icon-add {
    position: absolute;
    width: 30px;
    height: 30px;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
  .icon-remove {
    display: block;
    width: 24px;
    height: 24px;
    margin: 0 auto;
    margin-bottom: 20px;
  }
  .preview-box {
    float: right;
  }
}

.btm-fixed {
  position: absolute;
  bottom: 0;
}
</style>