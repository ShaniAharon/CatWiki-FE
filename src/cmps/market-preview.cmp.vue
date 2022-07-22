<template>
  <div class="market-preview flex space-between">
    <div class="info flex">
      <h5>{{ formatPrice }}</h5>
      <div class="img-placeholder"></div>
      <h5 class="item-name">{{ market.name }}</h5>
    </div>
    <div class="btn-container">
      <button>
        <img src="../assets/list-img.png" alt="" />
      </button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'MarketPreview',
    props: ['market'],
    emits: ['remove'],
    components: {},
    data() {
      return {}
    },
    created() {},
    methods: {
      removeMarket() {
        this.$emit('remove', this.market._id)
      },
    },
    computed: {
      formatPrice() {
        return (this.market.price + '').slice(0, 1)
      },
    },
    unmounted() {},
  }
</script>
