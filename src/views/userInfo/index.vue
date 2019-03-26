<template>
  <div>
    <van-nav-bar
      title="我的资料"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="content">
      <van-cell-group>
        <van-field
          :disabled="true"
          required
          label="手机号码"
          v-model="userInfoCache.mobile"
          @blur="onBlur('nickname')"
        />
        <van-field
          label="昵称"
          required
          v-model="userInfoCache.nickname"
          @blur="onBlur('nickname')"
        />
        <van-cell title="头像" is-link>
          <template>
            <van-uploader class="touch-area" :after-read="onRead">
              <template v-if="!userInfoCache.avatar">
                +
                <!-- <img class="icon-add" src="./img/add.png"> -->
              </template>
              <img v-else :src="userInfoCache.avatar" />
            </van-uploader>
          </template>
        </van-cell>
        <!-- <van-cell title="背景图" value="无" is-link/>
        <van-cell title="性别" :value="userInfo.gender==1?'男':'女'"/>
        <van-cell title="电子邮箱" :value="userInfo.email"/>
        <van-cell title="QQ绑定" value="无"/>
        <van-cell title="微信绑定" value="无"/> -->
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { NavBar, Field, Toast, Uploader } from 'vant'
import ynowApi from '../../api/ynow'
import * as qiniu from 'qiniu-js'
Vue.use(NavBar)
  .use(Field)
  .use(Uploader)

export default {
  data () {
    return {
      userInfo: {},
      userInfoCache: {},
      pickList: [],
      token: ''
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    onBlur (key) {
      if (
        this.userInfoCache[key] &&
        this.userInfo[key] !== this.userInfoCache[key]
      ) {
        ynowApi
          .updateUserInfo({
            [key]: this.userInfoCache[key]
          })
          .then(res => {
            if (+res.errCode === 0) {
              if (key === 'nickname') {
                Toast('修改昵称成功')
              }
            }
          })
      }
    },
    onRead (file) {
      this.pickList[0] = file
      this.uploadImg(this.pickList.length - 1, file.file)
    },
    doGet7nToken () {
      ynowApi.get7nToken().then(res => {
        this.token = res.data.token
      })
    },
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
          console.log(res)
          vm.pickList[index]['url'] = `//c1.airtlab.com/${res.key}`
          vm.pickList = [].concat(vm.pickList)
          vm.userInfoCache.avatar = vm.pickList[index]['url']
          vm.onBlur('avatar')
        }
      })
    },
    doCreateProduct () {
      let imgs = this.pickList.map(element => element.url)
      imgs = JSON.stringify(imgs)
      const params = Object.assign(
        {
          imgs
        },
        this.form
      )
      ynowApi.createXzProduct(params).then(res => {
        Toast('上传成功')
      })
    },
    doGetUserInfo () {
      ynowApi.getUserInfo().then(res => {
        this.userInfo = res.data
        this.userInfoCache = {
          ...res.data
        }
      })
    }
  },
  mounted () {
    this.doGetUserInfo()
    this.doGet7nToken()
  }
}
</script>

<style scoped>
.touch-area {
  width: 100px;
}
</style>
