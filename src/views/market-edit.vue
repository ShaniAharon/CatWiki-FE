<template>
  <section v-if="marketToEdit" class="center form-center">
    <h1>{{ formTitle }}</h1>
    <form @submit.prevent="save">
      <div class="inputbox">
        <input type="text" v-model="marketToEdit.name" placeholder="title" />
      </div>
      <div class="inputbox">
        <input
          class=""
          type="number"
          v-model="marketToEdit.price"
          placeholder="price"
        />
      </div>
      <div class="inputbox">
        <button class="btn btn-black">Save</button>
      </div>
    </form>
  </section>
</template>

<script>
  import {marketService} from '../services/market.service.js'

  export default {
    name: 'MarketEdit',
    components: {},
    data() {
      return {
        marketToEdit: null,
      }
    },
    async created() {
      const marketId = this.marketId
      if (marketId) {
        const market = await this.$store.dispatch({
          type: 'getMarketById',
          marketId,
        })
        this.marketToEdit = market
      } else {
        this.marketToEdit = marketService.getEmptyMarket()
      }
    },
    methods: {
      async save() {
        await this.$store.dispatch({
          type: 'saveMarket',
          market: this.marketToEdit,
        })
        this.$router.push('/')
      },
    },
    computed: {
      formTitle() {
        return this.marketId ? 'Edit market' : 'Add market'
      },
      marketId() {
        return this.$route.params.marketId
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
  }
</style>
