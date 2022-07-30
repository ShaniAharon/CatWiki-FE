<template>
  <section class="flex align-base space-between">
    <header class="main-layout-container mt-1 flex">
      <img
        class="logo-img"
        @click="goToHome"
        src="../assets/CatwikiLogo.svg"
        alt=""
      />
    </header>
  </section>
</template>
<script>
  export default {
    name: 'AppHeader',
    components: {},
    data() {
      return {}
    },
    created() {},
    methods: {
      goToHome() {
        this.$router.push('/')
      },
    },
    computed: {},
    unmounted() {},
  }
</script>
<style></style>
