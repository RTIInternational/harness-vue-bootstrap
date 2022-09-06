<template>
  <input
    class="form-check-input harness-ui-checkboxgroup-input"
    type="checkbox"
    :name="filter.key + option.key"
    :id="filter.key + option.key"
    :value="option.key"
    v-model="boundValue"
    :aria-labelledby="filter.key + option.key + '-label'"
  />
</template>
<script>
import inputProps from "../../mixins/inputProps";
import inputFilter from "../../mixins/inputFilter";
export default {
  name: "CheckboxPartial",
  mixins: [inputProps, inputFilter],
  props: {
    inline: {
      type: Boolean,
      required: true,
    },
    collapse: {
      type: Boolean,
      required: true,
    },
    collapsed: {
      type: Boolean,
      required: true,
    },
    option: {
      type: Object,
      required: true,
    },
  },
};
</script>
