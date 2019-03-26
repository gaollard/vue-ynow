<template>
  <nav class="navbar">
    <ul class="nav-list">
      <li class="nav-item" v-for="(item, index) in navConfig" :key="index">
        <router-link :to="item.href" tag="div" exact-active-class="is-active">
          <span v-text="item.name"></span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class NavbarComponent extends Vue {
  navConfig = [
    {
      name: '推荐',
      key: 0,
      href: '/'
    },
    {
      name: '排行榜',
      key: 1,
      href: '/rank'
    },
    {
      name: '搜索',
      key: 2,
      href: '/search'
    }
  ]
}
</script>

<style lang="scss">
.navbar {
  height: 44px;
  line-height: 44px;
  background: #fff;
}

.nav-list {
  display: flex;
  align-items: center;
}

.nav-item {
  position: relative;
  flex: 1;
  color: #666;
  text-align: center;
}

.is-active {
  color: #31c27c;
  &::after {
    position: absolute;
    display: block;
    content: '';
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background-color: #31c27c;
    transform: scaleX(0.1);
  }
}
</style>
