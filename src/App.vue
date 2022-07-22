<template>
  <div id="app">
    <app-header />
    <router-view />
  </div>
</template>

<script>
  import appHeader from './cmps/app-header.vue'
  export default {
    created() {
      this.$store.dispatch({type: 'loadMarkets'})
    },
    components: {appHeader},
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
