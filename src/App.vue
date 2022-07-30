<template>
  <div id="app">
    <app-header />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
  import appHeader from './cmps/app-header.vue'
  import appFooter from './cmps/app-footer.vue'
  import AppFooter from './cmps/app-footer.vue'
  export default {
    created() {
      this.$store.dispatch({type: 'loadMarkets'})
    },
    components: {appHeader, appFooter, AppFooter},
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
