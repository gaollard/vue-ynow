<template>
  <div class="popup" v-if="value">
    <van-picker
      class="picker"
      show-toolbar
      title="选择分类"
      :loading="loading"
      :columns="columns"
      value-key="name"
      @cancel="onCancel"
      @confirm="onConfirm"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import ynowApi from '../../api/ynow'
import { Loading, Picker, Toast, Popup } from 'vant'

Vue.use(Loading).use(Picker).use(Popup)

const columns = [{
  name: '邮寄',
  id: 1
}, {
  name: '自提',
  id: 2
}, {
  name: '同城面交',
  id: 3
}]

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
      columns: columns,
      loading: false
    }
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
