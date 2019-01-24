<template>
  <div class="view-checkin">
    <ul class="list">
      <li class="item" v-for="(item, index) in list" :key="index">{{ item.date.substr(0, 10) }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import ynowApi from '../../api/ynow'

@Component
export default class AccountView extends Vue {
  list = []
  mounted () {
    ynowApi.getCheckinList().then(res => {
      this.list = res.data.list
    })
  }
}
</script>

<style lang="scss" scoped>
.view-checkin {
  min-height: 100vh;
  background: #eee;
}
.list {
  overflow: hidden;
}
.item {
  padding: 12px;
  background: #fff;
  margin-bottom: 10px;
}
</style>
