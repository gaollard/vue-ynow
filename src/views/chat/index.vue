<template>
  <div class="view">
    <div class="list" v-if="sortData">
      <template v-for="pitem in sortData">
        <div class="item" v-for="item in pitem" :key="item.id" @click="$router.push('/chatItem/'+item.id)">
          <img class="item-avatar" :src="item.avatar" alt="头像">
          <div>
            <div class="item-name">{{ item.nickname }}</div>
            <div class="item-msg">hello</div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import ynowApi from '../../api/ynow';
import store from 'store';

export default {
  data () {
    return {
      userList: [],
      msgList: [],
      sortData: null
    };
  },
  mounted () {
    this.doGetChatList();
  },
  methods: {
    doGetChatList () {
      const userInfo = store.get('userInfo');

      ynowApi.getChatList().then(res => {
        this.msgList = res.data.msgList;
        this.userList = res.data.userList;

        const obj = {};
        this.userList.forEach(element => {
          const key = `${userInfo.id}_${element.id}`;
          obj[key] = [];
        });

        const keys = Object.keys(obj);

        this.msgList.forEach(element => {
          const key1 = `${element.from}_${element.to}`;
          const key2 = `${element.to}_${element.from}`;

          keys.forEach(key => {
            if (key === key1 || key === key2) {
              obj[key].push(element);
            }
          })
        });

        let values = Object.values(obj);
        values.forEach(element => {
          element.sort((a, b) => {
            const flag = b['create_time'] > a['create_time'];
            if (b['create_time'] > a['create_time']) {
              return 1;
            } else if (b['create_time'] === a['create_time']) {
              return 0;
            } else {
              return -1;
            }
          });
        });

        values.sort((a, b) => {
          const flag = b[0]['create_time'] > a[0]['create_time'];
          if (b[0]['create_time'] > a[0]['create_time']) {
            return 1;
          } else if (b[0]['create_time'] === a[0]['create_time']) {
            return 0;
          } else {
            return -1;
          }
        });

        this.sortData = values;
        // console.log(values);
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
