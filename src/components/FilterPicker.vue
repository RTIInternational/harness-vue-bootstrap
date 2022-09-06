<template>
  <div class="harness-ui-filterpicker">
    <div class="row">
      <div :class="'col-' + columnSize">
        <div class="row harness-ui-filtergrid-row">
          <div class="col">
            <slot class="harness-ui-filterpicker-label">Add Filter</slot>
            <select
              class="form-control harness-ui-filterpicker-select"
              name="filterPicker"
              id="filterPicker"
              @change="addFilter"
            >
              <option />
              <option v-for="filter in inactive" :key="filter" :value="filter">
                {{ getLabel(filter) }}
              </option>
            </select>
          </div>
          <div class="col">
            <slot class="harness-ui-filterpicker-label">Remove Filter</slot>
            <select
              class="form-control harness-ui-filterpicker-select"
              name="filterPicker"
              id="filterPicker"
              @change="removeFilter"
            >
              <option />
              <option v-for="filter in active" :key="filter" :value="filter">
                {{ getLabel(filter) }}
              </option>
            </select>
          </div>
        </div>
        <div
          class="row button-row harness-ui-filtergrid-row harness-ui-filtergrid-buttonrow pt-3"
        >
          <div :class="'col-md-12 text-' + removeButtonPosition">
            <button
              role="button"
              class="btn btn-primary btn-sm harness-ui-filtergrid-clearbutton"
              @click="
                active = [];
                initializeDefaults();
                loadData();
              "
            >
              Remove All Filters
            </button>
          </div>
        </div>
        <hr />
        <FilterGrid :only="active" v-bind="{ ...$attrs }" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "filter-picker",
  props: {
    validFilters: {
      required: true,
      type: Array,
    },
    removeButtonPosition: {
      type: String,
      required: false,
      default: "center",
      validator: function (value) {
        return ["left", "center", "right"].includes(value);
      },
    },
    columnSize: {
      type: Number,
      required: false,
      default: 12,
      validator: function (value) {
        return 12 % value === 0;
      },
    },
  },
  data() {
    return {
      active: [],
    };
  },
  computed: {
    inactive() {
      return this.validFilters.filter(
        function (f) {
          return !this.active.includes(f);
        }.bind(this)
      );
    },
  },
  methods: {
    addFilter(event) {
      if (event.target.value) {
        this.active.push(event.target.value);
      }
    },
    removeFilter(event) {
      if (event.target.value) {
        this.active = this.active.filter((a) => a !== event.target.value);
        this.setFilter(
          event.target.value,
          this.getFilterDefault(event.target.value)
        );
        this.loadData();
      }
    },
  },
};
</script>
