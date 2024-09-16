import { computed } from "vue";

/**
 * This function returns a computed variable for use with v-model, binding harness-vue store attributes to inputs.
 * We use this instead of binding directly to the store so that we can intercept and enforce the "synchronous" behavior in the "set"
 * This also allows us to use getFilter/setFilter, which we have listeners on for beforeSet/afterSet behavior
 * @param {Object} props Component Props
 * @param {Object} harness the harness instance
 * @returns {any} a vue computed
 */
export default function useBoundValue(props, harness) {
  return computed({
    get() {
      return harness.getFilter(props.filter.key);
    },
    set(value) {
      harness.setFilter(props.filter.key, value, !props.synchronous);
    },
  });
}
