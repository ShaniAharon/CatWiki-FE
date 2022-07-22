<template>
  <section class="chart">
    <BubbleChart v-if="testData" class="bubble-chart" :chartData="testData" />
    <div class="chart-info">
      <h4>Company size</h4>
      <img src="../assets/company-img.png" alt="" />
    </div>
  </section>
</template>

<script>
  import {BubbleChart} from 'vue-chart-3'
  import {Chart, registerables} from 'chart.js'
  Chart.register(...registerables)
  export default {
    name: 'chart',
    data() {
      return {
        testData: null,
      }
    },
    async created() {
      const apiData = await this.$store.dispatch({type: 'getData'})
      this.testData = {
        datasets: [
          {
            label: 'Label',
            data: apiData,
            backgroundColor: '#818181',
          },
        ],
      }
    },
    methods: {},
    computed: {},
    components: {
      BubbleChart,
    },
  }
</script>

<style></style>
