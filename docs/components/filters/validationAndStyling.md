# Validation, Styling, Accessibility

[[toc]]

## Validation
All inputs in this library make use of Bootstrap's [validation](https://getbootstrap.com/docs/5.3/forms/validation/) states, using the core Harness-Vue `isFilterValid` functionality. This is an opt-in feature with a number of controls via props:

* `allowValidation` (boolean, default false) to opt-in to validation for a given input
* `showValid` (boolean, default false) If true, show valid state.
* `showInvalid` (boolean, default true) If true, show invalid state.
* `validFeedback` (string) the message to display for valid filters
* `invalidFeedback` (string) the message to display for invalid filters

These props combine to allow granular control over implementing Bootstrap's validation styling in your individual form controls.
### Example
<br />
<filterGrid :columns="2" :labelPosition="'vertical'"  :clearButton="false" :only="['exampleInputWithRange', 'exampleCheckPickTwo']"/>

```javascript
exampleInputWithRange: {
    label: "Example Input With Validation",
    component: "HarnessVueBootstrapInput",
    valueType: "number",
    valueValidator: (harness, value) => value >= 40 && value <= 50,
    props: {
        type: "number",
        min: 40,
        max: 50,
        step: 1,
        helperText: "Range: 40-50",
        allowValidation: true,
        invalidFeedback: "Please choose a number between 40 and 50"
    }
},
exampleCheckPickTwo: {
    label: "Example Checkbox With Validation",
    component: "HarnessVueBootstrapCheckboxGroup",
    valueType: "array",
    valueValidator: (harness, value) => value.length >= 2,
    props: {
        
        helperText: "Choose at least two",
        allowValidation: true,
        showValid: true,
        showInvalid: true,
        invalidFeedback: "Please choose at least two",
        validFeedback: "Well done!",
        multiple: true
    },
    options: [
        {key: "foo", label: "foo"},
        {key: "bar", label: "bar"},
        {key: "foobar", label: "foobar"},
        {key: "barfoo", label: "barfoo"},
    ]
},
```

## Styling
A significant amount of effort has gone towards adding classes and ids to all elements in all form controls in this library. This should allow for styling to be applied either broadly or in a very targeted manner. If there are further styling classes or ids that you would like added to specific components or subcomponents, please open a [Github Issue](https://github.com/RTIInternational/harness-vue-bootstrap/issues). 

### Dirty Filters
Form controls that are "dirty" (ie: changed from default) are given the `dirty-filter-<type>` styling class. For example, `.dirty-filter-input` will target all inputs that return true when the `harness.isFilterDirty(filter.key)` getter is run.

## Accessibility
All form controls included in this library have been thoroughly tested using [Deque's Axe DevTools](https://www.deque.com/axe/devtools/). While accessibility is a growing target, we have put significant effort into ensuring all form controls are accessible, following WCAG guidelines as well as those provided by Bootstrap. If you run into any accessibility issues using this library, please open a [Github Issue](https://github.com/RTIInternational/harness-vue-bootstrap/issues).