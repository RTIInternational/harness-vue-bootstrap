<template>
  <div
    :id="chart.key + '_container'"
    :class="(card ? 'card' : '') + ' harness-vue-bootstrap-chartwithtable'"
  >
    <div :class="card ? 'card-header' : ''">
      <div class="row">
        <div :class="buttonPosition === 'top' ? 'col-md-6' : 'col-md-12'">
          <h3 :class="card ? 'card-title' : ''">
            <div class="harness-vue-bootstrap-chartwithtable-title">
              <div>
                <slot name="title">
                  {{ chart.title }}
                </slot>
                <button
                  v-if="collapsible"
                  id="collapseButton"
                  data-bs-toggle="collapse"
                  aria-expanded="false"
                  :aria-controls="
                    chart.key + 'ChartTableBody' + ' ' + chart.key + 'Buttons'
                  "
                  @click="toggleCollapse"
                  aria-label="Toggle Chart"
                >
                  {{ collapsed ? "+" : "-" }}
                </button>
              </div>
              <div class="harness-vue-bootstrap-chartwithtable-subtitle">
                <slot name="subtitle"></slot>
              </div>
            </div>
          </h3>
        </div>
        <div v-if="buttonPosition === 'top'" class="col-md-6">
          <h3
            :class="
              'harness-vue-bootstrap-chartwithtable-buttonrow' +
              (card ? ' card-title' : '')
            "
          >
            <span id="button-container" class="float-right">
              <!-- dynamically change button to better enforce aria-labels -->
              <button
                v-if="tableDisplay == 'toggle' && view == 'chart'"
                role="button"
                :aria-label="'Show Table: ' + (chart.title || chart.key)"
                @click="toggleView"
                class="btn btn-sm btn-primary harness-vue-bootstrap-togglebutton"
              >
                <span v-html="showTableButtonText" />
              </button>
              <button
                v-if="tableDisplay == 'toggle' && view == 'table'"
                role="button"
                :aria-label="'Show Chart: ' + (chart.title || chart.key)"
                @click="toggleView"
                class="btn btn-sm btn-primary harness-vue-bootstrap-togglebutton"
              >
                <span v-html="showChartButtonText" />
              </button>
              <button
                v-if="downloadable && getChartData(chart.key)"
                role="button"
                :aria-label="'Download Table: ' + (chart.title || chart.key)"
                @click="downloadCSV(chart.key)"
                class="btn btn-sm btn-primary harness-vue-bootstrap-downloadbutton"
              >
                Download CSV
              </button>
              <button
                v-if="saveImageButton && getChartData(chart.key)"
                role="button"
                :aria-label="'Download Table: ' + (chart.title || chart.key)"
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
      :id="chart.key + 'ChartTableBody'"
      :class="
        'card-body harness-vue-bootstrap-chartwithtable-body' +
        (collapsible ? ' ' + chart.key + '-multi-collapse' : '') +
        (collapsed ? ' collapse' : ' show')
      "
    >
      <div class="harness-vue-bootstrap-chartwithtable-abovechart">
        <slot name="above-chart"></slot>
      </div>

      <component
        :is="chartComponent"
        v-bind="{ chart, ...chart.props, ...$attrs }"
        v-show="tableDisplay != 'toggle' || view == 'chart'"
        :key="'chartwithtable' + chart.key + 'chart'"
      />
      <br />
      <div class="harness-vue-bootstrap-chartwithtable-belowchart">
        <slot name="below-chart"></slot>
      </div>
      <DataTable508
        v-bind="{ chart, ...chart.props, ...$attrs }"
        v-show="tableDisplay != 'toggle' || view == 'table'"
        :key="'chartwithtable' + chart.key + 'table'"
        :style="scroll"
      />
    </div>
    <h3
      :id="chart.key + 'Buttons'"
      :class="
        'harness-vue-bootstrap-chartwithtable-buttonrow' +
        (collapsible ? ' ' + chart.key + '-multi-collapse' : '') +
        (collapsed ? ' collapse' : ' show') +
        (card ? ' card-title' : '')
      "
      v-if="buttonPosition === 'bottom'"
    >
      <span id="button-container" class="float-right">
        <!-- dynamically change button to better enforce aria-labels -->
        <button
          v-if="tableDisplay == 'toggle' && view == 'chart'"
          role="button"
          :aria-label="'Show Table: ' + (chart.title || chart.key)"
          @click="toggleView"
          class="btn btn-sm btn-primary harness-vue-bootstrap-togglebutton"
        >
          <span v-html="showTableButtonText" />
        </button>
        <button
          v-if="tableDisplay == 'toggle' && view == 'table'"
          role="button"
          :aria-label="'Show Chart: ' + (chart.title || chart.key)"
          @click="toggleView"
          class="btn btn-sm btn-primary harness-vue-bootstrap-togglebutton"
        >
          <span v-html="showChartButtonText" />
        </button>
        <span v-if="downloadable && getChartData(chart.key)">
          <button
            role="button"
            :aria-label="'Download Table: ' + (chart.title || chart.key)"
            @click="downloadCSV(chart.key, labels || null)"
            class="btn btn-sm btn-primary harness-vue-bootstrap-downloadbutton"
          >
            Download CSV
          </button>
        </span>
        <span v-if="saveImageButton && getChartData(chart.key)">
          <button
            v-if="saveImageButton"
            role="button"
            :aria-label="'Download Image: ' + (chart.title || chart.key)"
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

<script>
export default {
  name: "ChartWithTable",
  props: {
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
  },
  data: function () {
    return {
      view: "chart",
      chartReady: false,
      collapsed: this.startCollapsed,
    };
  },
  methods: {
    toggleView() {
      switch (this.view) {
        case "chart":
          this.view = "table";
          break;
        case "table":
          this.view = "chart";
          break;
      }
      this.$emit("view", this.view);
    },
    toggleCollapse() {
      this.collapsed = !this.collapsed;
      this.$emit("collapsed", this.collapsed);
      this.collapsibleFunc();
    },
  },
  computed: {
    labels() {
      let ret = {};
      if (this.$attrs.tableColumns && this.$attrs.tableColumnLabels) {
        ret.tableColumns = this.$attrs.tableColumns;
        ret.tableColumnLabels = this.$attrs.tableColumnLabels;
      } else if (
        this.getChartProps(this.chart.key).tableColumns &&
        this.getChartProps(this.chart.key).tableColumnLabels
      ) {
        ret.tableColumns = this.getChartProps(this.chart.key).tableColumns;
        ret.tableColumnLabels = this.getChartProps(
          this.chart.key
        ).tableColumnLabels;
      }
      return ret;
    },
    scroll() {
      if (this.scrollable) {
        return (
          "height:" +
          this.getChartProps(this.chart.key).height +
          "px;overflow-y:auto;"
        );
      }
      return "";
    },
  },
};
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
