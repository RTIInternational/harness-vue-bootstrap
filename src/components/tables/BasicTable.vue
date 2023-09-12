<script setup>
import { computed, defineProps } from "vue";
import { useHarnessComposable } from "@rtidatascience/harness-vue";

const harness = useHarnessComposable();
const props = defineProps({
  chart: {
    type: Object,
    required: true,
  },
  tableClass: {
    type: String,
    required: false,
    default: null,
  },
  headerClass: {
    type: String,
    required: false,
    default: null,
  },
  labelClass: {
    type: String,
    required: false,
    default: null,
  },
  rowClass: {
    type: String,
    required: false,
    default: null,
  },
  cellClass: {
    type: String,
    required: false,
    default: null,
  },
  rowHeaderCol: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const chartData = computed(() => {
  let chartData = harness.getChartData(props.chart.key) || null;
  let tableAdapter =
    harness.getChartProps(props.chart.key).tableAdapter || null;
  if (chartData) {
    if (tableAdapter) {
      try {
        return tableAdapter(
          props.chart,
          props.filters,
          chartData,
          harness.pageStore,
        );
      } catch (error) {
        throw String(
          "There was an error in the formatted text from your tableAdapter function: " +
            String(error),
        );
      }
    }
  }
  return chartData;
});

const validatedChartData = computed(() => {
  if (chartData.value) {
    return harness.validateChartData(chartData.value, props.chart.key);
  }
  return [];
});

const columnHeaders = computed(() => {
  return validatedChartData.value
    ? Object.keys(validatedChartData.value[0])
    : [];
});
</script>
<template>
  <div
    v-if="validatedChartData && validatedChartData.length"
    :id="props.chart.key + '_data_table'"
    class="harness-vue-bootstrap-datatable"
  >
    <table :class="'harness-vue-bootstrap-table table ' + tableClass">
      <thead :class="headerClass">
        <tr>
          <th
            v-for="(column, idx) in columnHeaders"
            scope="col"
            :key="idx"
            :class="labelClass"
            v-html="column"
          />
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, idx) in validatedChartData"
          :key="idx"
          :class="rowClass"
        >
          <template v-for="(column, idx2) in columnHeaders">
            <th
              v-if="idx2 === 0 && rowHeaderCol"
              :key="idx2"
              :class="cellClass"
              v-html="row[column]"
              scope="row"
            />
            <td
              v-else
              :key="`${idx2}-else`"
              :class="cellClass"
              v-html="row[column]"
            />
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.row {
  margin-top: 10px;
}

.card {
  min-height: 100%;
}
.harness-vue-bootstrap-table {
  overflow: auto;
}
</style>
