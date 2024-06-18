<script setup>
import { defineProps, ref, computed } from "vue";
import { useHarnessComposable } from "@rtidatascience/harness-vue";

const harness = useHarnessComposable();
const props = defineProps({
  chart: {
    type: Object,
    required: true,
  },
  chartComponent: {
    type: [Object, Function],
    required: true,
  },
  showDownloadButton: {
    type: Boolean,
    required: false,
    default: true,
  },
  buttonPosition: {
    type: String,
    required: false,
    default: "header",
    validator: function (value) {
      return value in ["header", "footer"];
    },
  },
  showTableButtonText: {
    type: String,
    required: false,
    default: "Show Table",
  },
  showChartButtonText: {
    type: String,
    required: false,
    default: "Show Chart",
  },
  downloadButtonText: {
    type: String,
    required: false,
    default: "Download as CSV",
  },
  showTitleForViews: {
    type: Array,
    required: false,
    default: () => ["chart", "table"],
    validator: function (value) {
      return value.every((v) => ["chart", "table"].includes(v));
    },
  },
});

const view = ref("chart");

const showTitle = computed(
  () => props.showTitleForViews.includes(view.value) && props.chart.title,
);

function toggleView() {
  switch (view.value) {
    case "chart":
      view.value = "table";
      break;
    case "table":
      view.value = "chart";
      break;
  }
}
</script>
<template>
  <div :id="`${props.chart.key}-container`" class="card">
    <div
      :class="`card-header harness-vue-bootstrap-chartwithtable-header d-flex align-items-center ${
        props.buttonPosition === 'header'
          ? 'justify-content-between'
          : 'justify-content-start'
      }`"
      v-if="showTitle || props.buttonPosition === 'header'"
    >
      <span v-if="showTitle">{{ props.chart.title }}</span>
      <span v-else></span>
      <span
        class="harness-vue-bootstrap-chartwithtable-header-buttons"
        v-if="props.buttonPosition === 'header'"
      >
        <button
          class="btn btn-sm harness-vue-bootstrap-chartwithtable-toggle-button"
          @click="toggleView"
        >
          {{
            view === "table"
              ? props.showChartButtonText
              : props.showTableButtonText
          }}
        </button>
        <button
          v-if="props.showDownloadButton"
          class="btn btn-sm harness-vue-bootstrap-chartwithtable-download-button"
          @click="harness.downloadCSV(props.chart.key)"
        >
          {{ props.downloadButtonText }}
        </button>
        <slot name="additional-buttons"></slot>
      </span>
    </div>
    <div
      class="card-body harness-vue-bootstrap-chartwithtable-body"
      :id="`${props.chart.key}-chart-table-body`"
    >
      <div class="harness-vue-bootstrap-chartwithtable-abovechart">
        <slot name="above-chart"></slot>
      </div>
      <component
        :is="props.chartComponent"
        v-bind="{ chart: props.chart, ...props.chart.props, ...$attrs }"
        v-if="view == 'chart'"
        :id="`chartwithtable-${props.chart.key}-chart`"
      />
      <BasicTable
        v-else
        v-bind="{ chart: props.chart, ...props.chart.props, ...$attrs }"
        :id="`chartwithtable-${props.chart.key}-table`"
        :style="scroll"
      />
      <div class="harness-vue-bootstrap-chartwithtable-belowchart">
        <slot name="below-chart"></slot>
      </div>
    </div>
    <div
      class="card-footer harness-vue-bootstrap-chartwithtable-footer d-flex justify-content-end align-items-center"
      v-if="props.buttonPosition === 'footer'"
    >
      <span class="harness-vue-bootstrap-chartwithtable-footer-buttons">
        <button
          class="btn btn-sm harness-vue-bootstrap-chartwithtable-toggle-button"
          @click="toggleView"
        >
          {{
            view === "table"
              ? props.showChartButtonText
              : props.showTableButtonText
          }}
        </button>
        <button
          v-if="props.showDownloadButton"
          class="btn btn-sm harness-vue-bootstrap-chartwithtable-download-button"
          @click="harness.downloadCSV(props.chart.key)"
        >
          {{ props.downloadButtonText }}
        </button>
        <slot name="additional-buttons"></slot>
      </span>
    </div>
  </div>
</template>
<style scoped>
.btn {
  margin-left: 1em;
}
</style>
