<template>
  <input
    class="form-check-input harness-vue-bootstrap-radiogroup-input"
    type="radio"
    :name="filter.key"
    :id="filter.key + option.key"
    :value="option.key"
    :disabled="option.disabled"
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
    option: {
      type: Object,
      required: true,
    },
  },
};
</script>
