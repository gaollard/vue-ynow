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
import { Loading, Picker, Popup } from 'vant'
import { tradeWay } from '../../config'
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
      columns: tradeWay,
      loading: false
    }
  },
  methods: {
    onCancel () {
      this.$emit('on-cancel')
    },
    onConfirm (data) {
      this.$emit('on-confirm', data)
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
