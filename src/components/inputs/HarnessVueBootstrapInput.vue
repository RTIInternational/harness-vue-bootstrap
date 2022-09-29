<template>
  <div>
    <div
      v-if="labelPosition == 'horizontal'"
      :class="isFilterDirty(filter.key) ? 'dirty-filter-wrapper' : ''"
    >
      <div class="row form-row">
        <div
          :class="
            'col-' +
            labelColumnSize +
            ' ' +
            (isFilterDirty(filter.key) ? 'dirty-filter-label-wrapper' : '')
          "
        >
          <label
            :for="filter.key"
            :class="
              'col-form-label harness-vue-bootstrap-select-label harness-vue-bootstrap-select-label-horizontal ' +
              (isFilterDirty(filter.key) ? 'dirty-filter-label' : '')
            "
            :id="filter.key + '-label'"
            v-html="filter.label"
          />
        </div>
        <div
          :class="
            'col-' +
            (12 - labelColumnSize) +
            ' ' +
            (isFilterDirty(filter.key) ? 'dirty-filter-input-wrapper' : '')
          "
        >
          <InputPartial v-bind="{ ...$props, ...$attrs, strictError }" />
          <small
            v-if="helperText"
            v-html="helperText"
            :class="
              'form-text harness-vue-bootstrap-helper-text harness-vue-bootstrap-input-helper-text ' +
              helperTextClass
            "
          ></small>
        </div>
      </div>
    </div>
    <div
      v-if="labelPosition == 'vertical'"
      :class="isFilterDirty(filter.key) ? 'dirty-filter-wrapper' : ''"
    >
      <label
        :for="filter.key"
        :class="
          'col-form-label harness-vue-bootstrap-select-label harness-vue-bootstrap-select-label-vertical ' +
          (isFilterDirty(filter.key) ? 'dirty-filter-label' : '')
        "
        :id="filter.key + '-label'"
        v-html="filter.label"
      />
      <InputPartial v-bind="{ ...$props, ...$attrs, strictError }" />
      <small
        v-if="helperText"
        v-html="helperText"
        :class="
          'form-text harness-vue-bootstrap-helper-text harness-vue-bootstrap-input-helper-text ' +
          helperTextClass
        "
      ></small>
    </div>
    <div
      v-if="labelPosition == 'none'"
      :class="
        'form-inline ' +
        (isFilterDirty(filter.key) ? 'dirty-filter-wrapper' : '')
      "
    >
      <InputPartial v-bind="{ ...$props, ...$attrs, strictError }" />
      <small
        v-if="helperText"
        v-html="helperText"
        :class="
          'form-text harness-vue-bootstrap-helper-text harness-vue-bootstrap-input-helper-text ' +
          helperTextClass
        "
      ></small>
    </div>
  </div>
</template>
<script>
import inputProps from "../mixins/inputProps";
import inputFilter from "../mixins/inputFilter";
import InputPartial from "./partials/InputPartial.vue";
export default {
  name: "harness-vue-bootstrap-input",
  mixins: [inputProps, inputFilter],
  components: { InputPartial },
  props: {
    type: {
      required: false,
      type: String,
      default: "text",
      validator: function (value) {
        let validOptions = [
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
  },
};
</script>
