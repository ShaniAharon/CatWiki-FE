<template>
  <section class="market-sort flex align-center">
    <ul class="sort-list flex clean-list">
      <li>
        <h4>Companies(All) <i class="fa-solid fa-caret-down"></i></h4>
      </li>
      <li>
        <h4>Topics (All) <i class="fa-solid fa-caret-down"></i></h4>
      </li>
      <li>
        <h4>Verticals (All) <i class="fa-solid fa-caret-down"></i></h4>
      </li>
      <li>
        <h4>Audiences (All) <i class="fa-solid fa-caret-down"></i></h4>
      </li>
      <li>
        <h4>Regions (All) <i class="fa-solid fa-caret-down"></i></h4>
      </li>
    </ul>
    <button class="btn">button</button>
    <button class="btn">button</button>
    <div class="calendar-container g-2 flex align-center">
      <div class="column cl-txt">
        <span class="data-span">All Data</span>
        <h4 class="b">Jan 01,2020 - Future</h4>
      </div>
      <div class="flex g-3 align-center">
        <i class="fa-solid fa-caret-down"></i>
        <i class="fa-regular fa-calendar"></i>
      </div>
    </div>
  </section>
</template>

<script>
  import {utilService} from '../services/util.service.js'
  export default {
    name: 'market-sort',
    data() {
      return {
        sortBy: {
          label: '',
        },
      }
    },
    created() {
      this.setSort = utilService.debounce(this.setSort, 400)
    },
    methods: {
      setSort() {
        this.$emit('setSort', JSON.parse(JSON.stringify(this.sortBy)))
      },
    },
  }
</script>

<style></style>
