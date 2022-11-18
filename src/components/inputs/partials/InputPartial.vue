<template>
  <div class="input-group">
    <component
      :is="prependComponent"
      v-if="prependComponent"
      v-bind="{ ...$props, ...$attrs, strictError }"
    />
    <div class="input-group-prepend" v-else-if="prependHTML">
      <span class="input-group-text" v-html="prependHTML" />
    </div>
    <input
      :type="type"
      :class="`form-control harness-vue-bootstrap-${type}-input ${
        isFilterDirty(filter.key) ? 'dirty-filter-input' : ''
      } ${strictError ? 'typeahead-strict-error' : ''}`"
      :placeholder="placeholder"
      v-model="boundValue"
      :id="`${filter.key}-${type}-input`"
      :aria-labelledby="`${filter.key}-label`"
      :min="min"
      :max="max"
      :step="step"
    />
    <component
      :is="appendComponent"
      v-if="appendComponent"
      v-bind="{ ...$props, ...$attrs, strictError }"
    />
    <div class="input-group-append" v-else-if="appendHTML || inputClearButton">
      <span class="input-group-text" v-html="appendHTML" v-if="appendHTML" />
      <button
        v-if="inputClearButton"
        class="btn btn-outline-secondary harness-vue-bootstrap-input-group-clear-button"
        @click="initDefault()"
      >
        <i class="bi bi-x"></i>
      </button>
    </div>
  </div>
</template>
<script>
import inputProps from "../../mixins/inputProps";
import inputFilter from "../../mixins/inputFilter";
export default {
  name: "InputPartial",
  mixins: [inputProps, inputFilter],
  props: {
    type: {
      required: true,
      type: String,
    },
    strictError: {
      type: Boolean,
      required: true,
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
    placeholder: {
      required: false,
      type: String,
      default: "",
    },
    inputClearButton: {
      required: false,
      type: Boolean,
      default: false,
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
  },
  methods: {
    initDefault() {
      this.INITIALIZE_DEFAULTS([this.filter.key]);
      if (!this.synchronous) {
        this.loadData();
      }
    },
  },
};
</script>
