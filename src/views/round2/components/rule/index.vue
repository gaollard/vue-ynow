<template>
  <div class="mask">
    <div class="desc-wrap">
      <img class="icon-exp" src="./img/btm-shm.png">
      <img class="icon-close" src="../../img/icon-close.png" @click="$emit('close')">
      <div class="desc-box">
        <p>1.进入游戏后转盘以逆时针方向迅速转动展示所有奖品，点击页面下方中的“点击开始抽奖”按钮进行抽奖。</p>
        <p>2.转盘将会以旋转木马的旋转方式进行转动。</p>
        <p>3.当转盘停下后展示的结果即为抽奖结果。</p>
        <p>4.中奖后需要进行验证才能领取奖品，中奖的奖品可在“我的奖品”中进行查看。</p>
        <p>5.转盘将会以旋转木马的旋转方式进行转动，转盘将会以旋转木马的旋转方式进行转动，转盘将会以旋转木马的旋转方式进行转动，转盘将会以旋转木马的旋转方式进行转动。</p>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="postcss" scoped>
.desc-wrap {
  position: relative;
  width: 300px;
  height: 425px;
  margin: 0 auto;
  background: url(./img/dikuang1.png);
  background-size: 100%;
  margin-top: 40px;
}

.mask {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.8);
  color: white;
  top: 0;
  z-index: 106;
}

.icon-exp {
  position: absolute;
  width: 110px;
  margin-left: 20px;
  margin-top: -10px;
}

.desc-box {
  width: 100%;
  height: 100px;
  padding: 50px 30px;
  box-sizing: border-box;
  color: #666;
  font-size: 13px;
  line-height: 1.5;
}

.icon-close {
  position: absolute;
  right: 4px;
  top: -6px;
  width: 30px;
}
</style>
