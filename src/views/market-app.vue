<template>
  <header class="main-header main-layout-container">
    <section class="upper-header">
      <!-- <img class="logo-white" src="../assets/CatwikiLogo.svg" alt="" /> -->
      <div class="upper-header-content max-width-container column g-1">
        <div class="logo-white"></div>
        <h2 class="upper-text">
          Get to know more about your <br />
          cat breed
        </h2>
        <market-filter />
      </div>
    </section>
    <section class="below-header max-width-container flex">
      <!-- TODO: change the position absolute to a container warp -->
      <div class="">
        <div class="column g-4">
          <div class="below-header-content column">
            <h4 class="title-in">Most Searched Breeds</h4>
            <span class="small-line"></span>
            <div class="breeds-container">
              <div class="breeds-title">
                66+ Breeds For you <br />
                to discover
              </div>
              <button class="btn btn-more">See More -></button>
            </div>
          </div>
          <div class="cat-img-conatiner g-5 flex" v-if="homeBreeds">
            <div class="column g-1" v-for="breed in homeBreeds">
              <img class="cat-img" :src="breed.image.url" alt="" />
              <h4 class="title-in">{{ breed.name }}</h4>
            </div>
          </div>
          <div v-else>Loading...</div>
        </div>
      </div>
    </section>
  </header>
  <section class="lower-section flex main-layout-container max-width-container">
    <div class="info-container align-start column g-1">
      <span class="small-line"></span>
      <h2 class="title">
        Why should you <br />
        have a cat?
      </h2>
      <p class="info-para">
        Having a cat around you can actually <br />
        trigger the release of calming chemicals in <br />
        your body which lower stress and <br />
        anxiety levels
      </p>
      <button>Read More -></button>
    </div>
    <div class="img-gallery">
      <img class="item-1" src="../assets/image 2.png" alt="" />
      <img class="item-2" src="../assets/image 3.png" alt="" />
      <img class="item-3" src="../assets/image 1.png" alt="" />
    </div>
  </section>
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
      homeBreeds() {
        return this.$store.getters.homeBreeds
      },
    },
    unmounted() {},
  }
</script>
