<template>
  <div class="view" @click="$router.push('/')">
    <div class="desc">
      <img
        src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551347339262&di=3cad2c6d2936366440536756300acb11&imgtype=jpg&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D3810895048%2C463114741%26fm%3D214%26gp%3D0.jpg"
        alt=""
      />
      <div class="text">
        <!-- <p>您所访问的资源不存在</p> -->
        <p>页面建设中请下次访问</p>
        <p>点击空白区域返回首页</p>
      </div>
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.desc {
  font-size: 14px;
  color: #666;
  text-align: center;
  padding-top: 30%;
  img {
    width: 80%;
    margin-top: 30px;
  }
  .text {
    margin-top: 20px;
  }
}
</style>
