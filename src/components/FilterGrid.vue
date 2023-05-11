<template>
  <div>
    <div
      :class="'row harness-vue-bootstrap-filtergrid-row ' + rowClass"
      v-for="(row, idx) in rows(filters)"
      :key="idx"
    >
      <div
        :class="
          'harness-vue-bootstrap-filtergrid-col col-sm-' +
          12 / columns +
          ' ' +
          colClass
        "
        v-for="(filter, filterKey) in row"
        :key="pageDefinition.key + '-' + filterKey"
        :id="filter.key + '-col'"
      >
        <component
          :is="filter.component"
          v-bind="{ filter, ...filter.props, ...$props, ...$attrs }"
          :key="pageDefinition.key + '-filtergrid-' + filter.key"
          :class="componentClass"
        />
      </div>
    </div>
    <div
      class="row button-row harness-vue-bootstrap-filtergrid-row harness-vue-bootstrap-filtergrid-buttonrow"
      v-if="(synchronous || clearButton) && buttonPosition !== 'none'"
    >
      <div :class="'col-md-12 text-' + buttonPosition">
        <button
          v-if="synchronous"
          class="btn btn-primary btn-sm harness-vue-bootstrap-filtergrid-applybutton"
          @click="loadData"
          role="button"
        >
          Apply Filters
        </button>
        &nbsp;
        <button
          v-if="clearButton"
          role="button"
          class="btn btn-primary btn-sm harness-vue-bootstrap-filtergrid-clearbutton"
          @click="initializeDefaultsLoadData"
        >
          Clear Filters
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import rows from "./mixins/rows";
import inputProps from "./mixins/inputProps";
export default {
  name: "FilterGrid",
  mixins: [rows, inputProps],
  props: {
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
        return ["left", "center", "right", "none"].includes(value);
      },
    },
  },
  methods: {
    initializeDefaultsLoadData() {
      this.initializeDefaults(
        this.subset(this.filters)
          ? Object.keys(this.subset(this.filters))
          : null
      );
      if (!this.synchronous && this.pageDefinition.loadData) {
        this.loadData();
      }
    },
  },
};
</script>
<style scoped>
.button-row {
  margin-top: 10px;
}
</style>
