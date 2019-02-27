<template>
  <div class="view">
    <div class="list">
      <div class="item" v-for="item in userList" :key="item.id" @click="$router.push('/chatItem/'+item.id)">
        <img class="item-avatar" :src="item.avatar" alt="头像">
        <div>
          <div class="item-name">{{ item.nickname }}</div>
          <div class="item-msg" v-text="getLastMsg(item)"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ynowApi from '../../api/ynow';
import store from 'store';
const userInfo = store.get('userInfo');

export default {
  data () {
    return {
      userList: [],
      msgList: [],
      sortData: null,
      msgObj: null
    };
  },
  mounted () {
    this.doGetChatList();
  },
  methods: {
    getMsgKey (user) {
      return `${userInfo.id}_${user.id}`;
    },
    getLastMsg (user) {
      const key = this.getMsgKey(user);
      return this.msgObj[key][0]['content'];
    },
    doGetChatList () {
      ynowApi.getChatList().then(res => {
        const msgList = res.data.msgList;
        const userList = res.data.userList;
        const obj = {};

        userList.forEach(user => {
          const key = this.getMsgKey(user);
          obj[key] = [];
        });

        const keys = Object.keys(obj);

        msgList.forEach(element => {
          const key1 = `${element.from}_${element.to}`;
          const key2 = `${element.to}_${element.from}`;
          keys.forEach(key => {
            if (key === key1 || key === key2) {
              obj[key].push(element);
            }
          })
        });

        let values = Object.values(obj);

        function chatCompare (chatA, chatB) {
          if (chatB.create_time > chatA.create_time) {
            return 1;
          } else if (chatB.create_time === chatA.create_time) {
            return 0;
          } else {
            return -1;
          }
        }

        values.forEach(element => {
          element.sort(chatCompare);
        });

        userList.sort((a, b) => {
          const keya = `${userInfo.id}_${a.id}`;
          const keyb = `${userInfo.id}_${b.id}`;
          return chatCompare(obj[keya][0], obj[keyb][0]);
        });

        this.msgObj = obj;
        this.msgList = msgList;
        this.userList = userList;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.view {
  background-color: #eee;
}

.item {
  display: flex;
  overflow: hidden;
  font-size: 12px;
  padding: 6px 10px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
}

.item-avatar {
  float: left;
  width: 32px;
  height: 32px;
  margin-right: 10px;
  border-radius: 50%;
}

.item-msg {
  color: #666;
}

.item-name {
  font-size: 13px;
  margin-bottom: 4px;
}
</style>
