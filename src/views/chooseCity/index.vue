<template>
  <div class="view"></div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import ynowApi from '../../api/ynow'

@Component
export default class AccountView extends Vue {
  list = null
  mounted() {
    ynowApi.getdeliveryAddressList().then(res => {
      this.list = res.data.list
    })
  }
}
</script>

<style lang="scss" scoped></style>
