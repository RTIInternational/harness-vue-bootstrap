import { computed } from "vue";
/**
 * For a given filter, return a computed that calculates validity
 * @param {Object} props the props object
 * @param {Object} harness the harness instance
 * @returns {computed} computed function
 */
export default function useIsValid(props, harness) {
  return computed(() => {
    if (props.allowValidation && harness.isFilterDirty(props.filter.key)) {
      return harness.isFilterValid(props.filter.key);
    }
    return null;
  });
}
