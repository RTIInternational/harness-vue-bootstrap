export default {
  props: {
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
  },
  computed: {
    boundValue: {
      get() {
        return this.getFilter(this.filter.key);
      },
      set(value) {
        this.setFilterLoadData(this.filter.key, value);
      },
    },
  },
  methods: {
    setFilterLoadData(key, value) {
      this.setFilter(key, value);
      if (!this.synchronous && this.pageDefinition.retrieveData) {
        this.loadData();
      }
    },
  },
};
