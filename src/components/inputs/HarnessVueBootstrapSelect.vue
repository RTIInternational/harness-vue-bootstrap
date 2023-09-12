<script setup>
import { sharedFilterProps, isFilterProp } from "./utils/sharedInputProps";
import { defineProps, computed } from "vue";
import { useHarnessComposable } from "../../../../harness-vue/src/harness";
import useBoundValue from "./utils/useBoundValue";
import formControlWrapper from "./formControlWrapper.vue";

const harness = useHarnessComposable();

const props = defineProps({
  ...sharedFilterProps,
  ...isFilterProp,
  multiple: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const boundValue = useBoundValue(props, harness);

const getLabelClassList = computed(() => {
  let labelClassList = [
    `form-label`,
    "harness-vue-bootstrap-select-label",
    `harness-vue-bootstrap-${props.labelPosition}-label`,
  ];
  return labelClassList;
});
const getInputClassString = computed(() => {
  let inputClassList = [
    `form-control`,
    `form-select`,
    `harness-vue-bootstrap-select`,
  ];
  if (harness.isFilterDirty(props.filter.key)) {
    inputClassList.push(`dirty-filter-select`);
  }
  if (props.multiple) {
    inputClassList.push(`harness-vue-bootstrap-multi-select`);
  }
  return inputClassList.join(" ");
});
</script>
<template>
  <formControlWrapper :labelClassList="getLabelClassList" v-bind="{ ...props }">
    <template v-slot:input>
      <div
        class="input-group"
        v-if="labelPosition.toLowerCase() !== 'floating'"
      >
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
        <select
          :multiple="props.multiple"
          :class="getInputClassString"
          v-model="boundValue"
          :id="`${props.filter.key}-select`"
          :aria-labelledby="`${props.filter.key}-label`"
          :aria-label="props.filter.label"
        >
          <option
            v-for="option in harness.getOptionsForFilter(props.filter.key)"
            :key="option.key"
            :value="option.key"
            :disabled="option.disabled"
            :hidden="option.hidden"
            :title="option.label"
            v-html="option.label"
          />
        </select>
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
      <select
        v-else
        :multiple="props.multiple"
        :class="getInputClassString"
        v-model="boundValue"
        :id="`${props.filter.key}-select`"
        :aria-labelledby="`${props.filter.key}-label`"
        :aria-label="props.filter.label"
      >
        <option
          v-for="option in harness.getOptionsForFilter(props.filter.key)"
          :key="option.key"
          :value="option.key"
          :disabled="option.disabled"
          :hidden="option.hidden"
          :title="option.label"
          v-html="option.label"
        />
      </select>
      <small
        v-if="props.helperText"
        v-html="props.helperText"
        :class="`form-text harness-vue-bootstrap-helper-text harness-vue-bootstrap-input-helper-text ${props.helperTextClass}`"
      />
    </template>
  </formControlWrapper>
</template>
