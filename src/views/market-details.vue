<template>
  <section v-if="breed">
    <pre>{{ breed }}</pre>
  </section>
</template>

<script>
  export default {
    name: 'BreedDetails',
    components: {},
    data() {
      return {
        breed: null,
        isShow: true,
      }
    },
    created() {},
    methods: {
      async loadBreed() {
        if (!this.breedId) return // prevent the run of the watcher when change route
        const breed = await this.$store.dispatch({
          type: 'getBreedById',
          breedId: this.breedId,
        })
        this.breed = breed
      },
    },
    computed: {
      //opt 2 use computed for the breedId
      breedId() {
        return this.$route.params.breedId
      },
      showBreed() {
        console.log(this.breed)
        return this.breed.imgUrl
      },
    },
    //opt1 use the param specf as the func
    //   watch: {
    //     '$route.params.breedId'(id) {
    //       console.log('Changed to', id);
    //       this.loadBreed();
    //     },
    //   },
    //opt 2
    watch: {
      // when the computed breedId run the watch handler also run
      breedId: {
        handler() {
          this.loadBreed()
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
