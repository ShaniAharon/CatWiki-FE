<template>
  <section
    class="filter-container space-between main-layout-container flex align-center g-1"
  >
    <div class="search flex align-center g-1">
      <input
        type="text"
        class="input-search"
        v-model="filterBy.label"
        placeholder="Search "
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
