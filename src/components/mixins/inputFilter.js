export default {
  props: {
    filter: {
      type: Object,
      required: true,
      validator: function (value) {
        return Object.keys(value).includes("key");
      },
    },
  },
};
