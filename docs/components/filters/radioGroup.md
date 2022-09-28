# Radio Group

<!-- *** Changing input value is triggering this error every time in console:
Error in render: "TypeError: Cannot read property '_modulesNamespaceMap' of undefined"
-->
[[toc]]
## Basic Example
A basic radio group element using [Bootstrap 4](https://getbootstrap.com/docs/4.0/components/forms/) for styling. This component binds the radio group to a harness filter, and the `<option>` elements to the options for that filter.

<harness-vue-bootstrap-radio-group :filter="{'key': 'exampleRadioGroup', 'label': 'Example Radio Group'}"  />

## Usage
### kebab-case
``` html
    <harness-vue-bootstrap-radio-group :filter="{'key': 'exampleRadioGroup', ...}" />
```
### PascalCase
```html
    <harnessVueBootstrapRadioGroup :filter="{'key': 'exampleRadioGroup', ...}" />
```
### Page Definition
```js
import { components } from '@rtidatascience/harness-vue-bootstrap'
components['harnessVueBootstrapRadioGroup'] // array syntax
components.harnessVueBootstrapRadioGroup // object syntax
'harnessVueBootstrapRadioGroup' // string syntax if mixin is installed
```

## Props

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
<harness-vue-bootstrap-radio-group :filter="{'key': 'exampleRadioGroup-0', 'label': 'Example Radio Group'}"  />
```html
<harness-vue-bootstrap-radio-group :labelPosition="'horizontal'" />
```
***
#### Vertical Example
<harness-vue-bootstrap-radio-group :filter="{'key': 'exampleRadioGroup-1', 'label': 'Example Radio Group'}"  :labelPosition="'vertical'" />
***
```html
<harness-vue-bootstrap-radio-group :labelPosition="'vertical'" />
```
#### None Example
<br />
<!-- Having issue getting 'none' radio-group to display? Nothing is appearing... -->

<harness-vue-bootstrap-radio-group :filter="{'key': 'exampleRadioGroup-2', 'label': 'Example Radio Group'}"  
    :labelPosition="'none'" 
/>

```html
<harness-vue-bootstrap-radio-group :labelPosition="'none'" />
```

### labelColumnSize
When used with `:labelPosition="'horizontal'"`, this controls the width of the label in respect to the input. Horizontal layouts use the [Bootstrap Grid](https://getbootstrap.com/docs/4.0/layout/grid/), which functions on subdivisions of 12. The number given to this property will be the subdivision of 12 used to control the label portion of the row - for example, a `labelColumnSize="4"` would use `col-4` for the label and `col-8` for the input.
* **Type**: `Number`
* **Required**: No
* **Default**: 6

#### Example 4
<harness-vue-bootstrap-radio-group :filter="{'key': 'exampleRadioGroup-3', 'label': 'Example Radio Group'}"  :labelColumnSize="4"/>

```html
<harness-vue-bootstrap-radio-group :labelPosition="'horizontal'" :labelColumnSize="4" />
```
#### Example 8
<harness-vue-bootstrap-radio-group :filter="{'key': 'exampleRadioGroup-4', 'label': 'Example Radio Group'}"  :labelColumnSize="8"/>

```html
<harness-vue-bootstrap-radio-group :labelPosition="'horizontal'" :labelColumnSize="8"/>
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
<harness-vue-bootstrap-radio-group :filter="{'key': 'exampleRadioGroup-5', 'label': 'Example Radio Group'}"  :helperText="'Helper text with contextual information'"/>

```html
<harness-vue-bootstrap-radio-group :helperText="'Helper text with contextual information'"/>
```

### helperTextClass
This property allows a developer to specify a class to be appended to their `helperText`.
* **Type**: `String`
* **Required**: No
* **Default**: `''`

#### Example
<harness-vue-bootstrap-radio-group :filter="{'key': 'exampleRadioGroup-6', 'label': 'Example Radio Group'}" :helperText="'Helper text with contextual information, styled as alert'" :helperTextClass="'alert alert-warning'"/>

```html
<harness-vue-bootstrap-radio-group :helperText="'Helper text with contextual information, styled as alert'" :helperTextClass="'alert alert-warning'"/>
```

### inline
If harness-vue-bootstrap-radio-group is given the `inline` prop, the radios will be placed inline instead of stacked. 
* **Type**: `Booolean`
* **Required**: No
* **Default**: `false`

#### Example
<harness-vue-bootstrap-radio-group :filter="{'key': 'exampleRadioGroup-7', 'label': 'Example Radio Group'}"  :inline="true"/>

```html
<harness-vue-bootstrap-radio-group :inline="true" />
```