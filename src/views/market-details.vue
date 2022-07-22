<template>
  <div v-if="isShow && market" @click="closeModal" class="modal">
    <form @submit.prevent class="form-details">
      <h1>{{ market?.label }} market details</h1>
      {{ market }}
      <div class="img-container">
        <img class="details-img" v-if="market" :src="showMarket" alt="" />
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'MarketDetails',
    components: {},
    data() {
      return {
        market: null,
        isShow: true,
      }
    },
    created() {},
    methods: {
      async loadMarket() {
        if (!this.marketId) return // prevent the run of the watcher when change route
        const market = await this.$store.dispatch({
          type: 'getMarketById',
          marketId: this.marketId,
        })
        this.market = market
        this.isShow = true
      },
      closeModal() {
        this.$emit('closeDetails')
      },
    },
    computed: {
      //opt 2 use computed for the marketId
      marketId() {
        return this.$route.params.marketId
      },
      showMarket() {
        console.log(this.market)
        return this.market.imgUrl
      },
    },
    //opt1 use the param specf as the func
    //   watch: {
    //     '$route.params.marketId'(id) {
    //       console.log('Changed to', id);
    //       this.loadMarket();
    //     },
    //   },
    //opt 2
    watch: {
      // when the computed marketId run the watch handler also run
      marketId: {
        handler() {
          this.loadMarket()
        },
        immediate: true, //to also run the watch on the start / run eagerly
      },
    },
    unmounted() {},
  }
</script>

<style>
  .main-content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    /* margin: 0 auto; */
  }
</style>
