<template>
  <div class="view" v-if="partnerInfo">
    <van-nav-bar
      :title="partnerInfo.nickname || partnerInfo.mobile"
      left-text="返回"
      @click-left="$router.go(-1)"
      left-arrow
    />
    <div class="list content">
      <div
        class="item"
        v-for="item in list"
        :key="item.id"
        @click="$router.push('/chatItem/' + item.id)"
        :data-from="item.from"
        :data-to="item.to"
        :class="itemCls(item)"
      >
        <img class="item-avatar" :src="getAvatar(item)" alt="头像" />
        <div class="item-name">{{ item.content }}</div>
      </div>
    </div>
    <div class="btm-fixed">
      <div class="form">
        <van-field
          class="form-input"
          v-model="content"
          placeholder="请输入用户名"
        />
        <van-button class="form-submit" type="primary" @click="doSendMsg">发送</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Field, Button, NavBar, Toast } from 'vant'
import { mapState } from 'vuex'
import ynowApi from '../../api/ynow'

Vue.use(Field)
  .use(Button)
  .use(NavBar)

export default {
  data () {
    return {
      msgList: [],
      partnerInfo: null,
      content: 'mock message'
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo,
      list (state) {
        const key = `${this.userInfo.id}_${this.$route.params.partnerId}`
        const list = [].concat(state.chat.msgObj[key] || [])
        function chatCompare (chatA, chatB) {
          if (chatB.create_time < chatA.create_time) {
            return 1
          } else if (chatB.create_time === chatA.create_time) {
            return 0
          } else {
            return -1
          }
        }
        list.sort(chatCompare)
        return list
      }
    })
  },
  mounted () {
    this.doGetUserProfile()
  },
  methods: {
    /**
     * 获取用户介绍信息
     */
    async doGetUserProfile () {
      try {
        let ret = await ynowApi.getUserProfile({
          uid: this.$route.params.partnerId
        })
        if (+ret.retCode === 0) {
          this.partnerInfo = ret.data
        } else {
          Toast(ret.errMsg)
        }
      } catch (error) {
        console.log(error)
      }
    },
    getAvatar (msg) {
      return this.isFromMe(msg) ? this.userInfo.avatar : this.partnerInfo.avatar
    },
    isFromMe (msg) {
      return +msg.f_from === +this.userInfo.id
    },
    itemCls (msg) {
      return this.isFromMe(msg) ? 'item-mine' : 'item-partner'
    },
    doSendMsg () {
      this.$store.dispatch('chat/sendMsg', {
        to: this.$route.params.partnerId,
        content: this.content
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.view {
  display: flex;
  height: 100vh;
  flex-direction: column;
  background-color: #e8eef2;
}

.list {
  flex: 1;
  overflow: auto;
  padding-bottom: 80px;
  -webkit-overflow-scrolling: touch;
}

.item {
  display: flex;
  align-items: center;
  overflow: hidden;
  font-size: 12px;
  color: #333;
  padding: 0 10px;
  margin-top: 20px;
}

.item-avatar {
  float: left;
  width: 38px;
  height: 38px;
  margin-right: 10px;
  border-radius: 50%;
}

.item-name {
  padding: 10px;
  line-height: 1.5;
  max-width: 180px;
  border-radius: 4px;
}

.item-partner {
  .item-name {
    color: #fff;
    background-color: #4caf50;
  }
}

.item-mine {
  flex-direction: row-reverse;
  .item-avatar {
    margin-right: 0;
    margin-left: 12px;
  }
  .item-name {
    color: #fff;
    background-color: #19a9ea;
  }
}

.btm-fixed {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 12px 12px;
  box-sizing: border-box;
  background-color: #e8eef2;
  .form {
    display: flex;
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
}
</style>
