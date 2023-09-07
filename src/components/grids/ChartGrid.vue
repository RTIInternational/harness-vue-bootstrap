<template>
  <div>
    <div
      :class="'row harness-vue-bootstrap-chartgrid-row ' + rowClass"
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
          v-bind="{ chart, ...chart.props, ...props, ...$attrs }"
          :key="pageDefinition.key + '-chartgrid-' + chart.key"
          :class="componentClass"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { rows, colSize, gridProps } from "./gridUtils";
import { computed, defineProps } from "vue";
import { useHarnessComposable } from "../../../../harness-vue/src/harness";

const props = defineProps(gridProps);
const harness = useHarnessComposable();

const chartRows = computed(() => rows(harness.charts));
</script>
