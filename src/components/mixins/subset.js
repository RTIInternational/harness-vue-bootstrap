export default {
  props: {
    only: {
      type: Array,
      required: false,
    },
    except: {
      type: Array,
      required: false,
    },
    orderByOnly: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  methods: {
    subset(set) {
      if (this.only || this.except) {
        let charts = Object.keys(set)
          .filter((key) =>
            this.only ? this.only.includes(key) : !this.except.includes(key)
          )
          .reduce((obj, key) => {
            obj[key] = set[key];
            return obj;
          }, {});
        if (this.orderByOnly && !this.except) {
          let newChartsObj = {};
          this.only.forEach((chartKey) => {
            newChartsObj[chartKey] = charts[chartKey];
          });
          charts = newChartsObj;
        }
        return charts;
      }
      return set;
    },
  },
  // mounted () {
  //   if (this.only && this.except) {
  //     throw String("Component cannot have both 'only' and 'except' props")
  //   }
  // }
};
