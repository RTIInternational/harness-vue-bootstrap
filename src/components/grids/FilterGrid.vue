<script setup>
import { subset, rows, gridProps } from "./gridUtils";
import { sharedFilterProps } from "../inputs/utils/sharedInputProps";
import { defineProps } from "vue";
import { useHarnessComposable } from "@rtidatascience/harness-vue";

const props = defineProps({
  ...sharedFilterProps,
  ...gridProps,
  labelPosition: {
    type: String,
    required: false,
    default: "horizontal",
    validator: function (value) {
      return ["horizontal", "vertical", "none"].includes(value);
    },
  },
  synchronous: {
    type: Boolean,
    required: false,
    default: false,
  },
  clearButton: {
    type: Boolean,
    required: false,
    default: true,
  },
  buttonPosition: {
    type: String,
    required: false,
    default: "center",
    validator: function (value) {
      return ["start", "center", "end", "none"].includes(value);
    },
  },
});
const harness = useHarnessComposable();
function initializeDefaultsLoadData() {
  harness.initializeDefaults(
    subset(harness.filters) ? Object.keys(subset(harness.filters)) : null,
  );
  if (!harness.synchronous && harness.pageDefinition.loadData) {
    harness.loadData();
  }
}
</script>
<template>
  <div>
    <div
      :class="'row harness-vue-bootstrap-filtergrid-row ' + props.rowClass"
      v-for="(row, idx) in rows(props, harness.filters)"
      :key="idx"
    >
      <div
        :class="
          'harness-vue-bootstrap-filtergrid-col col-' +
          12 / props.columns +
          ' ' +
          props.colClass
        "
        v-for="(filter, filterKey) in row"
        :key="harness.pageDefinition.key + '-' + filterKey"
        :id="filter.key + '-col'"
      >
        <component
          :is="filter.component"
          v-bind="{
            ...props,
            ...$attrs,
            filter: { key: filter.key, ...filter },
            ...filter.props,
          }"
          :key="pageDefinition.key + '-filtergrid-' + filter.key"
          :class="componentClass"
        />
      </div>
    </div>
    <div
      class="row button-row harness-vue-bootstrap-filtergrid-row harness-vue-bootstrap-filtergrid-buttonrow"
      v-if="
        (props.synchronous || props.clearButton) &&
        props.buttonPosition !== 'none'
      "
    >
      <div :class="'col-12 text-' + props.buttonPosition">
        <button
          v-if="props.synchronous"
          class="btn btn-primary btn harness-vue-bootstrap-filtergrid-applybutton"
          @click="harness.loadData"
          role="button"
        >
          Apply Filters
        </button>
        &nbsp;
        <button
          v-if="props.clearButton"
          role="button"
          class="btn btn-primary btn harness-vue-bootstrap-filtergrid-clearbutton"
          @click="initializeDefaultsLoadData"
        >
          Clear Filters
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.button-row {
  margin-top: 10px;
}
</style>
