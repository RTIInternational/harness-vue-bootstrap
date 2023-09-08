<template>
  <div
    :id="props.chart.key + '_container'"
    :class="
      (props.card ? 'card' : '') + ' harness-vue-bootstrap-chartwithtable'
    "
  >
    <div :class="props.card ? 'card-header' : ''">
      <div class="row">
        <div :class="props.buttonPosition === 'top' ? 'col-md-6' : 'col-md-12'">
          <h3 :class="props.card ? 'card-title' : ''">
            <div class="harness-vue-bootstrap-chartwithtable-title">
              <div>
                <slot name="title">
                  {{ props.chart.title }}
                </slot>
                <button
                  v-if="props.collapsible"
                  id="collapseButton"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  :aria-controls="
                    props.chart.key +
                    'ChartTableBody' +
                    ' ' +
                    props.chart.key +
                    'Buttons'
                  "
                  @click="toggleCollapse"
                  aria-label="Toggle Chart"
                >
                  {{ props.collapsed ? "+" : "-" }}
                </button>
              </div>
              <div class="harness-vue-bootstrap-chartwithtable-subtitle">
                <slot name="subtitle"></slot>
              </div>
            </div>
          </h3>
        </div>
        <div v-if="props.buttonPosition === 'top'" class="col-md-6">
          <h3
            :class="
              'harness-vue-bootstrap-chartwithtable-buttonrow' +
              (props.card ? ' card-title' : '')
            "
          >
            <span id="button-container" class="float-right">
              <!-- dynamically change button to better enforce aria-labels -->
              <button
                v-if="props.tableDisplay == 'toggle' && view == 'chart'"
                role="button"
                :aria-label="
                  'Show Table: ' + (props.chart.title || props.chart.key)
                "
                @click="toggleView"
                class="btn btn-sm btn-primary harness-vue-bootstrap-togglebutton"
              >
                <span v-html="props.showTableButtonText" />
              </button>
              <button
                v-if="props.tableDisplay == 'toggle' && view == 'table'"
                role="button"
                :aria-label="
                  'Show Chart: ' + (props.chart.title || props.chart.key)
                "
                @click="toggleView"
                class="btn btn-sm btn-primary harness-vue-bootstrap-togglebutton"
              >
                <span v-html="props.showChartButtonText" />
              </button>
              <button
                v-if="
                  props.downloadable && harness.getChartData(props.chart.key)
                "
                role="button"
                :aria-label="
                  'Download Table: ' + (props.chart.title || props.chart.key)
                "
                @click="harness.downloadCSV(props.chart.key)"
                class="btn btn-sm btn-primary harness-vue-bootstrap-downloadbutton"
              >
                Download CSV
              </button>
              <button
                v-if="
                  props.saveImageButton && harness.getChartData(props.chart.key)
                "
                role="button"
                :aria-label="
                  'Download Table: ' + (props.chart.title || props.chart.key)
                "
                @click="saveImageButton()"
                class="btn btn-sm btn-primary harness-vue-bootstrap-downloadbutton"
              >
                Save Image
              </button>
              <slot name="additional-buttons"></slot>
            </span>
          </h3>
        </div>
      </div>
    </div>
    <div
      :id="props.chart.key + 'ChartTableBody'"
      :class="
        'card-body harness-vue-bootstrap-chartwithtable-body' +
        (props.collapsible ? ' ' + props.chart.key + '-multi-collapse' : '') +
        (props.collapsed ? ' collapse' : ' show')
      "
    >
      <div class="harness-vue-bootstrap-chartwithtable-abovechart">
        <slot name="above-chart"></slot>
      </div>

      <component
        :is="props.chartComponent"
        v-bind="{ chart: props.chart, ...props.chart.props, ...$attrs }"
        v-show="props.tableDisplay != 'toggle' || view == 'chart'"
        :key="'chartwithtable' + props.chart.key + 'chart'"
      />
      <br />
      <div class="harness-vue-bootstrap-chartwithtable-belowchart">
        <slot name="below-chart"></slot>
      </div>
      <BasicTable
        v-bind="{ chart: props.chart, ...chart.props, ...$attrs }"
        v-show="props.tableDisplay != 'toggle' || view == 'table'"
        :key="'chartwithtable' + props.chart.key + 'table'"
        :style="props.scroll"
      />
    </div>
    <h3
      :id="props.chart.key + 'Buttons'"
      :class="
        'harness-vue-bootstrap-chartwithtable-buttonrow' +
        (props.collapsible ? ' ' + props.chart.key + '-multi-collapse' : '') +
        (collapsed ? ' collapse' : ' show') +
        (props.card ? ' card-title' : '')
      "
      v-if="buttonPosition === 'bottom'"
    >
      <span id="button-container" class="float-right">
        <!-- dynamically change button to better enforce aria-labels -->
        <button
          v-if="props.tableDisplay == 'toggle' && view == 'chart'"
          role="button"
          :aria-label="'Show Table: ' + (props.chart.title || props.chart.key)"
          @click="toggleView"
          class="btn btn-sm btn-primary harness-vue-bootstrap-togglebutton"
        >
          <span v-html="props.showTableButtonText" />
        </button>
        <button
          v-if="props.tableDisplay == 'toggle' && view == 'table'"
          role="button"
          :aria-label="'Show Chart: ' + (props.chart.title || props.chart.key)"
          @click="toggleView"
          class="btn btn-sm btn-primary harness-vue-bootstrap-togglebutton"
        >
          <span v-html="props.showChartButtonText" />
        </button>
        <span v-if="props.downloadable && getChartData(props.chart.key)">
          <button
            role="button"
            :aria-label="
              'Download Table: ' + (props.chart.title || props.chart.key)
            "
            @click="harness.downloadCSV(props.chart.key, props.labels || null)"
            class="btn btn-sm btn-primary harness-vue-bootstrap-downloadbutton"
          >
            Download CSV
          </button>
        </span>
        <span v-if="saveImageButton && harness.getChartData(props.chart.key)">
          <button
            v-if="props.saveImageButton"
            role="button"
            :aria-label="
              'Download Image: ' + (props.chart.title || props.chart.key)
            "
            @click="saveImageButton()"
            class="btn btn-sm btn-primary harness-vue-bootstrap-downloadbutton"
          >
            Save Image
          </button>
        </span>
        <slot name="additional-buttons"></slot>
      </span>
    </h3>
  </div>
