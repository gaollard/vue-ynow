<template>
  <div class="form">
    <van-field
      class="form-input"
      v-model="msg"
      placeholder="请输入用户名"
    />
    <van-button
      class="form-submit"
      type="primary"
      @click="doSendMsg">发送</van-button>
  </div>
</template>

<script>
import Vue from 'vue'
import { Field, Button } from 'vant'
import store from 'store'

Vue.use(Field)
  .use(Button)

export default {
  props: {
    content: String
  },
  data () {
    return {
      msg: ''
    }
  },
  watch: {
    content (val) {
      this.msg = val
    },
    msg () {
      this.$emit('input', this.msg)
    }
  },
  created () {
    this.msg = this.content || ''
  },
  methods: {
    doSendMsg () {
      this.$emit('confirm', this.msg)
    }
  }
}
</script>


<style lang="scss" scoped>
.form {
  display: flex;
  width: 100%;
  padding: 12px 12px;
  box-sizing: border-box;
  background-color: #e8eef2;
}

.form-input {
  padding: 6px;
  border-radius: 4px;
}

.form-submit {
  width: 60px;
  height: 36px;
  line-height: 36px;
  padding: 0 10px;
  margin-left: 10px;
}
</style>
