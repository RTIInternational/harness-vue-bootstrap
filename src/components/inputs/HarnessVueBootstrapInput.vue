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
        "range",
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
  datalist: {
    required: false,
    type: Boolean,
    default: false,
  },
  placeholder: {
    required: false,
    type: String,
    default: "",
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
    "harness-vue-bootstrap-input-label",
    `harness-vue-bootstrap-${props.type}-label`,
    `harness-vue-bootstrap-${props.labelPosition}-label`,
  ];
  return labelClassList;
});
const getInputClassString = computed(() => {
  let inputClassList = [`harness-vue-bootstrap-${props.type}-input`];
  if (harness.isFilterDirty(props.filter.key)) {
    inputClassList.push(`dirty-filter-input`);
  }

  if (props.type === "range") {
    inputClassList.push("form-range");
  } else {
    inputClassList.push(`form-control`);
  }

  if (props.allowValidation && harness.isFilterDirty(props.filter.key)) {
    if (harness.isFilterValid(props.filter.key)) {
      if (props.showValid) {
        inputClassList.push("is-valid");
      }
    } else {
      if (props.showInvalid) {
        inputClassList.push("is-invalid");
      }
    }
  }

  return inputClassList.join(" ");
});
</script>
<template>
  <formControlWrapper :labelClassList="getLabelClassList" v-bind="{ ...props }">
    <template v-slot:input>
      <div
        :class="`input-group ${props.allowValidation ? 'has-validation' : ''}`"
        v-if="props.labelPosition !== 'floating'"
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
        <input
          :type="props.type"
          :class="getInputClassString"
          :disabled="props.disabled"
          :placeholder="props.placeholder"
          v-model="boundValue"
          :id="props.filter.key"
          :aria-labelledby="`${props.filter.key}-label`"
          :aria-label="`${props.filter.label}`"
          :aria-describedby="describedBy"
          :min="props.min"
          :max="props.max"
          :step="props.step"
          :list="props.datalist ? `${props.filter.key}-datalist` : false"
          :valid="isValid"
          :invalid="!isValid"
          :required="props.required"
        />
        <datalist v-if="props.datalist" :id="`${props.filter.key}-datalist`">
          <option
            v-for="option in harness.getOptionsForFilter(props.filter.key)"
            :key="option.key"
            :value="option.label"
          />
        </datalist>
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
          :id="`${props.filter.key}-clear-button`"
          role="button"
          class="btn btn-outline-secondary harness-vue-bootstrap-input-group-clear-button"
          @click="harness.initDefault(props.filter.key)"
        >
          <i class="bi bi-x"></i>
        </button>
        <!-- Validity Messages -->
        <div
          class="valid-feedback"
          :id="`${props.filter.key}-valid-feedback`"
          v-if="props.validFeedback && props.allowValidation && props.showValid"
          v-html="props.validFeedback"
        ></div>
        <div
          class="invalid-feedback"
          :id="`${props.filter.key}-invalid-feedback`"
          v-if="
            props.invalidFeedback && props.allowValidation && props.showInvalid
          "
          v-html="props.invalidFeedback"
        ></div>
      </div>
      <input
        v-else
        :type="props.type"
        :class="getInputClassString"
        :placeholder="props.placeholder"
        :disabled="props.disabled"
        v-model="boundValue"
        :id="props.filter.key"
        :aria-labelledby="`${props.filter.key}-label`"
        :aria-label="`${props.filter.label}`"
        :aria-describedby="describedBy"
        :min="props.min"
        :max="props.max"
        :step="props.step"
        :valid="isValid"
        :invalid="!isValid"
        :required="props.required"
      />
      <small
        v-if="props.helperText"
        v-html="props.helperText"
        :class="`form-text harness-vue-bootstrap-helper-text harness-vue-bootstrap-input-helper-text ${props.helperTextClass}`"
        :id="`${props.filter.key}-helper-text`"
      />
      <!-- Validity Messages -->
      <div
        class="valid-feedback"
        :id="`${props.filter.key}-valid-feedback`"
        v-if="props.validFeedback && props.allowValidation && props.showValid"
        v-html="props.validFeedback"
      ></div>
      <div
        class="invalid-feedback"
        :id="`${props.filter.key}-invalid-feedback`"
        v-if="
          props.invalidFeedback && props.allowValidation && props.showInvalid
        "
        v-html="props.invalidFeedback"
      ></div>
    </template>
  </formControlWrapper>
</template>
