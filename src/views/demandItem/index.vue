<template>
  <div class="view" v-if="itemInfo" :class="{'has-talk': showTalk }">
    <div class="demand-item floor">
      <div class="demand-item__hd">
        <img class="demand-item__logo" src="https://zb.oschina.net/file/get?path=static/project-reward/cover/youxikaifa_2.png">
        <ul>
          <li class="title">{{ itemInfo.title }}</li>
          <li class="tags">
            <span class="tag">程序开发</span>
          </li>
        </ul>
      </div>
      <div class="demand-item__bd">
        <div class="column">
          <span class="label">需求预算：</span>
          <span>￥{{ itemInfo.reward / 100 }}</span>
        </div>
        <div class="column">
          <span class="label">技能要求：</span>
          <span>{{ itemInfo.requires || '无任何要求' }}</span>
        </div>
        <div class="column">
          <span class="label">交付日期：</span>
          <span>{{ itemInfo.deadline || itemInfo.create_time }}</span>
        </div>
        <div class="column">
          <span class="label">发布日期：</span>
          <span>{{ itemInfo.create_time }}</span>
        </div>
      </div>
      <div class="demand-item__ft">
        <div class="ui-flex">
          <img class="demand-item__avatar" :src="itemInfo.userInfo.avatar"/>
          <div class="demand-item__name">{{ itemInfo.userInfo.mobile }}</div>
        </div>
        <div class="ui-flex">
          <van-icon class="arrow-right" name="friends" />
          <span>10人</span>
        </div>
      </div>
    </div>

    <!-- 需求描述 -->
    <div class="floor floor-desc">
      <div class="floor__header">需求描述</div>
      <div class="floor__body">{{ itemInfo.description }}</div>
    </div>

    <!-- 报名列表 -->
    <div class="floor floor-candidate">
      <div class="floor__header">报名列表</div>
      <div class="floor__body">
        <div class="zero-tip">暂时无人报名</div>
      </div>
    </div>

    <!-- 留言列表 -->
    <div class="floor group group-comment">
      <div class="floor__header">留言列表</div>
      <div class="floor__body">
        <div class="zero-tip" v-if="!commentList.length">暂时无人留言</div>
        <div class="list" v-else>
          <div class="comment-item" v-for="(comment, index) in commentList" :key="index">
            <div class="border">
              <div class="comment-item__header">
                <img class="comment-item__avatar" :src="comment.userInfo.avatar" alt="">
                <div>
                  <span class="nickname">{{ comment.userInfo.nickname }}</span>
                  <div class="comment-item__date">2019-04-06</div>
                </div>
                <authButton class="comment-item__reply" @onLogin="handleClickComment(comment)">回复</authButton>
              </div>
              <div class="comment-item__content">{{ comment.content }}</div>
              <div class="child-list">
                <div class="child-item" v-for="(cComment, cIndex) in comment.children" :key="cIndex">
                  <div class="comment-item__header">
                    <img class="comment-item__avatar" :src="cComment.userInfo.avatar" alt="">
                    <div>
                      <span class="nickname">{{ cComment.userInfo.nickname }}</span>
                      <div class="comment-item__date">2019-04-06</div>
                    </div>
                  </div>
                  <div class="comment-item__content">
                    <span class="sign-replay">回复</span>
                    <span class="sign-quote">@</span>
                    <span class="sign-name">{{ comment.userInfo.nickname }}</span>
                    <span class="sign-text">:{{ cComment.content }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 评论弹窗 -->
    <div class="talk-box-wrapper" v-show="showTalk">
      <Field class="talk-box" type="textarea" :placeholder="placeholder" v-model="content"></Field>
      <Button class="talk-btn" :disabled="!content.length" @click="handleComment">提交评论</Button>
      <Button class="back-btn" @click="showTalk=false">取消评论</Button>
    </div>

    <!-- 底部按钮组 -->
    <div class="group group-btm">
      <authButton :class="{ 'is-active': isCollected }" @onLogin="toggle(1)" >
        <van-icon class="icon" :name="isCollected ? 'star' : 'star-o'" />
        <span>收藏</span>
      </authButton>
      <authButton :class="{ 'is-active': isLiked }" @onLogin="toggle(2)">
        <van-icon class="icon" :name="isLiked ? 'like' : 'like-o'" />
        <span>点赞</span>
      </authButton>
      <authButton @onLogin="hanldeLeaveMsg">
        <van-icon class="icon" name="chat-o" />
        <span>留言</span>
      </authButton>
      <authButton class="btn-want" @onLogin="$router.push('/chatItem/' + itemInfo.userInfo.id)">
        <span>在线聊天</span>
      </authButton>
    </div>
  </div>
</template>

<script>
import ynowApi from '../../api/ynow'
import { Swipe, SwipeItem, Toast, Field, Button } from 'vant'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import authButton from '../../components/authButton'
import 'swiper/dist/css/swiper.css'
import { mapState } from 'vuex'

export default {
  components: {
    swiper,
    swiperSlide,
    Swipe,
    SwipeItem,
    Field,
    Button,
    authButton
  },
  data () {
    return {
      itemInfo: null,
      isLiked: false,
      isCollected: false,
      likeData: null,
      collectData: null,
      current: 0,
      commentList: [],
      content: '',
      talkComment: null,
      showTalk: false,
      swiperOption: {
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  computed: {
    ...mapState({
      isValidLogin: state => state.user.isValidLogin
    }),
    placeholder () {
      return this.talkComment ? `@${this.talkComment.userInfo.nickname}` : '输入评论内容'
    }
  },
  watch: {
    isValidLogin: {
      handler (val) {
        if (val) {
          this.doGetCollectState(1)
          this.doGetCollectState(2)
        }
      },
      immediate: true
    }
  },
  mounted () {
    this.getDetails()
    this.getComment()
  },
  methods: {
    // 获取详情
    async getDetails () {
      try {
        let ret = await ynowApi.getDemandItem({
          itemId: this.$route.params.itemId
        })
        if (+ret.retCode === 0) {
          this.itemInfo = ret.data
        } else {
          Toast(ret.errMsg)
        }
      } catch (error) {
        console.log(error)
      }
    },

    // 获取评论
    async getComment () {
      try {
        let ret = await ynowApi.getComment({
          itemId: this.$route.params.itemId,
          typeId: 3
        })
        if (+ret.errCode === 0) {
          this.commentList = ret.data.list
        } else {
          Toast(ret.errMsg)
        }
      } catch (error) {
        console.log(error)
      }
    },

    // 收藏状态切换
    toggle (typeId) {
      if (typeId === 1) {
        if (this.isCollected) {
          this.doDeleteCollect(typeId)
        } else {
          this.doCreateCollet(typeId)
        }
      }
      if (typeId === 2) {
        if (this.isLiked) {
          this.doDeleteCollect(typeId)
        } else {
          this.doCreateCollet(typeId)
        }
      }
    },

    // 获取状态
    async doGetCollectState (typeId) {
      try {
        let ret = await ynowApi.getCollectState({
          typeId,
          objectId: 2,
          itemId: this.$route.params.itemId
        })
        if (+ret.retCode === 0) {
          if (typeId === 1) {
            this.isCollected = ret.data.status === 1
            this.collectData = ret.data
          }
          if (typeId === 2) {
            this.isLiked = ret.data.status === 1
            this.likeData = ret.data
          }
        } else {
          Toast(ret.errMsg)
        }
      } catch (error) {
        console.log(error)
      }
    },

    // 添加收藏
    async doCreateCollet (typeId) {
      if (typeId === 1 && this.isCollected) return
      if (typeId === 2 && this.isLiked) return
      try {
        let ret = await ynowApi.addCollect({
          typeId,
          objectId: 2,
          itemId: this.$route.params.itemId
        })
        if (+ret.errCode === 0) {
          this.doGetCollectState(typeId)
        } else {
          Toast(ret.errMsg)
        }
      } catch (error) {
        console.log(error)
      }
    },

    // 删除收藏
    async doDeleteCollect (typeId) {
      let data = null
      if (typeId === 1) {
        data = this.collectData
      } else if (typeId === 2) {
        data = this.likeData
      }
      try {
        let res = await ynowApi.removeCollect({
          recordId: data.id
        })
        if (+res.retCode === 0) {
          this.doGetCollectState(typeId)
        } else {
          Toast(res.errMsg)
        }
      } catch (error) {
        console.log(error)
      }
    },

    // 添加评论
    async handleComment () {
      const params = {
        itemId: this.$route.params.itemId,
        content: this.content,
        typeId: this.talkComment ? 2 : 3,
        talkTo: this.talkComment ? this.talkComment.id : ''
      }
      try {
        let ret = await ynowApi.addComment(params)
        if (+ret.retCode === 0) {
          this.getComment()
          this.content = ''
        } else {
          Toast(ret.errMsg)
        }
      } catch (error) {
        console.log(error)
      }
    },

    // 回复评论
    async handleClickComment (comment) {
      this.talkComment = comment
      this.showTalk = true
    },

    // 留言
    hanldeLeaveMsg () {
      this.showTalk = true
      this.talkComment = null
    },

    // 调转到用户简介界面
    toUserProfile (item) {
      this.$router.push(`/user/profile/${item.id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.view {
  overflow: hidden;
  min-height: 100vh;
  padding-bottom: 50px;
}

.floor {
  margin-bottom: 8px;
  background: #fff;
  border-top: 1px solid #e7eff5;
  border-bottom: 1px solid #e7eff5;
  &__header {
    width: 100%;
    height: 43px;
    line-height: 43px;
    border-bottom: 1px solid #e7eff5;
    color: #142457;
    padding-left: 10px;
  }
  &__body {
    min-height: 50px;
    padding: 10px;
    color: #48576A;
  }
  .zero-tip {
    margin-top: 15px;
    color: #999;
    text-align: center;
  }
}

// 顶部相关属性
.demand-item {
  overflow: hidden;
  padding: 12px 12px;
  border-top: 0;
  border-bottom: solid 1px #f5f5f5;
  .tags {
    margin-top: 4px;
  }
  .tag {
    display: inline-block;
    padding: 2px 6px;
    font-size: 12px;
    color: #409eff;
    margin-right: 5px;
    background: rgba(64, 158, 255, .1);
  }
  &__logo {
    width: 55px;
    height: 55px;
    margin-right: 10px;
    background: #2a98ff;
  }
  &__avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
  &__hd {
    display: flex;
    align-items: center;
    font-size: 14px;
    line-height: 20px;
    font-weight: bold;
  }
  &__bd {
    font-size: 13px;
    line-height: 24px;
    padding-top: 10px;
    padding-bottom: 10px;
    color: #48576A;
  }
  &__ft {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    color: #48576A;
    padding-top: 10px;
    border-top: 1px solid #E7EFF5;
  }
  &__name {
    margin-left: 4px;
  }
}

.has-talk {
  padding-bottom: 140px;
}

.sign-name {
  color: #03a9f4;
}

.talk-box-wrapper {
  position: fixed;
  overflow: hidden;
  background: #fff;
  z-index: 25;
  width: 100%;
  box-sizing: border-box;
  bottom: 0;
  left: 0;
  padding: 10px 12px;
  .talk-box {
    background: #f5f5f5;
  }
  .talk-btn {
    float: right;
    margin-top: 10px;
  }
  .back-btn {
    float: left;
    margin-top: 10px;
  }
}

.view /deep/ .swiper-pagination-bullet-active {
  transition: all 1s;
  background-color: #03a9f4;
}

.p-slide-img {
  display: block;
  width: 100%;
  height: 325px;
  background-size: 100%;
  background-position: center;
}

.custom-indicator {
  position: absolute;
  right: 10px;
  bottom: 10px;
  padding: 0 6px;
  font-size: 13px;
  color: #fff;
  background: #666;
  border-radius: 5px;
}

.group {
  margin-bottom: 10px;
  background: #fff;
}

.group-comment {
  .border {
    padding-bottom: 12px;
    border-bottom: 1px solid #ddd;
  }
  .list {
    > .comment-item {
      &:last-child .border {
        border-bottom: 0;
      }
    }
  }
  .comment-item {
    padding: 10px 12px;
    padding-bottom: 0;
  }
  .comment-item__header {
    display: flex;
    align-items: center;
  }
  .comment-item__date {
    margin-top: 2px;
    font-size: 12px;
    color: #999;
  }
  .comment-item__content {
    padding-left: 37px;
    padding-top: 6px;
    color: #999;
  }
  .comment-item__avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-right: 5px;
  }
  .comment-item__reply {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }
  .child-list {
    padding-left: 32px;
    .child-item {
      padding-top: 10px;
    }
    .comment-item__content {
      padding-left: 0;
    }
  }
}

.group-price {
  .price {
    display: flex;
    align-items: center;
    padding: 5px 10px;
    font-size: 16px;
    font-weight: 600;
    color: #ff0036;
  }
  .name {
    padding: 0 10px;
    font-size: 13px;
    line-height: 1.5;
  }
  .depreciation {
    margin-left: 10px;
    background-color: #fb6878;
    color: #fff;
    font-size: 12px;
    padding: 0 2px;
    border-radius: 2px;
  }
  .line {
    height: 1px;
    margin-top: 10px;
    background: #f5f5f5;
  }
  .userInfo {
    display: flex;
    align-items: center;
    height: 60px;
    padding: 0 10px;
    font-size: 12px;
    color: #999;
  }
  .avatar-wrap {
    margin-right: 6px;
  }
  .avatar-wrap img {
    display: block;
    width: 38px;
    height: 38px;
    border-radius: 4px;
  }
  .username {
    font-size: 13px;
    font-weight: 600;
    color: #000;
  }
  .remark {
    margin-top: 2px;
  }
}

.group-comment {
  font-size: 13px;
  .title {
    padding: 0 10px;
    line-height: 40px;
    font-weight: bold;
  }
  .line {
    height: 1px;
    background: #f5f5f5;
  }
  .list {
    min-height: 90px;
  }
}

.group-btm {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 0;
  display: flex;
  align-items: center;
  height: 50px;
  padding: 0 10px;
  font-size: 12px;
  line-height: 20px;
  > div {
    display: flex;
    align-items: center;
    float: left;
    color: #333;
    margin-right: 12px;
  }
  .icon {
    font-size: 14px;
    margin-right: 4px;
    margin-top: -3px;
  }
  .btn-want {
    position: absolute;
    right: 10px;
    line-height: 18px;
    padding: 4px 10px;
    color: #fff;
    background-color: #ff5722;
  }
  .is-active {
    .icon {
      color: #ff5722;
    }
  }
}
</style>
