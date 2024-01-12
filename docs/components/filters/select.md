# Select

<!-- *** Changing input value is triggering this error every time in console:
Error in render: "TypeError: Cannot read property '_modulesNamespaceMap' of undefined"
-->
[[toc]]
## Basic Example
A basic `<select>` element using [Bootstrap 5](https://getbootstrap.com/docs/5.3/forms/select/) for styling. This component binds the select element to a harness filter, and the `<option>` elements to the options for that filter. For more on Harness-Vue filter options, see the [Harness-Vue page definition documentation](https://harnessjs.org/introduction/page-definitions.html#filters).

All filter values and option values are treated as strings (unless the prop `multiple` is `true`, see examples below).


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
### Page Definition
```js
import { components } from '@rtidatascience/harness-vue-bootstrap'
components['harnessVueBootstrapSelect'] // array syntax
components.harnessVueBootstrapSelect // object syntax
'harnessVueBootstrapSelect' // string syntax if mixin installed
```
## Props

### additionalDescribedByIds
An array of IDs included in the [aria-describedby](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-describedby) attribute of the form control. Used when developers have additional elements that describe the given input.
* **Type**: `Array`
* **Required**: No
* **Default**: []

### appendHTML
Specify text to be appended to the input using a bootstrap input group.
* **Type**: `String`
* **Required**: No
* **Default**: ``

#### Example
<!-- Password type looks no different? Looks just like a text input-->


<harness-vue-bootstrap-select :filter="{key: 'exampleSelect9'}" :appendHTML="'Dollars'"/>

```html
<harness-vue-bootstrap-select 
    :appendHTML="@rti.org"
    />
```
***
### appendComponent
Specify a component to be appended to the input using a [bootstrap input group](https://getbootstrap.com/docs/5.3/forms/input-group/). The component must be a div with class `input-group-append`.
* **Type**: `String`
* **Required**: No
* **Default**: ``
```html
<harness-vue-bootstrap-select 
    :appendHTML="component"
    />
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
<harness-vue-bootstrap-select :filter="{'key': 'exampleSelect0', 'label': 'Example Select'}"  />

```html
<harness-vue-bootstrap-select :labelPosition="'horizontal'" />
```
***
#### Vertical Example
<harness-vue-bootstrap-select :filter="{'key': 'exampleSelect1', 'label': 'Example Select'}"  :labelPosition="'vertical'"/>
***
```html
<harness-vue-bootstrap-select :labelPosition="'vertical'" />
```

#### Floating Example
<harness-vue-bootstrap-select :filter="{'key': 'exampleSelect12', 'label': 'Example Select'}"  :labelPosition="'floating'"/>
***
```html
<harness-vue-bootstrap-select :labelPosition="'floating'" />
```
Note: Floating labels take precendence over append/prepend behavior, which is incompatible with floating labels.

#### None Example
<br />
<harness-vue-bootstrap-select :filter="{'key': 'exampleSelect2', 'label': 'Example Select'}"  :labelPosition="'none'"/>

```html
<harness-vue-bootstrap-select :labelPosition="'none'" />
```

### labelColumnSize
When used with `:labelPosition="'horizontal'"`, this controls the width of the label in respect to the input. Horizontal layouts use the [Bootstrap Grid](https://getbootstrap.com/docs/5.2/forms/layout/), which functions on subdivisions of 12. The number given to this property will be the subdivision of 12 used to control the label portion of the row - for example, a `labelColumnSize="4"` would use `col-4` for the label and `col-8` for the input.
* **Type**: `Number`
* **Required**: No
* **Default**: 6

#### Example 4
<harness-vue-bootstrap-select :filter="{'key': 'exampleSelect3', 'label': 'Example Select'}"  :labelColumnSize="4"/>

```html
<harness-vue-bootstrap-select :labelPosition="'horizontal'" :labelColumnSize="4"/>
```
#### Example 8
<harness-vue-bootstrap-select :filter="{'key': 'exampleSelect4', 'label': 'Example Select'}"  :labelColumnSize="8"/>

```html
<harness-vue-bootstrap-select :labelPosition="'horizontal'" :labelColumnSize="8"/>
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
<harness-vue-bootstrap-select :filter="{'key': 'exampleSelect5', 'label': 'Example Select'}"  :helperText="'Helper text with contextual information'"/>

```html
<harness-vue-bootstrap-select :helperText="'Helper text with contextual information'" />
```

### helperTextClass
This property allows a developer to specify a class to be appended to their `helperText`.
* **Type**: `String`
* **Required**: No
* **Default**: `''`

#### Example
<harness-vue-bootstrap-select :filter="{'key': 'exampleSelect6', 'label': 'Example Select'}" :helperText="'Helper text with contextual information, styled as text-success'" :helperTextClass="'text-success'"/>

```html
<harness-vue-bootstrap-select :helperText="'Helper text with contextual information, styled as text-success'" :helperTextClass="'text-success'"/>
```

### helperTextPosition
This property allows a developer to specify that the helper text is rendered below the label or below the input.
* **Type**: `String`
* **Required**: No
* **Default**: `'input'`

```html
<harness-vue-bootstrap-select :helperText="'Helper text with contextual information below label'" :helperTextPosition="'label'"/>
```
#### Example
<harness-vue-bootstrap-select :filter="{'key': 'exampleSelect', 'label': 'Example Input'}"  :helperText="'Helper text with contextual information below label'" :helperTextPosition="'label'"/>

***

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

***
### prependHTML
Specify text to be prepended to the input using a bootstrap input group.
* **Type**: `String`
* **Required**: No
* **Default**: `text`

#### Example
<!-- Password type looks no different? Looks just like a text input-->

<harness-vue-bootstrap-select :filter="getFilterDefinition('exampleSelect7')" :prependHTML="'@'"/>
```html
<harness-vue-bootstrap-select 
    :prependHTML="'@'"
    />
```
***
### prependComponent
Specify a component to be prepended to the select using a [bootstrap select group](https://getbootstrap.com/docs/4.1/components/select-group/). The component must be a div with class `select-group-prepend`.
* **Type**: `String`
* **Required**: No
* **Default**: ``
```html
<harness-vue-bootstrap-select 
    :prependComponent="component"
    />
```
***