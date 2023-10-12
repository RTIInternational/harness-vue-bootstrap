import { computed } from "vue";
/**
 * For a given filter, return a computed that calculates validity
 * @param {Object} props the props object
 * @param {Object} harness the harness instance
 * @returns {computed} computed function
 */
export default function useIsValid(props, harness) {
  return computed(() => {
    if (props.allowValidation) {
      if (props.showValid && harness.isFilterValid(props.filter.key)) {
        return "valid";
      }

      if (props.showInvalid && !harness.isFilterValid(props.filter.key)) {
        return "invalid";
      }
    }
    return null;
  });
}
