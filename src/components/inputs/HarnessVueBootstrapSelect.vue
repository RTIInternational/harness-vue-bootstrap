<template>
  <div>
    <div
      v-if="labelPosition == 'horizontal'"
      :class="isFilterDirty(filter.key) ? 'dirty-filter-wrapper' : ''"
    >
      <div class="row form-row">
        <div :class="'col-' + labelColumnSize">
          <label
            :for="filter.key"
            :class="
              'col-form-label harness-ui-select-label harness-ui-select-label-horizontal ' +
              (isFilterDirty(filter.key) ? 'dirty-filter-label' : '')
            "
            :id="filter.key + '-label'"
            v-html="filter.label"
          />
        </div>
        <div :class="'col-' + (12 - labelColumnSize)">
          <SelectPartial v-bind="{ ...$props, ...$attrs }" />
          <small
            v-if="helperText"
            v-html="helperText"
            :class="
              'form-text harness-ui-select-helper-text harness-ui-helper-text ' +
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
          'col-form-label harness-ui-select-label harness-ui-select-label-vertical ' +
          (isFilterDirty(filter.key) ? 'dirty-filter-label' : '')
        "
        :id="filter.key + '-label'"
        v-html="filter.label"
      />
      <SelectPartial v-bind="{ ...$props, ...$attrs }" />
      <small
        v-if="helperText"
        v-html="helperText"
        :class="
          'form-text harness-ui-select-helper-text harness-ui-helper-text ' +
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
      <SelectPartial v-bind="{ ...$props, ...$attrs }" />
      <small
        v-if="helperText"
        v-html="helperText"
        :class="
          'form-text harness-ui-select-helper-text harness-ui-helper-text ' +
          helperTextClass
        "
      ></small>
    </div>
  </div>
</template>
<script>
import inputProps from "../mixins/inputProps";
import inputFilter from "../mixins/inputFilter";
import SelectPartial from "./partials/SelectPartial.vue";
export default {
  name: "harness-ui-select",
  mixins: [inputProps, inputFilter],
  components: { SelectPartial },
  props: {
    multiple: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
