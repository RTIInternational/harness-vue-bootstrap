# Input
[[toc]]
<!-- *** Changing input value is triggering this error every time in console:
Error in render: "TypeError: Cannot read property '_modulesNamespaceMap' of undefined"
-->

## Basic Example
A basic `<input>` element using [Bootstrap 4](https://getbootstrap.com/docs/4.0/components/forms/) for styling. This component binds the input to a harness filter. The harness-vue-bootstrap-input component is flexible and can accept various HTML5 `<input>` types.

<harness-vue-bootstrap-input :filter="getFilterDefinition('exampleInput')" />

## Usage
### kebab-case
``` html
    <harness-vue-bootstrap-input :filter="{'key': 'exampleInput', ...}" />
```
### PascalCase
```html
    <harnessVueBootstrapInput :filter="{'key': 'exampleInput', ...}" />
```
### Page File
```js
import { components } from '@rtidatascience/harness-vue-bootstrap'
components['harnessVueBootstrapInput'] // array syntax
components.harnessVueBootstrapInput // object syntax
```

### Include Single Option 
Include a single option with the filter, and its key will be set as the default value.

#### Single Option Example
<harness-vue-bootstrap-input :filter="getFilterDefinition('exampleOptionInput')"/>
```js
...
options: [
    {
        key: 'Example Input Option'
    }
],
...,
```

## Props
### appendHTML
Specify text to be appended to the input using a bootstrap input group.
* **Type**: `String`
* **Required**: No
* **Default**: ``

#### Example
<!-- Password type looks no different? Looks just like a text input-->


<harness-vue-bootstrap-input :filter="getFilterDefinition('exampleInput-8')" :appendHTML="'@rti.org'"/>

```html
<harness-vue-bootstrap-input 
    :appendHTML="@rti.org"
    />
```
***
### appendComponent
Specify a component to be appended to the input using a [bootstrap input group](https://getbootstrap.com/docs/4.1/components/input-group/). The component must be a div with class `input-group-append`.
* **Type**: `String`
* **Required**: No
* **Default**: ``
```html
<harness-vue-bootstrap-input 
    :appendHTML="component"
    />
```
***
### helperText
This property allows a developer to specify helper text to be rendered as [Bootstrap help text](https://getbootstrap.com/docs/4.6/components/forms/#help-text).
* **Type**: `String`
* **Required**: No
* **Default**: `''`
***
#### Example
<harness-vue-bootstrap-input :filter="getFilterDefinition('exampleInput-5')" :helperText="'Helper text with contextual information'"/>

```html
<harness-vue-bootstrap-input 
    :helperText="'Helper text with contextual information'"
    />
```
***
### helperTextClass
This property allows a developer to specify a class to be appended to their `helperText`.
* **Type**: `String`
* **Required**: No
* **Default**: `''`

#### Example
<harness-vue-bootstrap-input :filter="getFilterDefinition('exampleInput-6')" :helperText="'Helper text with contextual information, styled as alert'" :helperTextClass="'alert alert-warning'" />

```html
<harness-vue-bootstrap-input 
    :helperText="'Helper text with contextual information, styled as alert'"
    :helperTextClass="'alert alert-warning'"
    />
```
***
### inputClearButton
Adds a clear button to the end of the input group.
* **Type**: `Boolean`
* **Required**: No
* **Default**: `False`

#### Example
<harness-vue-bootstrap-input :filter="getFilterDefinition('exampleInput-9')" :inputClearButton="true"/>
```html
<harness-vue-bootstrap-input :inputClearButton="true" />
```
***
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
<harness-vue-bootstrap-input :filter="getFilterDefinition('exampleInput-0')" />
```html
<harness-vue-bootstrap-input :labelPosition="'horizontal'" />
```
***
#### Vertical Example
<harness-vue-bootstrap-input :filter="getFilterDefinition('exampleInput-1')" :labelPosition="'vertical'" />
***
```html
<harness-vue-bootstrap-input :labelPosition="'vertical'" />
```
#### None Example
<harness-vue-bootstrap-input :filter="getFilterDefinition('exampleInput-2')" :labelPosition="'none'" />

```html
<harness-vue-bootstrap-input :labelPosition="'none'" />
```
***
### labelColumnSize
When used with `:labelPosition="'horizontal'"`, this controls the width of the label in respect to the input. Horizontal layouts use the [Bootstrap Grid](https://getbootstrap.com/docs/4.0/layout/grid/), which functions on subdivisions of 12. The number given to this property will be the subdivision of 12 used to control the label portion of the row - for example, a `labelColumnSize="4"` would use `col-4` for the label and `col-8` for the input.
* **Type**: `Number`
* **Required**: No
* **Default**: 6

#### Example 4


```html
<harness-vue-bootstrap-input :labelPosition="'horizontal'" :labelColumnSize="8" />
```
***
### placeholder
Allows HTML input placeholder text.
* **Type**: `String`
* **Required**: No
* **Default**: ``

#### Example
<harness-vue-bootstrap-input :filter="getFilterDefinition('exampleInput-10')" :placeholder="'Your Input Here'" />
```html
<harness-vue-bootstrap-input 
    :inputClearButton="'Your Input Here'"
    />
```
***
### prependHTML
Specify text to be prepended to the input using a bootstrap input group.
* **Type**: `String`
* **Required**: No
* **Default**: `text`

#### Example
<!-- Password type looks no different? Looks just like a text input-->

<harness-vue-bootstrap-input :filter="getFilterDefinition('exampleInput-7')" :prependHTML="'@'"/>
```html
<harness-vue-bootstrap-input 
    :prependHTML="'@'"
    />
```
***
### prependComponent
Specify a component to be prepended to the input using a [bootstrap input group](https://getbootstrap.com/docs/4.1/components/input-group/). The component must be a div with class `input-group-prepend`.
* **Type**: `String`
* **Required**: No
* **Default**: ``
```html
<harness-vue-bootstrap-input 
    :prependComponent="component"
    />
```
***
### synchronous
This property controls whether or not the filter automatically triggers harness's `loadData` lifecycle hook on change. A 'synchronous' filter is 'in sync' with harness's lifecycle, and therefore does trigger `loadData` when it changes.
* **Type**: `Boolean`
* **Required**: No
* **Default**: `true`


***
### type
You may specify the type of input the harness-vue-bootstrap-input accepts with the `type` prop.
* **Type**: `String`
* **Required**: No
* **Default**: `text`

#### Example
<!-- Password type looks no different? Looks just like a text input-->

<harness-vue-bootstrap-input :filter="getFilterDefinition('examplePasswordInput')" />

```html
<harness-vue-bootstrap-input 
    :type="password"
    />
```
***
### typeahead
By including `typeahead: true` as a prop to your text input, this input becomes a typeahead component using [corejs-typeahead](https://github.com/corejavascript/typeahead.js/) and [Bloodhound](https://github.com/corejavascript/typeahead.js/blob/master/doc/bloodhound.md). Currently, the bloodhound search index is created based on the `key` of each option passed to the filter. Additionally, including `strict: true` enforces the filter set function to only trigger `setFilter` and `loadData` (if synchronous) if the value is an valid option. Without `strict` enabled, typing in `h` then `a` then `r` would run `setFilter(key, 'h')` then `setFilter(key, 'ha')` then `setFilter(key, 'har')` before a user selects `harness` from the typeahead. With `strict` enabled, it would not set the filter until the user has selected `harness` via typing/hinting/selecting.

#### Example

<harness-vue-bootstrap-input :filter="getFilterDefinition('exampleInputTypeahead')" :typeahead="true" :strict="true" />

Hint: try searching `RTI`, `harness`, `data science`, `data` etc.

```html
<harness-vue-bootstrap-input 
    :type="text"
    :typeahead="true"
    :strict="true"
    />
```

#### Note on styling
Because this feature uses the typeahead library, it creates a number of classes for styling. The library includes some basic styles, but these classes are available for styles:
* `harness-vue-bootstrap-typeahead-input`
* `harness-vue-bootstrap-typeahead-hint`
* `harness-vue-bootstrap-typeahead-menu`
* `harness-vue-bootstrap-typeahead-dataset`
* `harness-vue-bootstrap-typeahead-suggestion`
* `harness-vue-bootstrap-typeahead-empty`
* `harness-vue-bootstrap-typeahead-open`
* `harness-vue-bootstrap-typeahead-cursor`
* `harness-vue-bootstrap-typeahead-highlight`



