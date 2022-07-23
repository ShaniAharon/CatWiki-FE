<template>
  <section class="filter-container flex align-center">
    <div class="search flex align-center">
      <input
        type="text"
        class="input-search"
        v-model="filterBy.label"
        placeholder="Enter your breed "
        @input="setFilter"
      />
    </div>
  </section>
</template>

<script>
  import {utilService} from '../services/util.service.js'
  export default {
    name: 'market-filter',
    data() {
      return {
        filterBy: {
          label: '',
        },
      }
    },
    created() {
      this.setFilter = utilService.debounce(this.setFilter, 400)
    },
    methods: {
      setFilter() {
        console.log(this.filterBy)
        this.$emit('setFilter', JSON.parse(JSON.stringify(this.filterBy)))
      },
    },
  }
</script>

<style></style>
