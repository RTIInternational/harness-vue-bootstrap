import { computed } from "vue";

/**
 * This function returns a computed variable for use with v-model, binding harness-vue store attributes to inputs.
 * We use this instead of binding directly to the store so that we are dispatching actions which may have subscriptions
 * @param {Object} props Component Props
 * @param {Object} harness the harness instance
 * @returns {any} a vue computed
 */
export default function useBoundValue(props, harness) {
  return computed({
    get() {
      try {
        return harness.getFilter(props.filter.key);
      } catch {
        return null;
      }
    },
    set(value) {
      harness.setFilter(props.filter.key, value);
    },
  });
}
