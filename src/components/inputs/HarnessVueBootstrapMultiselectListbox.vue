<template>
  <div>
    <label
      class="harness-vue-bootstrap-select-label harness-vue-bootstrap-multiselect-listbox-top-label"
      >{{ props.filter.label }}</label
    >
    <div class="row" v-if="searchable">
      <div class="col">
        <input
          type="text"
          :id="`harness-vue-bootstrap-multiselect-listbox-search-${props.filter.key}`"
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
<script setup>
import { sharedFilterProps, isFilterProp } from "./utils/sharedInputProps";
import { computed, defineProps, ref } from "vue";
import { useHarnessComposable } from "@rtidatascience/harness-vue";

const props = defineProps({
  ...sharedFilterProps,
  ...isFilterProp,
  searchable: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const harness = useHarnessComposable();

const leftBox = ref([]);
const rightBox = ref([]);
const search = ref("");
const searchDisabled = ref(false);

const leftBoxOptions = computed(() => {
  return unselectedOptions.value.filter(
    (f) =>
      search.value === "" ||
      f.label.toLowerCase().includes(search.value.toLowerCase()),
  );
});

const rightBoxOptions = computed(() => {
  return harness
    .getOptionsForFilter(props.filter.key)
    .filter((f) => harness.getFilter(props.filter.key).includes(f.key));
});

const unselectedOptions = computed(() => {
  return harness
    .getOptionsForFilter(props.filter.key)
    .filter((f) => !harness.getFilter(props.filter.key).includes(f.key));
});

function setFilterLoadData(newVal) {
  harness.setFilter(props.filter.key, newVal);
  if (!harness.pageDefinition.synchronous && harness.pageDefinition.loadData) {
    harness.loadData();
  }
}

function leftToRight() {
  const newVal = harness.getFilter(props.filter.key).concat(leftBox);
  setFilterLoadData(newVal);
}
function rightToLeft() {
  const newVal = harness
    .getFilter(props.filter.key)
    .filter((f) => !rightBox.value.includes(f));
  setFilterLoadData(newVal);
}
</script>
