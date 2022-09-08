# Select

<!-- *** Changing input value is triggering this error every time in console:
Error in render: "TypeError: Cannot read property '_modulesNamespaceMap' of undefined"
-->
[[toc]]
## Basic Example
A basic `<select>` element using [Bootstrap 4](https://getbootstrap.com/docs/4.0/components/forms/) for styling. This component binds the select element to a harness filter, and the `<option>` elements to the options for that filter. 
**TODO: Link to harness filter/options docs**

All filter values and option values are treated as strings (unless `multiple`, see below).


<harness-vue-bootstrap-select :filter="{'key': 'exampleSelect', 'label': 'Example Select'}"  />

## Usage
### kebab-case
``` html
    <harness-vue-bootstrap-select :filter="{'key': 'exampleSelect', ...filter}" />
```
### PascalCase
```html
    <harnessVueBootstrapSelect :filter="{'key': 'exampleSelect', ...filter}" />
```
### Page File
```js
import { components } from '@rtidatascience/harness-vue-bootstrap'
components['harnessVueBootstrapSelect'] // array syntax
components.harnessVueBootstrapSelect // object syntax
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
<harness-vue-bootstrap-select :filter="{'key': 'exampleSelect-0', 'label': 'Example Select'}"  />

```html
<harness-vue-bootstrap-select :labelPosition="'horizontal'" />
```
***
#### Vertical Example
<harness-vue-bootstrap-select :filter="{'key': 'exampleSelect-1', 'label': 'Example Select'}"  :labelPosition="'vertical'"/>
***
```html
<harness-vue-bootstrap-select :labelPosition="'vertical'" />
```
#### None Example
<br />
<harness-vue-bootstrap-select :filter="{'key': 'exampleSelect-2', 'label': 'Example Select'}"  :labelPosition="'none'"/>

```html
<harness-vue-bootstrap-select :labelPosition="'none'" />
```

### labelColumnSize
When used with `:labelPosition="'horizontal'"`, this controls the width of the label in respect to the input. Horizontal layouts use the [Bootstrap Grid](https://getbootstrap.com/docs/4.0/layout/grid/), which functions on subdivisions of 12. The number given to this property will be the subdivision of 12 used to control the label portion of the row - for example, a `labelColumnSize="4"` would use `col-4` for the label and `col-8` for the input.
* **Type**: `Number`
* **Required**: No
* **Default**: 6

#### Example 4
<harness-vue-bootstrap-select :filter="{'key': 'exampleSelect-3', 'label': 'Example Select'}"  :labelColumnSize="4"/>

```html
<harness-vue-bootstrap-select :labelPosition="'horizontal'" :labelColumnSize="4"/>
```
#### Example 8
<harness-vue-bootstrap-select :filter="{'key': 'exampleSelect-4', 'label': 'Example Select'}"  :labelColumnSize="8"/>

```html
<harness-vue-bootstrap-select :labelPosition="'horizontal'" :labelColumnSize="8"/>
```

### synchronous
This property controls whether or not the filter automatically triggers harness's `loadData` lifecycle hook on change. A 'synchronous' filter is 'in sync' with harness's lifecycle, and therefore does trigger `loadData` when it changes.
* **Type**: `Boolean`
* **Required**: No
* **Default**: `true`

### helperText
This property allows a developer to specify helper text to be rendered as [Bootstrap help text](https://getbootstrap.com/docs/4.6/components/forms/#help-text).
* **Type**: `String`
* **Required**: No
* **Default**: `''`

#### Example
<harness-vue-bootstrap-select :filter="{'key': 'exampleSelect-5', 'label': 'Example Select'}"  :helperText="'Helper text with contextual information'"/>

```html
<harness-vue-bootstrap-select :helperText="'Helper text with contextual information'" />
```

### helperTextClass
This property allows a developer to specify a class to be appended to their `helperText`.
* **Type**: `String`
* **Required**: No
* **Default**: `''`

#### Example
<harness-vue-bootstrap-select :filter="{'key': 'exampleSelect-6', 'label': 'Example Select'}" :helperText="'Helper text with contextual information, styled as alert'" :helperTextClass="'alert alert-warning'"/>

```html
<harness-vue-bootstrap-select :helperText="'Helper text with contextual information, styled as alert'" :helperTextClass="'alert alert-warning'"/>
```

### multiple
If harness-vue-bootstrap-select is given the `multiple` prop, it will be treated as a multi-select filter. Please note that it is required that this prop is set in your harness page definition - this is what informs harness to treat the contents of this filter as an `Array` instead of a `String`. 
* **Type**: `Booolean`
* **Required**: No
* **Default**: `false`

#### Example
<harness-vue-bootstrap-select :filter="{'key': 'exampleMultiSelect', 'label': 'Example Select', props: {'multiple': true}}" :multiple="true"/>

```html
<harness-vue-bootstrap-select :multiple="true" />
```
