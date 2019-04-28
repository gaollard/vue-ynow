<template>
  <div class="popup" v-if="value">
    <van-picker
      class="picker"
      show-toolbar
      title="选择分类"
      :loading="loading"
      :columns="list"
      :default-index="2"
      value-key="name"
      @cancel="onCancel"
      @confirm="onConfirm"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import { Loading, Picker, Toast, Popup } from 'vant'
import ynowApi from '../../api/ynow'

Vue.use(Loading).use(Picker).use(Popup)

export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    defaultIndex: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      list: [],
      loading: false
    }
  },
  async mounted () {
    this.loading = true
    try {
      let ret = await ynowApi.getXzCategorytList()
      if (+ret.retCode === 0) {
        this.list = ret.data.list
      } else {
        Toast(ret.errMsg)
      }
    } catch (error) {
      console.log(error)
    }
    this.loading = false
  },
  methods: {
    onCancel () {
      this.$emit('input', false)
    },
    onConfirm (data) {
      this.$emit('on-change', data)
      this.$emit('input', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.popup {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .4);
}
.picker {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #fff;
}
</style>
