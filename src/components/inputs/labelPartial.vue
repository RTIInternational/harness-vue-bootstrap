<script setup>
import { computed, defineProps } from "vue";
import sharedInputProps from "./sharedInputProps";
import { useHarnessComposable } from "../../../../harness-vue/src/harness";

const props = defineProps({
  ...sharedInputProps,
  labelClassList: {
    type: Array,
    required: true,
  },
});
const labelClassString = computed(() => {
  const labelClassList = [...props.labelClassList];
  const harness = useHarnessComposable();
  if (harness.isFilterDirty(props.filter.key)) {
    labelClassList.push(`dirty-filter-label`);
  }

  return labelClassList.join(" ");
});
</script>
<template>
  <label
    :for="props.filter.key"
    :class="labelClassString"
    v-html="props.filter.label"
  />
</template>
