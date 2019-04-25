<template>
  <div class="view">
    <div v-if="isValidLogin">
      <div class="list">
        <div
          class="item"
          v-for="item in userList"
          :key="item.id"
          @click="$router.push('/chatItem/' + item.id)"
          :data-uid="item.id"
        >
          <img class="item-avatar" :src="item.avatar" alt="头像" />
          <div>
            <div class="item-name">{{ item.nickname }}</div>
            <div class="item-msg" v-text="getLastMsg(item)"></div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="login-tip" @click="$store.dispatch('user/showLoginPop')">登录查看消息</div>
    </div>
  </div>
</template>

<script>
import store from 'store'
import { mapState } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapState({
      userList: state => state.chat.userList,
      msgList: state => state.chat.msgList,
      msgObj: state => state.chat.msgObj,
      userInfo: state => state.user.userInfo,
      isValidLogin: state => state.user.isValidLogin
    })
  },
  methods: {
    getMsgKey (user) {
      return `${this.userInfo.id}_${user.id}`
    },
    getLastMsg (user) {
      const key = this.getMsgKey(user)
      return this.msgObj[key][0]['content']
    }
  }
}
</script>

<style lang="scss" scoped>
.view {
  background-color: #eee;
}

.item {
  display: flex;
  overflow: hidden;
  font-size: 12px;
  padding: 10px 10px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
}

.item-avatar {
  float: left;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  border-radius: 50%;
}

.item-msg {
  color: #666;
}

.item-name {
  font-size: 14px;
  margin-bottom: 4px;
}

.login-tip {
  padding: 20px;
  padding-top: 40%;
  text-align: center;
  color: #999;
}
</style>
