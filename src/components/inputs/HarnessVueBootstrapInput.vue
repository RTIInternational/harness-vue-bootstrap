<script setup>
import sharedInputProps from "./sharedInputProps";
import { defineProps, computed } from "vue";
import { useHarnessComposable } from "../../../../harness-vue/src/harness";
import useBoundValue from "../composables/useBoundValue";
import inputWrapper from "./inputWrapper.vue";

const harness = useHarnessComposable();

const props = defineProps({
  ...sharedInputProps,
  type: {
    required: false,
    type: String,
    default: "text",
    validator: function (value) {
      let validOptions = [
        "color",
        "date",
        "datetime-local",
        "email",
        "month",
        "number",
        "password",
        "search",
        "tel",
        "text",
        "time",
        "url",
        "week",
      ];
      return validOptions.includes(value);
    },
  },
  placeholder: {
    required: false,
    type: String,
    default: "",
  },
  prependComponent: {
    required: false,
    type: Object,
  },
  prependHTML: {
    required: false,
    type: String,
  },
  appendComponent: {
    required: false,
    type: Object,
  },
  appendHTML: {
    required: false,
    type: String,
  },
  min: {
    required: false,
    type: Number,
  },
  max: {
    required: false,
    type: Number,
  },
  step: {
    required: false,
    type: Number,
  },
});

const boundValue = useBoundValue(props, harness);

const getLabelClassList = computed(() => {
  let labelClassList = [
    `form-label`,
    "harness-vue-bootstrap-input-label",
    `harness-vue-bootstrap-${props.type}-label`,
    `harness-vue-bootstrap-${props.labelPosition}-label`,
  ];
  return labelClassList;
});
const getInputClassString = computed(() => {
  let inputClassList = [
    `form-control`,
    `harness-vue-bootstrap-${props.type}-input`,
  ];
  if (harness.isFilterDirty(props.filter.key)) {
    inputClassList.push(`dirty-filter-input`);
  }
  return inputClassList.join(" ");
});
</script>
<template>
  <inputWrapper :labelClassList="getLabelClassList" v-bind="{ ...props }">
    <template v-slot:input>
      <div class="input-group">
        <!-- Prepended Component or text -->
        <component
          :is="props.prependComponent"
          v-if="props.prependComponent"
          v-bind="{ ...props, ...$attrs }"
        />
        <span
          class="input-group-text"
          v-else-if="props.prependHTML"
          v-html="props.prependHTML"
        />
        <!-- Input -->
        <input
          :type="props.type"
          :class="getInputClassString"
          :placeholder="props.placeholder"
          v-model="boundValue"
          :id="`${props.filter.key}-${props.type}-input`"
          :aria-labelledby="`${props.filter.key}-label`"
          :aria-label="`${props.filter.label}`"
          :min="props.min"
          :max="props.max"
          :step="props.step"
        />
        <!-- Appended component or text -->
        <component
          :is="props.appendComponent"
          v-if="props.appendComponent"
          v-bind="{ ...props, ...$attrs }"
        />
        <span
          class="input-group-text"
          v-html="props.appendHTML"
          v-if="props.appendHTML"
        />
        <!-- clear button -->
        <button
          v-if="props.inputClearButton"
          class="btn btn-outline-secondary harness-vue-bootstrap-input-group-clear-button"
          @click="harness.initDefault(props.filter.key)"
        >
          <i class="bi bi-x"></i>
        </button>
      </div>
      <small
        v-if="props.helperText"
        v-html="props.helperText"
        :class="`form-text harness-vue-bootstrap-helper-text harness-vue-bootstrap-input-helper-text ${props.helperTextClass}`"
      />
    </template>
  </inputWrapper>
</template>