</template>

<script setup>
import { computed, defineProps, ref, useAttrs } from "vue";
import { useHarnessComposable } from "../../../../harness-vue/src/harness";

const harness = useHarnessComposable();
const attrs = useAttrs();
const props = defineProps({
  chart: {
    type: Object,
    required: true,
  },
  chartComponent: {
    type: [Object, Function],
    required: true,
  },
  tableDisplay: {
    type: String,
    required: false,
    default: "toggle",
    // validator: function (value) {
    //   return value in ['toggle', 'bottom']
    // }
  },
  scrollable: {
    type: Boolean,
    required: false,
    default: false,
  },
  downloadable: {
    type: Boolean,
    required: false,
    default: true,
  },
  card: {
    type: Boolean,
    required: false,
    default: true,
  },
  buttonPosition: {
    type: String,
    required: false,
    default: "top",
    // validator: function (value) {
    //   return value in ['top', 'bottom']
    // }
  },
  saveImageButton: {
    type: Function,
    required: false,
  },
  collapsible: {
    type: Boolean,
    required: false,
    default: false,
  },
  collapsibleFunc: {
    type: Function,
    required: false,
    default: () => true,
  },
  startCollapsed: {
    type: Boolean,
    required: false,
    default: false,
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
});

const view = ref("chart");

const collapsed = ref(false);
function toggleView() {
  switch (view.value) {
    case "chart":
      view.value = "table";
      break;
    case "table":
      view.value = "chart";
      break;
  }
  // props.$emit("view", props.view);
}

function toggleCollapse() {
  collapsed.value = !collapsed.value;
  // props.$emit("collapsed", props.collapsed);
  props.collapsibleFunc();
}

const labels = computed(() => {
  let ret = {};
  if (attrs.tableColumns && attrs.tableColumnLabels) {
    ret.tableColumns = attrs.tableColumns;
    ret.tableColumnLabels = attrs.tableColumnLabels;
  } else if (
    harness.getChartProps(props.chart.key).tableColumns &&
    harness.getChartProps(props.chart.key).tableColumnLabels
  ) {
    ret.tableColumns = harness.getChartProps(props.chart.key).tableColumns;
    ret.tableColumnLabels = harness.getChartProps(
      props.chart.key,
    ).tableColumnLabels;
  }
  return ret;
});

const scroll = computed(() => {
  if (props.scrollable) {
    return (
      "height:" +
      harness.getChartProps(props.chart.key).height +
      "px;overflow-y:auto;"
    );
  }
  return "";
});
</script>

<style scoped>
.btn {
  margin-left: 1em;
}

#collapseButton {
  background-color: Transparent;
  border: none;
  cursor: pointer;
  outline: none;
  float: right;
}
</style>
