<template>
  <div id="app">
    <!-- <Navbar></Navbar> -->
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/navbar/index.vue'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
