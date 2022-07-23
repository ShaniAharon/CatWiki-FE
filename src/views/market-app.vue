<template>
  <header class="main-header main-layout-container">
    <section class="upper-header">
      <!-- <img class="logo-white" src="../assets/CatwikiLogo.svg" alt="" /> -->
      <div class="inner-container column g-1">
        <div class="logo-white"></div>
        <h2 class="upper-text">
          Get to know more about your <br />
          cat breed
        </h2>
        <market-filter />
      </div>
    </section>
    <section class="below-header flex">
      <div class="inner-content">
        <div class="breeds-title">
          66+ Breeds For you <br />
          to discover
        </div>
      </div>
    </section>
  </header>
</template>

<script>
  import marketList from '../cmps/market-list.cmp.vue'
  import marketEdit from '../views/market-edit.vue'
  import marketDetails from '../views/market-details.vue'
  import marketFilter from '../cmps/market-filter.vue'
  import marketSort from '../cmps/market-sort.vue'
  import chart from '../cmps/chart.vue'
  import MarketFilter from '../cmps/market-filter.vue'

  export default {
    name: 'MarketApp',
    components: {
      marketList,
      marketEdit,
      marketFilter,
      marketDetails,
      marketSort,
      chart,
      MarketFilter,
    },
    data() {
      return {}
    },
    methods: {
      removeMarket(marketId) {
        this.$store.dispatch({type: 'removeMarket', id: marketId})
      },
      setFilter(filterBy) {
        this.$store.dispatch({type: 'filter', filterBy})
      },
    },
    computed: {
      markets() {
        return this.$store.getters.markets
      },
    },
    unmounted() {},
  }
</script>
