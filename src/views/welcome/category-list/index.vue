<template>
  <ul class="list" v-if="categoryList.length">
    <li
      class="item"
      v-for="(item, index) in categoryList"
      :key="index"
      :data-cid="item.id"
      :class="{'is-active': categoryId == item.id}"
      @click="onClickCate(item)"
    >
      <span v-text="item.name"></span>
    </li>
  </ul>
</template>

<script>
import Vue from 'vue'
import { Loading, Toast } from 'vant'
import ynowApi from '../../../api/ynow'

Vue.use(Loading)

export default {
  data () {
    return {
      categoryList: [],
      productList: [],
      productListLoading: false
    }
  },
  computed: {
    categoryId () {
      return this.$route.query.cid || 1
    }
  },
  watch: {
    categoryId (val) {
      // this.doGetXzProductList();
    }
  },
  async mounted () {
    await this.doGetXzCategorytList()
  },
  methods: {
    // 点击分类
    onClickCate (obj) {
      this.$router.replace(`/?cid=${obj.id}`)
    },
    // 获取分类列表
    async doGetXzCategorytList () {
      try {
        let ret = await ynowApi.getXzCategorytList()
        if (+ret.retCode === 0) {
          this.categoryList = ret.data.list
        } else {
          Toast(ret.errMsg)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.list {
  overflow: hidden;
  width: 100%;
  overflow: hidden;
  height: 30px;
  line-height: 30px;
  li {
    float: left;
    padding: 0 15px;
    font-size: 14px;
    color: #797d82;
    text-align: center;
    &.is-active {
      color: #009688;
      font-weight: bold;
    }
  }
}
</style>
