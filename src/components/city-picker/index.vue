<template>
  <van-popup v-model="visible" position="bottom">
    <van-picker
      :columns="columns"
      @change="onChange"
      :loading="loading"
      show-toolbar
      title="选择地址"
      @cancel="onCancel"
      @confirm="onConfirm"
      value-key="name"
    />
  </van-popup>
</template>

<script>
import Vue from 'vue'
import { Picker, Popup } from 'vant'
import ynowApi from '../../api/ynow'

Vue.use(Picker).use(Popup)

export default {
  data () {
    return {
      loading: true,
      columnNum: 3,
      columns: []
    }
  },
  props: {
    visible: true
  },
  mounted () {
    ynowApi.getSfCityList().then(res => {
      let list = res.data.list
      list = JSON.stringify(list)
        .replace(/areaId/g, 'value')
        .replace(/areaName/g, 'name')
        .replace(/children/g, 'children')
        .replace(/id/g, 'value')
      list = JSON.parse(list)
      this.loading = false
      this.list = list
      this.initCityList()
    })
  },
  methods: {
    onChange (picker, values, index) {
      this.picker = picker
      if (values[index].children && values[index].children.length) {
        this.rawIndex(index + 1, values[index].children)
      }
    },
    initCityList () {
      for (let index = 0; index < this.columnNum; index++) {
        this.columns[index] = {
          values: [],
          defaultIndex: 0
        }
      }
      this.rawIndex(0, this.list)
    },
    rawIndex (index, list) {
      if (index === this.columnNum) {
        return
      }
      if (this.picker) {
        this.picker.setColumnValues(index, list)
      } else {
        this.columns[index]['values'] = list
      }
      if (list.length && list[0].children && list[0].children.length) {
        this.rawIndex(index + 1, list[0].children)
      } else {
        this.rawIndex(index + 1, [])
      }
    },
    onCancel (data) {
      this.$emit('on-cancel', data)
    },
    onConfirm (data) {
      this.$emit('on-confirm', data)
    }
  }
}
</script>

<style scoped></style>
