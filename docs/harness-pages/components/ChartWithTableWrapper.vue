<template>
<div>
    <ChartWithTable
        :chart="{ key: 'exampleChartWithTable' }"
        :chartComponent="dynamicComponent"
        
        v-bind="{...$props, ...$attrs}"
    />
</div>
</template>

<script>
export default {
  name: 'ChartWithTableWrapper',
  props: {
    refName: {
      type: String,
      require: false,
      default: 'barChart-amcharts'
    }
  },
  data() {
    return {
      dynamicComponent: null
    }
  },
  mounted () {
    // This dynamic import logic is recommended by 
    // https://vuepress.vuejs.org/guide/using-vue.html
    import('./barChart.vue').then(BarChart => {
        this.dynamicComponent = BarChart.default
    })
  },
}
</script>
