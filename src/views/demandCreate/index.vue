<template>
  <div class="view">
    <van-nav-bar
      title="发布需求"
      left-text="返回"
      left-arrow
      @click-left="$router.go(-1)"
    />
    <div class="content">
      <!-- 填写标题 -->
      <van-field v-model="form.title" placeholder="标题(搜索的关键词)" />

      <!-- 填写价格 -->
      <van-field v-model="form.reward" placeholder="悬赏金额(单位为元)" />

      <!-- 成色 -->
      <van-field v-model="form.requires" placeholder="您对竞标者的要求" />

      <!-- 填写描述 -->
      <van-field v-model="form.description" placeholder="需求描述" type="textarea" />

      <!-- 选择分类 -->
      <van-field
        v-model="categoryName"
        placeholder="分类(有助于快速筛选)"
        :readonly="true"
        :is-link="true"
        @click.native="showCategoryPicker=true"
      />

      <!-- 选择所在城市 -->
      <van-field
        v-model="form.city"
        placeholder="完成需求所在的城市"
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

    <!-- 提交按钮 -->
    <van-button
      class="btm-fixed"
      size="large"
      type="primary"
      @click="handleSubmit">提交</van-button>

    <!-- 分类picker -->
    <categoryPicker v-model="showCategoryPicker" @on-confirm="onCategoryChange" @on-cancel="showCategoryPicker=false" />

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
import { mapState } from 'vuex'
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
import { tradeWay } from '../../config'

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
        reward: '10000',
        title: '求开发一款跑腿APP',
        city: '北京 北京市 东城区',
        description: '完成UU跑腿的80*功能即可，可以在线接单收款等功能。',
        requires: '具有Java开发经验',
        categoryId: '',
        categoryName: '',
        tradeWayId: '',
        tradeWayName: ''
      },
      pickList: [],
      token: '',
      // 分类 picker
      categoryValue: null,
      showCategoryPicker: false,
      // 交易方式 picker
      tradeWayPickerValue: null,
      showTradeWayPicker: false,
      // 所在城市 picker
      cityPickerValue: null,
      showCityPicker: false,
      // 表单校验结果
      errors: [],
      showFormError: false
    }
  },
  computed: {
    ...mapState({
      categoryList: state => state.xzProduct.category.list
    }),
    tradeWayName () {
      const findIndex = tradeWay.findIndex(element => +element.id === +this.form.tradeWayId)
      if (findIndex !== -1) {
        return tradeWay[findIndex].name
      } else {
        return ''
      }
    },
    categoryName () {
      const findIndex = this.categoryList.findIndex(element => +element.id === +this.form.categoryId)
      if (findIndex !== -1) {
        return this.categoryList[findIndex].name
      } else {
        return ''
      }
    }
  },
  mounted () {
    this.doGet7nToken()
    if (this.$route.query.itemId) {
      this.doGetXzProductItem()
    }
    if (!this.categoryList.length) {
      this.$store.dispatch('xzProduct/getCategory')
    }
  },
  methods: {
    // 选择图片
    onRead (file) {
      this.pickList.push(file)
      this.uploadImg(this.pickList.length - 1, file.file)
    },

    // 删除图片
    removeItem (index) {
      this.pickList.splice(index, 1)
    },

    // 获取七牛云token
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

    // 获取商品信息
    async doGetXzProductItem () {
      try {
        let ret = await ynowApi.getXzProductItem(this.$route.query.itemId)
        if (+ret.retCode === 0) {
          this.itemInfo = ret.data
          this.form.reward = +this.itemInfo.reward / 100
          this.form.title = this.itemInfo.title
          this.form.city = this.itemInfo.city
          this.form.description = this.itemInfo.description
          this.form.requires = this.itemInfo.requires
          this.form.categoryId = this.itemInfo.category_id
          this.form.tradeWayId = this.itemInfo.trade_way_id
          this.pickList = this.itemInfo.imgs.map(element => {
            return {
              url: element,
              content: element,
              percent: 100
            }
          })
        } else {
          Toast(ret.errMsg)
        }
      } catch (error) {
        console.log(error)
      }
    },

    // 上传图片
    uploadImg (index, file, callback) {
      const vm = this
      const observable = qiniu.upload(file, file.name, this.token, {}, {})
      observable.subscribe({
        next (res) {
          vm.pickList[index]['percent'] = res.total.percent
          vm.pickList = [].concat(vm.pickList)
        },
        error (error) {
          Toast(error)
        },
        complete (res) {
          vm.pickList[index]['url'] = `//c1.airtlab.com/${res.key}`
          vm.pickList = [].concat(vm.pickList)
        }
      })
    },

    // 创建
    async doCreate () {
      try {
        let imgs = this.pickList.map(element => element.url)
        imgs = JSON.stringify(imgs)
        const params = {
          ...this.form,
          imgs: imgs,
          reward: +this.form.reward * 100
        }
        console.log(params)
        let ret = await ynowApi.createDemand(params)
        if (+ret.errCode === 0) {
          Toast.success('发布成功')
        } else {
          Toast(ret.errMsg)
        }
      } catch (error) {
        console.log(error)
      }
    },

    // 修改
    async doUpdateProduct () {
      try {
        let imgs = this.pickList.map(element => element.url)
        imgs = JSON.stringify(imgs)
        const params = {
          ...this.form,
          imgs: imgs,
          itemId: this.$route.query.itemId,
          reward: +this.form.reward * 100
        }
        let ret = await ynowApi.updateXzProduct(params)
        if (+ret.errCode === 0) {
          Toast.success('发布成功')
        } else {
          Toast(ret.errMsg)
        }
      } catch (error) {
        console.log(error)
      }
    },

    // 参数校验
    handleSubmit () {
      const form = this.form
      const errors = []
      if (form.title.length < 5) {
        errors.push('标题长度不能小于5')
      }
      if (form.reward.length === 0) {
        errors.push('价格不能为空')
      }
      if (form.city.length === 0) {
        errors.push('宝贝所在城市不能为空')
      }
      // if (form.requires.length === 0) {
      //   errors.push('宝贝成色不能为空')
      // }
      if (form.categoryId.length === 0) {
        errors.push('宝贝分类不能为空')
      }
      // if (form.tradeWayId.length === 0) {
      //   errors.push('交易方式不能为空')
      // }
      // if (this.pickList.length < 2) {
      //   errors.push('宝贝图片不能小于2张')
      // }
      this.errors = errors
      this.showFormError = !!errors.length
      if (!this.showFormError) {
        this.doCreate()
        // if (this.$route.query.itemId) {
        //   this.doUpdateProduct()
        // } else {
        //   this.doCreateProduct()
        // }
      }
    },

    // 选择分类
    onCategoryChange (data) {
      this.categoryValue = data
      this.form.categoryId = data.id
      this.form.categoryName = data.name
      this.showCategoryPicker = false
    },

    // 选择交易方式
    onTradeWayChange (data) {
      this.tradeWayPickerValue = data
      this.form.tradeWayId = data.id
      this.form.tradeWayName = data.name
      this.showTradeWayPicker = false
    },

    // 选择所在城市
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
.view {
  padding-bottom: 50px;
  .btm-fixed {
    z-index: 100;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
  }
}

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
