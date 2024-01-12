import { computed } from "vue";
/**
 * Our form controls can be complex, and often include descriptive elements outside of the input and label
 * To make these available to a screenreader, we use the aria-describedby attribute
 * But we don't want to point that at things that may be empty/nonexistent
 * so this dynamically populates that aria-describedby with appropriate ids based on features in use
 *
 * @param {Object} props the props object
 * @returns {String} the string to use in aria-describedby
 */
export default function useDescribedBy(props) {
  return computed(() => {
    const describedByClassList = [];
    if (props.prependComponent) {
      describedByClassList.push(`${props.filter.key}-prepended-component`);
    }
    if (props.prependHTML) {
      describedByClassList.push(`${props.filter.key}-prepended-html`);
    }

    if (props.appendComponent) {
      describedByClassList.push(`${props.filter.key}-appended-component`);
    }
    if (props.appendHTML) {
      describedByClassList.push(`${props.filter.key}-appended-html`);
    }

    if (props.allowValidation) {
      describedByClassList.push(`${props.filter.key}-valid-feedback`);
      describedByClassList.push(`${props.filter.key}-invalid-feedback`);
    }

    if (props.helperText) {
      describedByClassList.push(`${props.filter.key}-helper-text`);
    }

    if (props.additionalDescribedByIds) {
      describedByClassList.push(...props.additionalDescribedByIds);
    }

    return describedByClassList.join(" ");
  });
}
