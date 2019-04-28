<template>
  <div class="view">
    <van-nav-bar
      title="发布闲置"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <div class="content">
      <!-- 填写标题 -->
      <van-field v-model="form.title" placeholder="标题(品牌型号都是买家喜欢搜索的关键词)" />
      <!-- 填写价格 -->
      <van-field v-model="form.price" placeholder="价格(单位为元)" />
      <!-- 成色 -->
      <van-field v-model="form.depreciation" placeholder="成色(1-100)" type="number" />
      <!-- 填写描述 -->
      <van-field v-model="form.description" placeholder="描述(入手渠道使用感受等)" type="textarea" />
      <!-- 选择分类 -->
      <van-field
        v-model="form.categoryName"
        placeholder="分类(有助于买家快速筛选)"
        :readonly="true"
        :is-link="true"
        @click.native="showCategoryPicker=true"
      />
      <!-- 选择交易方式 -->
      <van-field
        v-model="form.tradeWayName"
        placeholder="交易方式"
        :readonly="true"
        :is-link="true"
        @click.native="showTradeWayPicker=true"
      />
      <!-- 选择交易方式 -->
      <van-field
        v-model="form.city"
        placeholder="宝贝所在城市"
        :readonly="true"
        :is-link="true"
        @click.native="showCityPicker=true"
      />
      <!-- 上传图片 -->
      <div class="upload-wrap">
        <div class="preview-box" v-for="(item, index) in pickList" :key="index">
          <img class="pre-item" :src="item.content" />
          <div @click="removeItem(index)">
            <div>%{{ item.percent }}</div>
            <img class="icon-remove" src="./img/remove.png" alt="图片" />
          </div>
        </div>
        <van-uploader class="touch-area" :after-read="onRead">
          <template v-show="pickList.length === 0">
            <img class="icon-add" src="./img/add.png" />
          </template>
        </van-uploader>
      </div>
      <van-cell class="ui-flex" title="是否上架">
        <van-switch v-model="checked" />
      </van-cell>
    </div>

    <van-button
      class="btm-fixed"
      size="large"
      type="primary"
      @click="handleSubmit">提交</van-button>

    <!-- 分类picker -->
    <categoryPicker v-model="showCategoryPicker" @on-change="onCategoryChange" />
    <!-- 交易方式picker -->
    <tradeWayPicker v-model="showTradeWayPicker" @on-change="onTradeWayChange" />
    <!-- 选择城市picker -->
    <cityPicker v-model="showCityPicker" @on-confirm="onCityChange" />

    <van-dialog v-model="showFormError" title="您提交的参数不规范">
      <ul class="error-list">
        <li v-for="(item, index) in errors" :key="index">{{ index + 1 }}. {{ item }}</li>
      </ul>
    </van-dialog>
  </div>
</template>

<script>
import Vue from 'vue'
import {
  Field,
  NavBar,
  Switch,
  Cell,
  CellGroup,
  Uploader,
  Toast,
  Button,
  Dialog
} from 'vant'
import ynowApi from '../../api/ynow'
import * as qiniu from 'qiniu-js'
import cityPicker from '../../components/cityPicker'
import categoryPicker from '../../components/categoryPicker'
import tradeWayPicker from '../../components/tradeWayPicker'

Vue.use(NavBar)
  .use(Field)
  .use(Switch)
  .use(Cell)
  .use(CellGroup)
  .use(Button)
  .use(Uploader)
  .use(Dialog)

export default {
  components: {
    cityPicker,
    categoryPicker,
    tradeWayPicker
  },
  data () {
    return {
      checked: '',
      form: {
        price: '',
        title: '',
        city: '',
        description: '',
        depreciation: '',
        categoryId: '',
        categoryName: '',
        tradeWayId: '',
        tradeWayName: ''
      },
      pickList: [],
      token: '',
      categoryValue: null,
      showCategoryPicker: false,
      tradeWayPickerValue: null,
      showTradeWayPicker: false,
      cityPickerValue: null,
      showCityPicker: false,
      errors: [],
      showFormError: false
    }
  },
  mounted () {
    this.doGet7nToken()
  },
  methods: {
    onRead (file) {
      this.pickList.push(file)
      this.uploadImg(this.pickList.length - 1, file.file)
    },
    removeItem (index) {
      this.pickList.splice(index, 1)
    },
    async doGet7nToken () {
      try {
        let ret = await ynowApi.get7nToken()
        if (+ret.errCode === 0) {
          this.token = ret.data.token
        } else {
          Toast(ret.errMsg)
        }
      } catch (error) {
        console.log(error)
      }
    },
    uploadImg (index, file, callback) {
      const vm = this
      const observable = qiniu.upload(file, file.name, this.token, {}, {})
      observable.subscribe({
        next (res) {
          vm.pickList[index]['percent'] = res.total.percent
          vm.pickList = [].concat(vm.pickList)
        },
        error (error) {
          console.log(error)
          Toast(error)
        },
        complete (res) {
          vm.pickList[index]['url'] = `//c1.airtlab.com/${res.key}`
          vm.pickList = [].concat(vm.pickList)
        }
      })
    },
    async doCreateProduct () {
      try {
        let imgs = this.pickList.map(element => element.url)
        imgs = JSON.stringify(imgs)
        const params = {
          ...this.form,
          imgs: imgs
        }
        let ret = await ynowApi.createXzProduct(params)
        if (+ret.errCode === 0) {
          Toast.success('发布成功')
        } else {
          Toast(ret.errMsg)
        }
      } catch (error) {
        console.log(error)
      }
    },
    handleSubmit () {
      const form = this.form
      const errors = this.errors
      if (form.title.length < 5) {
        errors.push('标题长度不能小于5')
      }
      if (form.price.length === 0) {
        errors.push('价格不能为空')
      }
      if (form.city.length === 0) {
        errors.push('宝贝所在城市不能为空')
      }
      if (form.depreciation.length === 0) {
        errors.push('宝贝成色不能为空')
      }
      if (form.categoryId.length === 0) {
        errors.push('宝贝分类不能为空')
      }
      if (form.tradeWayId.length === 0) {
        errors.push('交易方式不能为空')
      }
      if (this.pickList.length < 2) {
        errors.push('宝贝图片不能小于2张')
      }

      this.showFormError = !!errors.length
      if (!this.showFormError) {
        this.doCreateProduct()
      }
    },
    onCategoryChange (data) {
      this.categoryValue = data
      this.form.categoryId = data.id
      this.form.categoryName = data.name
    },
    onTradeWayChange (data) {
      this.tradeWayPickerValue = data
      this.form.tradeWayId = data.id
      this.form.tradeWayName = data.name
    },
    onCityChange (data) {
      this.cityPickerValue = data
      let values = []
      data.forEach(element => {
        values.push(element.name)
      })
      this.form.city = values.join(' ')
    }
  }
}
</script>

<style lang="scss" scoped>
.ui-flex {
  display: flex;
  align-items: center;
  /deep/ .van-cell__value {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}

.error-list {
  padding: 14px 20px;
  font-size: 14px;
  color: #999;
}

// 图片上传
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
