<template>
  <div>
    <div
      :class="'row harness-ui-chartgrid-row ' + rowClass"
      v-for="(row, rowidx) in chartRows"
      :key="rowidx"
    >
      <div
        :class="'col-md-' + colSize(row) + ' ' + colClass"
        v-for="(chart, colidx) in row"
        :key="colidx"
      >
        <component
          :is="chart.component"
          v-bind="{ chart, ...chart.props, ...$props, ...$attrs }"
          :key="pageDefinition.key + '-chartgrid-' + chart.key"
          :class="componentClass"
        />
      </div>
    </div>
  </div>
</template>

<script>
import rows from "./mixins/rows";
export default {
  name: "ChartGrid",
  mixins: [rows],
  computed: {
    chartRows() {
      return this.rows(this.charts);
    },
  },
};
</script>
