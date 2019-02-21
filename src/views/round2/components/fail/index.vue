<template>
  <div class="mask">
    <div class="success-prize">
      <img class="gift" src="./img/personlihe.png">
      <div class="prize-desc">
        <slot name="prize"></slot>
      </div>
    </div>
    <img class="btn-detail" src="./img/btn-again.png" @click="$emit('click-btn')">
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.mask {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.8);
  color: white;
  top: 0;
  z-index: 106;
}

.success-prize {
  position: relative;
  width: 190px;
  height: 124px;
  margin: 0 auto;
  margin-top: 200px;
  background: url(./img/dikuang4.png);
  background-size: 100%;
}

.btn-detail {
  display: block;
  width: 150px;
  height: 50px;
  margin: 0 auto;
  margin-top: 30px;
}

.gift {
  position: absolute;
  display: block;
  width: 105px;
  height: 96px;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  margin-top: -85px;
}

.prize-desc {
  position: absolute;
  width: 100%;
  text-align: center;
  margin-top: 86px;
  color: #333;
  font-weight: 600;
}
</style>
