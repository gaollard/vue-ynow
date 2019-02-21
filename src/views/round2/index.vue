<template>
  <div class="view">
    <img class="icon-bg" src="./img/bg.jpg" alt="背景图">
    <div class="wrapper">
      <audio src="http://www.w3school.com.cn/i/song.ogg" id="audio"/>
      <img class="icon-bt" src="./img/bt.png" alt="背景图">
      <div class="round-box">
        <img class="icon-2" src="./img/2.png" alt="背景图">
        <div class="round">
          <img v-show="denIndex==0" class="den" src="./img/den1.png" alt="背景图">
          <img v-show="denIndex==1" class="den" src="./img/den2.png" alt="背景图">
          <img v-show="denIndex==2" class="den" src="./img/den3.png" alt="背景图">
          <img src="./img/round.png" alt="背景图">
          <ul class="prize-list" ref="round">
            <li v-for="(item, index) in list" :key="index" class="prize-item">
              <div class="prize-name" v-text="index+1+'_'+item.name"></div>
              <img class="prize-icon" :src="item.img" alt="背景图">
            </li>
          </ul>
          <img class="icon-begin" src="./img/btn2.png" alt="背景图" @click="onClick">
        </div>
        <input type="text" v-model="currentIndex">
      </div>
    </div>
    <Success class="mask-success" v-if="showSuccess" @click-btn="showSuccess=false">
      <div class="prize-text" slot="prize">
        <p>恭喜您！</p>
        <p>获得100元礼品券</p>
      </div>
    </Success>
    <Fail class="mask-fail" v-if="showFail" @click-btn="showFail=false">
      <div class="prize-text" slot="prize">
        <p>没中呢，再接再厉哦</p>
        <p>换个姿势~</p>
        <p>快来啊~</p>
      </div>
    </Fail>
    <Rule v-show="showRule" @close="showRule=false"></Rule>
  </div>
</template>

<script>
import Success from './components/success'
import Fail from './components/fail'
import Rule from './components/rule'

const iconHelp = require('./img/p8.png')

export default {
  components: {
    Fail,
    Success,
    Rule
  },
  data () {
    return {
      list: [{
        name: '100元礼品券',
        img: require('./img/p3.png')
      }, {
        name: '50元礼品券',
        img: require('./img/p3.png')
      }, {
        name: '10元礼品券',
        img: require('./img/p3.png')
      }],
      denIndex: 0,
      currentIndex: 1,
      rounding: false,
      degree: 0,
      showSuccess: false,
      showFail: false,
      showRule: false
    }
  },
  created () {
    for (let i = 0; i < 3; i++) {
      this.list.push({
        name: '谢谢惠顾',
        img: iconHelp
      })
    }
  },
  mounted () {
    setInterval(() => {
      this.denIndex++
      if (this.denIndex > 2) {
        this.denIndex = 0
      }
    }, 200)
  },
  methods: {
    getDeg (index) {
      const random = parseInt(Math.random() * 10)
      let degree = (random * -360) + this.degree
      let num = (parseInt((degree / -360)) + 1) * -360 + (+index - 1) * -60 + -30
      return num
    },
    getPrize () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(2)
        }, 500)
      })
    },
    onClick () {
      if (this.rounding) {
        return
      }
      const audio = document.querySelector('#audio')
      if (!audio.isPlaying) {
        audio.isPlaying = true
        document.querySelector('#audio').play()
      }
      this.rounding = true
      const round = this.$refs.round
      this.degree = this.getDeg(+this.currentIndex)
      round.style.transform = `rotate(${this.degree}deg)`
      setTimeout(() => {
        this.rounding = false
        audio.isPlaying = false
        this.showSuccess = true
      }, 3000)
    }
  }
}
</script>

<style scoped>
.view {
  position: relative;
}

.wrapper {
  position: absolute;
  left: 0;
  top: 0;
}

img {
  display: block;
  width: 100%;
  margin: 0 auto;
}

.round-box {
  position: relative;
  margin: 0 auto;
}

.den {
  display: block;
  width: 312px;
  height: 312px;
  position: absolute;
  left: -20px;
  top: -18px;
}

.icon-2 {
  width: 100%;
  display: block;
  margin-top: -120px;
}

.round {
  position: absolute;
  top: 185px;
  left: 52px;
  width: 270px;
  height: 270px;
  margin: 0 auto;
}

.icon-begin {
  position: absolute;
  z-index: 30;
  width: 80px;
  height: 100px;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
}

.prize-item {
  width: 80px;
  height: 110px;
  position: absolute;
  left: 90px;
  top: 30px;
  z-index: 10;
  text-align: center;
  transform-origin: 50% 100%;
}

.prize-item:nth-child(1) {
  transform: rotate(30deg);
}

.prize-item:nth-child(2) {
  transform: rotate(90deg);
}

.prize-item:nth-child(3) {
  transform: rotate(150deg);
}

.prize-item:nth-child(4) {
  transform: rotate(210deg);
}

.prize-item:nth-child(5) {
  transform: rotate(270deg);
}

.prize-item:nth-child(6) {
  transform: rotate(330deg);
}

.prize-name {
  font-size: 12px;
  color: #35094a;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 700;
  max-width: 70px;
  margin: 0 auto;
  margin-bottom: 5px;
}

.prize-icon {
  width: 30px;
}

.prize-list {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(./img/round.png);
  background-size: 100%;
  transition: all 2s ease-in-out;
}

.prize-text {
  font-size: 14px;
}

.mask-fail /deep/ .prize-desc {
  margin-top: 40px;
}
</style>
