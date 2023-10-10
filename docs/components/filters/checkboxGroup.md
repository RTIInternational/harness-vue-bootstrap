# Checkbox Group

<!-- *** Changing input value is triggering this error every time in console:
Error in render: "TypeError: Cannot read property '_modulesNamespaceMap' of undefined"
-->
[[toc]]
## Basic Example
A simple checkbox/radio/switch group for filters using [Bootstrap 5](https://getbootstrap.com/docs/5.2/forms/checks-radios/) for styling. This component binds the checkbox group to a harness filter, and the `<option>` elements to the options for that filter.

<!-- All checkboxes checked/unchecked? Cannot select just one at a time, only all or nothing -->

<harness-vue-bootstrap-checkbox-group :filter="{'key': 'exampleCheckboxGroup', 'label': 'Example Checkbox Group'}"  />

## Usage
### kebab-case
``` html
    <harness-vue-bootstrap-checkbox-group :filter="{'key': 'exampleCheckboxGroup', ...}" />
```
### PascalCase
```html
    <harnessVueBootstrapCheckboxGroup :filter="{'key': 'exampleCheckboxGroup', ...}" />
```
### Page Definition
```js
import { components } from '@rtidatascience/harness-vue-bootstrap'
components['harnessVueBootstrapCheckboxGroup'] // array syntax
components.harnessVueBootstrapCheckboxGroup // object syntax
'harnessVueBootstrapCheckboxGroup' // string syntax if mixin is installed
```

## Props

### type
* **Type**: `String`
* **Required**: No
* **Options:**
    * `'checkbox'`
    * `'radio'`
    * `'switch'`
* **Default**: `'checkbox'`
If harness-vue-bootstrap-checkbox-group is given a `type` prop, it can be rendered as a checkbox group, a radio group, or a switch group. Keep in mind that in order to use a checkbox group, you must additionally add the `multiple: true` prop, so that harness-vue uses an array instead of a singular value for this filter in the store.

#### Examples
<harness-vue-bootstrap-checkbox-group :filter="{'key': 'exampleCheckboxGroup8', 'label': 'Example Checkbox Group Radio'}" :type="'radio'" :multiple="'false'"/>

```html
<harness-vue-bootstrap-checkbox-group :inline="true"/>
```

<harness-vue-bootstrap-checkbox-group :filter="{'key': 'exampleCheckboxGroup9', 'label': 'Example Checkbox Group Radio'}" :type="'switch'"  :multiple='false'/>

```html
<harness-vue-bootstrap-checkbox-group />
```

### labelPosition
Controls the position of the label in respect to the input.
* **Type**: `String`
* **Required**: No
* **Options:**
    * `'horizontal'`
    * `'vertical'`
    * `'none'`
* **Default**: `'horizontal'`

#### Horizontal Example
<harness-vue-bootstrap-checkbox-group :filter="{'key': 'exampleCheckboxGroup0', 'label': 'Example Checkbox Group'}"  />
```html
<harness-vue-bootstrap-checkbox-group :labelPosition="'horizontal'" />
```
***
#### Vertical Example
<harness-vue-bootstrap-checkbox-group :filter="{'key': 'exampleCheckboxGroup1', 'label': 'Example Checkbox Group'}"  :labelPosition="'vertical'" />
***
```html
<harness-vue-bootstrap-checkbox-group :labelPosition="'vertical'" />
```
#### None Example
<br />
<harness-vue-bootstrap-checkbox-group :filter="{'key': 'exampleCheckboxGroup2', 'label': 'Example Checkbox Group'}"  :labelPosition="'none'" />

```html
<harness-vue-bootstrap-checkbox-group :labelPosition="'none'" />
```

### labelColumnSize
When used with `:labelPosition="'horizontal'"`, this controls the width of the label in respect to the input. Horizontal layouts use the [Bootstrap Grid](https://getbootstrap.com/docs/5.2/forms/layout/), which functions on subdivisions of 12. The number given to this property will be the subdivision of 12 used to control the label portion of the row - for example, a `labelColumnSize="4"` would use `col-4` for the label and `col-8` for the input.
* **Type**: `Number`
* **Required**: No
* **Default**: 6

#### Example 4
<harness-vue-bootstrap-checkbox-group :filter="{'key': 'exampleCheckboxGroup3', 'label': 'Example Checkbox Group'}"  :labelColumnSize="4"/>

```html
<harness-vue-bootstrap-checkbox-group :labelPosition="'horizontal'" :labelColumnSize="4"/>
```
#### Example 8
<harness-vue-bootstrap-checkbox-group :filter="{'key': 'exampleCheckboxGroup4', 'label': 'Example Checkbox Group'}"  :labelColumnSize="8"/>

```html
<harness-vue-bootstrap-checkbox-group :labelPosition="'horizontal'" :labelColumnSize="8" />
```

### synchronous
This property controls whether or not the filter automatically triggers Harness-Vue's `loadData` lifecycle hook on change. A 'synchronous' filter is 'in sync' with Harness-Vue's lifecycle, and therefore does trigger `loadData` when it changes.
* **Type**: `Boolean`
* **Required**: No
* **Default**: `true`

### helperText
This property allows a developer to specify helper text to be rendered as [Bootstrap help text](https://getbootstrap.com/docs/4.6/components/forms/#help-text).
* **Type**: `String`
* **Required**: No
* **Default**: `''`

#### Example
<harness-vue-bootstrap-checkbox-group :filter="{'key': 'exampleCheckboxGroup5', 'label': 'Example Checkbox Group'}"  :helperText="'Helper text with contextual information'"/>

```html
<harness-vue-bootstrap-checkbox-group :helperText="'Helper text with contextual information'" />
```

### helperTextClass
This property allows a developer to specify a class to be appended to their `helperText`.
* **Type**: `String`
* **Required**: No
* **Default**: `''`

#### Example
<harness-vue-bootstrap-checkbox-group :filter="{'key': 'exampleCheckboxGroup6', 'label': 'Example Checkbox Group'}"  :helperText="'Helper text with contextual information, styled as text-success'" :helperTextClass="'text-success'"/>

```html
<harness-vue-bootstrap-checkbox-group :helperText="'Helper text with contextual information, styled as text-success'" :helperTextClass="'text-success'"/>
```

### inline
If harness-vue-bootstrap-checkbox-group is given the `inline` prop, the checkbox options will be placed inline instead of stacked. 
* **Type**: `Booolean`
* **Required**: No
* **Default**: `false`

#### Example
<harness-vue-bootstrap-checkbox-group :filter="{'key': 'exampleCheckboxGroup7', 'label': 'Example Checkbox Group'}"  :inline="true"/>

```html
<harness-vue-bootstrap-checkbox-group :inline="true"/>
```