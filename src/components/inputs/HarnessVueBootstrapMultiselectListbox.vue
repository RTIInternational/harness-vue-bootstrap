<template>
  <div>
    <label
      class="harness-vue-bootstrap-select-label harness-vue-bootstrap-multiselect-listbox-top-label"
      >{{ filter.label }}</label
    >
    <div class="row" v-if="searchable">
      <div class="col">
        <input
          type="text"
          :id="`harness-vue-bootstrap-multiselect-listbox-search-${filter.key}`"
          class="form-control harness-vue-bootstrap-input harness-vue-bootstrap-multiselect-listbox-search-input"
          :disabled="searchDisabled"
          v-model="search"
        />
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-5">
        <label
          class="col-form-label harness-vue-bootstrap-select-label harness-vue-bootstrap-multiselect-listbox-select-label harness-vue-bootstrap-select-label-vertical"
          >Options</label
        >
        <select
          class="form-control harness-vue-bootstrap-select harness-vue-bootstrap-multiselect-listbox-select harness-vue-bootstrap-multiselect-listbox-select-left"
          multiple="true"
          v-model="leftBox"
        >
          <option
            v-for="option in leftBoxOptions"
            :key="option.key"
            :value="option.key"
            :title="option.label"
          >
            {{ option.label }}
          </option>
        </select>
      </div>
      <div class="col-2">
        <div class="text-center">
          <button class="btn btn-xs" @click="rightToLeft">
            <i class="bi bi-caret-left-fill"></i>
          </button>
          <button class="btn btn-xs" @click="leftToRight">
            <i class="bi bi-caret-right-fill"></i>
          </button>
        </div>
      </div>
      <div class="col-5">
        <label
          class="col-form-label harness-vue-bootstrap-select-label harness-vue-bootstrap-multiselect-listbox-select-label harness-vue-bootstrap-select-label-vertical"
          >Selected</label
        >
        <select
          class="form-control harness-vue-bootstrap-select harness-vue-bootstrap-multiselect-listbox-select harness-vue-bootstrap-multiselect-listbox-select-right"
          multiple="true"
          v-model="rightBox"
        >
          <option
            v-for="option in rightBoxOptions"
            :key="option.key"
            :value="option.key"
            :title="option.label"
          >
            {{ option.label }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>
<script>
import inputProps from "../mixins/inputProps";
import inputFilter from "../mixins/inputFilter";
export default {
  name: "HarnessVueBootstrapMultiselectListbox",
  mixins: [inputProps, inputFilter],
  props: {
    searchable: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      leftBox: [],
      rightBox: [],
      search: "",
      searchDisabled: false,
    };
  },
  computed: {
    leftBoxOptions() {
      return this.unselectedOptions.filter(
        (f) =>
          this.search === "" ||
          f.label.toLowerCase().includes(this.search.toLowerCase())
      );
    },
    rightBoxOptions() {
      return this.getOptionsForFilter(this.filter.key).filter((f) =>
        this.getFilter(this.filter.key).includes(f.key)
      );
    },
    unselectedOptions() {
      return this.getOptionsForFilter(this.filter.key).filter(
        (f) => !this.getFilter(this.filter.key).includes(f.key)
      );
    },
  },
  methods: {
    leftToRight() {
      const newVal = this.getFilter(this.filter.key).concat(this.leftBox);
      this.setFilterLoadData(this.filter.key, newVal);
    },
    rightToLeft() {
      const newVal = this.getFilter(this.filter.key).filter(
        (f) => !this.rightBox.includes(f)
      );
      this.setFilterLoadData(this.filter.key, newVal);
    },
  },
};
</script>
