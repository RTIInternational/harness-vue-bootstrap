<script setup>
import { rows, colSize, gridProps } from "./gridUtils";
import { computed, defineProps } from "vue";
import { useHarnessComposable } from "@rtidatascience/harness-vue";

const props = defineProps(gridProps);
const harness = useHarnessComposable();

const chartRows = computed(() => rows(props, harness.charts));
</script>

<template>
  <div>
    <div
      :class="'row harness-vue-bootstrap-chartgrid-row ' + rowClass"
      v-for="(row, rowidx) in chartRows"
      :key="rowidx"
    >
      <div
        :class="'col-md-' + colSize(row, props) + ' ' + colClass"
        v-for="(chart, colidx) in row"
        :key="colidx"
      >
        <component
          :is="chart.component"
          v-bind="{
            ...props,
            ...$attrs,
            chart: { key: chart.key, ...chart },
            ...chart.props,
          }"
          :key="harness.pageDefinition.key + '-chartgrid-' + chart.key"
          :class="componentClass"
        />
      </div>
    </div>
  </div>
</template>
