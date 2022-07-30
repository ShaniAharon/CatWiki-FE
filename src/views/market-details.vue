<template>
  <section v-if="breed">
    <!-- <pre>{{ breed }}</pre> -->
    <div class="flex">
      <img :src="breed.image.url" alt="" />
      <div>
        <h2>{{ breed.name }}</h2>
        <p>{{ breed.description }}</p>
        <h2>
          Temperament:
          {{ breed.temperament }}
        </h2>
        <h2>Origin: {{ breed.origin }}</h2>
        <h2>Life Span: {{ breed.life_span }} years</h2>
        <h2>Adaptability: {{ breed.adaptability }}</h2>
        <h2>Affection Level: {{ breed.affection_level }}</h2>
        <h2>Child Friendly: {{ breed.child_friendly }}</h2>
        <h2>Grooming: {{ breed.grooming }}</h2>
        <h2>Intelligence: {{ breed.intelligence }}</h2>
        <h2>Health Issues: {{ breed.health_issues }}</h2>
        <h2>Health Issues: {{ breed.health_issues }}</h2>
        <h2>Social Needs: {{ breed.social_needs }}</h2>
        <h2>Social Needs: {{ breed.social_needs }}</h2>
        <h2>Stranger Friendly: {{ breed.stranger_friendly }}</h2>
      </div>
    </div>
    <div v-if="imgs">
      <h2>Other photos</h2>
      <div v-for="img in imgs">
        <img :src="img" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'BreedDetails',
    components: {},
    data() {
      return {
        breed: null,
        imgs: null,
      }
    },
    async created() {
      this.imgs = await this.$store.dispatch({
        type: 'getImgs',
        breedId: this.breedId,
      })
    },
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
