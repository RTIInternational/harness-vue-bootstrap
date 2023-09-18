import { computed } from "vue";

/**
 * This function returns a computed variable for use with v-model, binding harness-vue store attributes to inputs.
 * We use this instead of binding directly to the store so that we can intercept and enforce the "synchronous" behavior in the "set"
 * This also allows us to use getFilter/setFilter, which we have listeners on for beforeSet/afterSet behavior
 * @param {any} props Component Props
 * @returns {any} a vue computed
 */
export default function useBoundValue(props, harness) {
  return computed({
    get() {
      try {
        return harness.getFilter(props.filter.key);
      } catch {
        return "asd";
      }
    },
    set(value) {
      harness.setFilter(props.filter.key, value);
      if (!props.synchronous && harness.pageDefinition.loadData) {
        harness.loadData();
      }
    },
  });
}
