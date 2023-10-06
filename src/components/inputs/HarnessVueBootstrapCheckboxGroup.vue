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
  type: {
    required: false,
    type: String,
    default: "checkbox",
    validator: function (value) {
      let validOptions = ["checkbox", "radio", "switch"];
      return validOptions.includes(value);
    },
  },
  inline: {
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
    "harness-vue-bootstrap-input-label",
    `harness-vue-bootstrap-${props.type}-label`,
    `harness-vue-bootstrap-${props.labelPosition}-label`,
  ];
  return labelClassList;
});
const getInputClassString = computed(() => {
  let inputClassList = [
    `form-check-input`,
    `harness-vue-bootstrap-checkboxgroup-input`,
  ];
  if (props.type.toLowerCase() === "radio") {
    inputClassList.push(`harness-vue-bootstrap-radio`);
  }

  if (harness.isFilterDirty(props.filter.key)) {
    inputClassList.push(`dirty-filter-input`);
  }

  if (props.allowValidation && harness.isFilterDirty(props.filter.key)) {
    inputClassList.push(
      harness.isFilterValid(props.filter.key) ? "is-valid" : "is-invalid",
    );
  }

  return inputClassList.join(" ");
});

const getOptionLabelClassString = computed(() => {
  let optionLabelClassList = [
    `form-check-label`,
    `harness-vue-bootstrap-checkboxgroup-label`,
  ];
  if (props.type.toLowerCase() === "radio") {
    optionLabelClassList.push(`harness-vue-bootstrap-radio-label`);
  }
  return optionLabelClassList.join(" ");
});

const getWrapperClassString = computed(() => {
  let wrapperClassList = ["form-check"];
  if (props.type === "switch") {
    wrapperClassList.push("form-switch");
  }
  if (props.inline) {
    wrapperClassList.push("form-check-inline");
  }
  return wrapperClassList.join(" ");
});
</script>
<template>
  <formControlWrapper :labelClassList="getLabelClassList" v-bind="{ ...props }">
    <template v-slot:input>
      <!-- Input -->
      <div
        :class="getWrapperClassString"
        v-for="(option, idx) in harness.getOptionsForFilter(props.filter.key)"
        :key="option + idx"
      >
        <input
          :class="getInputClassString"
          :type="props.type === 'radio' ? 'radio' : 'checkbox'"
          :name="props.filter.key + option.key"
          :id="props.filter.key + option.key"
          :value="option.key"
          :disabled="option.disabled || props.disabled"
          v-model="boundValue"
          :aria-labelledby="props.filter.key + option.key + '-label'"
          :aria-label="props.filter.label"
          :aria-describedby="describedBy"
          :valid="isValid"
          :invalid="!isValid"
          :required="props.required"
        />
        <label
          v-if="option.label"
          :id="props.filter.key + option.key + '-label'"
          :for="props.filter.key + option.key"
          :class="getOptionLabelClassString"
          v-html="option.label"
        />
      </div>
      <small
        v-if="props.helperText"
        v-html="props.helperText"
        :id="`${props.filter.key}-helper-text`"
        :class="`form-text harness-vue-bootstrap-helper-text harness-vue-bootstrap-checkbox-helper-text ${props.helperTextClass}`"
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
