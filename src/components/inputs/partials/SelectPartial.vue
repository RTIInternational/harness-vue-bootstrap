<template>
  <select
    :multiple="multiple"
    :class="
      'form-control harness-ui-select ' +
      (isFilterDirty(filter.key) ? 'dirty-filter-select' : '')
    "
    v-model="boundValue"
    :id="filter.key + '-select'"
    :aria-labelledby="filter.key + '-label'"
  >
    <option
      v-for="option in getOptionsForFilter(filter.key)"
      :key="option.key"
      :value="option.key"
      :disabled="option.disabled"
      :hidden="option.hidden"
      :title="option.label"
      v-html="option.label"
    />
  </select>
</template>
<script>
import inputProps from "../../mixins/inputProps";
import inputFilter from "../../mixins/inputFilter";
export default {
  name: "SelectPartial",
  mixins: [inputProps, inputFilter],
  props: {
    multiple: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
