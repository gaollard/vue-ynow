<template>
  <div class="view">
    <u class="list">
      <li class="item" v-for="item in userList" :key="item.id">
        <img class="item-avatar" :src="item.avatar" alt="头像">
      </li>
    </u>
  </div>
</template>

<script>
import ynowApi from '../../api/ynow'
const data = `{"retCode":"0","errCode":"0","errMsg":"","data":{"msgList":[{"id":1,"from":1,"to":"2","content":"Hello","red":null,"create_time":null},{"id":2,"from":1,"to":"2","content":"hello world","red":null,"create_time":null},{"id":3,"from":1,"to":"3","content":"你好！","red":null,"create_time":"2019-02-27T09:23:19.000Z"}],"userList":[{"id":2,"nickname":"Miss结蕊香","avatar":"//img.alicdn.com/bao/uploaded/i4/196993935/O1CN01tf5NH41ewH0sKWjRt_!!0-item_pic.jpg","gender":0,"mobile":"13249064450","email":"1046614584@qq.com","password":"123456","create_time":"2019-01-10T01:31:31.000Z","login_time":"0000-00-00 00:00:00","college":"遵义医学院","words":null,"residence":"广东珠海金湾区"},{"id":3,"nickname":"从此天涯路人","avatar":"//img.alicdn.com/bao/uploaded/i4/196993935/O1CN01tf5NH41ewH0sKWjRt_!!0-item_pic.jpg","gender":0,"mobile":"17688193136","email":"1296674455@qq.com","password":"123456","create_time":"2019-01-10T14:03:32.000Z","login_time":"0000-00-00 00:00:00","college":"中山大学","words":null,"residence":"广东广州羊城区"}]}}`;
export default {
  data () {
    return {
      userList: []
    };
  },
  mounted () {
    // this.doGetChatList();
    this.userList = JSON.parse(data).data.userList;
  },
  methods: {
    doGetChatList () {
      ynowApi.getChatList().then(res => {
        console.log(res);
        this.userList = res.data.userList;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.item-avatar {
  width: 45px;
  height: 45px;
}
</style>
