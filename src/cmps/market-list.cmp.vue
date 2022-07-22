<template>
  <section class="market-list container-layout column">
    <market-preview
      v-for="market in markets"
      :key="market._id"
      :market="market"
      @remove="removeMarket"
    />
  </section>
</template>
<script>
  import marketPreview from './market-preview.cmp.vue'

  export default {
    name: 'MarketList',
    props: ['markets'],
    emits: ['removed', 'showDetails'],
    components: {
      marketPreview,
    },
    data() {
      return {}
    },
    created() {},
    methods: {
      removeMarket(projId) {
        this.$emit('removed', projId)
      },
    },
    computed: {},
    unmounted() {},
  }
</script>
<style></style>
