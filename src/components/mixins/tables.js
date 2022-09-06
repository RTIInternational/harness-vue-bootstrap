export default {
  props: {
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
  },
  computed: {
    columnHeaders() {
      return this.validatedChartData
        ? Object.keys(this.validatedChartData[0])
        : [];
    },
    validatedChartData() {
      return this.validateChartData(this.chartData, this.chart.key);
    },
  },
};
