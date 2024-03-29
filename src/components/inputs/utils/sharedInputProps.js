export const sharedFilterProps = {
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  labelPosition: {
    type: String,
    required: false,
    default: "horizontal",
    validator: function (value) {
      return ["horizontal", "vertical", "floating", "none"].includes(value);
    },
  },
  labelColumnSize: {
    type: Number,
    required: false,
    default: 6,
    validator: function (value) {
      return value < 12;
    },
  },
  synchronous: {
    type: Boolean,
    required: false,
    default: false,
  },
  helperText: {
    type: String,
    required: false,
    default: "",
  },
  helperTextClass: {
    type: String,
    required: false,
    default: "",
  },
  helperTextPosition: {
    type: String,
    required: false,
    default: "input",
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
  allowValidation: {
    required: false,
    type: Boolean,
    default: false,
  },
  required: {
    required: false,
    type: Boolean,
    default: false,
  },
  validFeedback: {
    required: false,
    type: String,
    default: "",
  },
  invalidFeedback: {
    required: false,
    type: String,
    default: "",
  },
  showValid: {
    required: false,
    type: Boolean,
    default: false,
  },
  showInvalid: {
    required: false,
    type: Boolean,
    default: true,
  },
  additionalDescribedByIds: {
    required: false,
    type: Array,
    default: [],
  },
};

export const isFilterProp = {
  filter: {
    type: Object,
    required: true,
    validator: function (value) {
      return Object.keys(value).includes("key");
    },
  },
};

export default { sharedFilterProps, isFilterProp };
