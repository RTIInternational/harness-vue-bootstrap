<script setup>
import { defineProps, computed } from "vue";
import { useHarnessComposable } from "@rtidatascience/harness-vue";
import { sharedFilterProps, isFilterProp } from "./utils/sharedInputProps";
import labelPartial from "./labelPartial.vue";

const props = defineProps({
  ...sharedFilterProps,
  ...isFilterProp,
  labelClassList: {
    type: Array,
    required: true,
  },
});

const getLabelWrapperClass = computed(() => {
  let labelColumnClass = ["harness-vue-bootstrap-label-wrapper"];
  if (props.labelPosition.toLowerCase() === "horizontal") {
    labelColumnClass.push(`col-${props.labelColumnSize}`);
  }
  const harness = useHarnessComposable();
  if (harness.isFilterDirty(props.filter.key)) {
    labelColumnClass.push(`dirty-filter-label-wrapper`);
  }

  return labelColumnClass.join(" ");
});

const getInputWrapperClass = computed(() => {
  let inputColumnClass = ["harness-vue-bootstrap-input-wrapper"];
  if (props.labelPosition.toLowerCase() === "horizontal") {
    inputColumnClass.push(`col-${12 - props.labelColumnSize}`);
  }
  const harness = useHarnessComposable();
  if (harness.isFilterDirty(props.filter.key)) {
    inputColumnClass.push(`dirty-filter-input-wrapper`);
  }

  return inputColumnClass.join(" ");
});

const getWrapperClass = computed(() => {
  let wrapperClass = ["harness-vue-bootstrap-input-wrapper"];
  if (props.labelPosition.toLowerCase() === "horizontal") {
    wrapperClass.push("row");
  } else if (props.labelPosition.toLowerCase() === "floating") {
    wrapperClass.push("form-floating");
  }
  return wrapperClass.join(" ");
});
</script>
<template>
  <div
    :class="getWrapperClass"
    v-if="labelPosition.toLowerCase() !== 'floating'"
  >
    <div :class="getLabelWrapperClass">
      <labelPartial
        :labelClass="props.labelClassList"
        v-bind="{ ...props }"
        v-if="
          props.labelPosition.toLowerCase() !== 'none' &&
          props.labelPosition.toLowerCase() !== 'floating'
        "
      />
    </div>
    <div :class="getInputWrapperClass">
      <slot name="input"></slot>
    </div>
  </div>

  <div :class="getWrapperClass" v-else>
    <slot name="input"></slot>
    <labelPartial :labelClass="props.labelClassList" v-bind="{ ...props }" />
  </div>
</template>
