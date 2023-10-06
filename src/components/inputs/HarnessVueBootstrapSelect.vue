<script setup>
import { sharedFilterProps, isFilterProp } from "./utils/sharedInputProps";
import { defineProps, computed } from "vue";
import { useHarnessComposable } from "@rtidatascience/harness-vue";
import useBoundValue from "./utils/useBoundValue";
import useIsValid from "./utils/useIsValid";
import useDescribedBy from "./utils/useDescribedBy";
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
  inputClearButton: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const boundValue = useBoundValue(props, harness);
const isValid = useIsValid(props, harness);
const describedBy = useDescribedBy(props);

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

  if (props.allowValidation && harness.isFilterDirty(props.filter.key)) {
    inputClassList.push(
      harness.isFilterValid(props.filter.key) ? "is-valid" : "is-invalid",
    );
  }

  return inputClassList.join(" ");
});
</script>
<template>
  <formControlWrapper :labelClassList="getLabelClassList" v-bind="{ ...props }">
    <template v-slot:input>
      <div
        :class="`input-group ${props.allowValidation ? 'has-validation' : ''}`"
        v-if="labelPosition.toLowerCase() !== 'floating'"
      >
        <!-- Prepended Component or text -->
        <component
          :is="props.prependComponent"
          v-if="props.prependComponent"
          v-bind="{ ...props, ...$attrs }"
          :id="`${props.filter.key}-prepended-component`"
        />
        <span
          class="input-group-text"
          v-else-if="props.prependHTML"
          v-html="props.prependHTML"
          :id="`${props.filter.key}-prepended-html`"
        />
        <!-- Input -->
        <select
          :multiple="props.multiple"
          :class="getInputClassString"
          :disabled="props.disabled"
          v-model="boundValue"
          :id="`${props.filter.key}-select`"
          :aria-labelledby="`${props.filter.key}-label`"
          :aria-label="props.filter.label"
          :aria-describedby="describedBy"
          :valid="isValid"
          :invalid="!isValid"
          :required="props.required"
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
          :id="`${props.filter.key}-appended-component`"
        />
        <span
          class="input-group-text"
          v-html="props.appendHTML"
          v-if="props.appendHTML"
          :id="`${props.filter.key}-appended-html`"
        />
        <!-- clear button -->
        <button
          v-if="props.inputClearButton"
          class="btn btn-outline-secondary harness-vue-bootstrap-input-group-clear-button"
          :id="`${props.filter.key}-clear-button`"
          @click="harness.initDefault(props.filter.key)"
        >
          <i class="bi bi-x"></i>
        </button>
        <!-- Validity Messages -->
        <div
          class="valid-feedback"
          :id="`${props.filter.key}-valid-feedback`"
          v-if="props.validFeedback"
          v-html="props.validFeedback"
        ></div>
        <div
          class="invalid-feedback"
          :id="`${props.filter.key}-invalid-feedback`"
          v-if="props.invalidFeedback"
          v-html="props.invalidFeedback"
        ></div>
      </div>
      <select
        v-else
        :multiple="props.multiple"
        :class="getInputClassString"
        :disabled="props.disabled"
        v-model="boundValue"
        :id="`${props.filter.key}-select`"
        :aria-labelledby="`${props.filter.key}-label`"
        :aria-label="props.filter.label"
        :aria-describedby="describedBy"
        :valid="isValid"
        :invalid="!isValid"
        :required="props.required"
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
        :id="`${props.filter.key}-helper-text`"
        :class="`form-text harness-vue-bootstrap-helper-text harness-vue-bootstrap-input-helper-text ${props.helperTextClass}`"
      />
      <!-- Validity Messages -->
      <div
        class="valid-feedback"
        :id="`${props.filter.key}-valid-feedback`"
        v-if="props.validFeedback"
        v-html="props.validFeedback"
      ></div>
      <div
        class="invalid-feedback"
        :id="`${props.filter.key}-invalid-feedback`"
        v-if="props.invalidFeedback"
        v-html="props.invalidFeedback"
      ></div>
    </template>
  </formControlWrapper>
</template>
