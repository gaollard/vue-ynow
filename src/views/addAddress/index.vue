<template>
  <div class="view">
    <van-cell-group>
      <van-field
        v-model="form.username"
        placeholder="收件人姓名(2位以上字符)"
      />
      <van-field v-model="form.mobile" placeholder="收件人手机号码(11位)" />
      <van-field v-model="form.street" placeholder="详细地址(5位及以上字符)" />
      <van-cell
        title="所在城市："
        is-link
        @click="showCityPicker = !showCityPicker"
        :value="form.address"
      />
    </van-cell-group>
    <cityPicker
      class="picker-wrap"
      :visible="showCityPicker"
      @on-confirm="onConfirm"
      @on-cancel="showCityPicker = false"
    />
    <van-button
      class="submit-button"
      :disabled="disabled"
      size="large"
      type="primary"
      @click="handleClick"
      >提交</van-button
    >
  </div>
</template>

<script>
import Vue from 'vue'
import ynowApi from '../../api/ynow'
import { Field, Button, CellGroup, Cell, Toast } from 'vant'
import cityPicker from '../../components/city-picker'

Vue.use(Field)
  .use(Button)
  .use(Cell)
  .use(CellGroup)

export default {
  components: {
    cityPicker
  },
  data () {
    return {
      showCityPicker: false,
      form: {
        username: '',
        mobile: '',
        address: '',
        street: ''
      }
    }
  },
  computed: {
    disabled () {
      const form = this.form
      return !(
        form.username.length > 1 &&
        form.mobile.length === 11 &&
        form.street.length > 5 &&
        form.address.length
      )
    }
  },
  methods: {
    onConfirm (list) {
      const str = list
        .filter(element => element)
        .map(element => element.name)
        .join(' ')
      this.showCityPicker = false
      this.form.address = str
      this.form = {
        ...this.form
      }
    },
    handleClick () {
      const list = this.form.address.split(' ')
      ynowApi
        .addAddress({
          username: this.form.username,
          mobile: this.form.mobile,
          city: list[1] || '',
          province: list[0] || '',
          district: list[2] || '',
          zip: 500000,
          address: this.form.address + this.form.street
        })
        .then(res => {
          if (+res.errCode === 0) {
            Toast('添加成功')
          }
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.submit-button {
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
