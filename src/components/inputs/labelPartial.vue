<script setup>
import { computed, defineProps } from "vue";
import { sharedFilterProps, isFilterProp } from "./utils/sharedInputProps";
import { useHarnessComposable } from "@rtidatascience/harness-vue";

const props = defineProps({
  ...sharedFilterProps,
  ...isFilterProp,
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
    :id="`${props.filter.key}-label`"
  />
</template>
