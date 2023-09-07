const sharedInputProps = {
  filter: {
    type: Object,
    required: true,
    validator: function (value) {
      return Object.keys(value).includes("key");
    },
  },
  labelPosition: {
    type: String,
    required: false,
    default: "horizontal",
    validator: function (value) {
      return ["horizontal", "vertical", "none"].includes(value);
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
};

export default sharedInputProps;
