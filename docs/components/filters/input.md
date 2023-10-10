# Input
[[toc]]
<!-- *** Changing input value is triggering this error every time in console:
Error in render: "TypeError: Cannot read property '_modulesNamespaceMap' of undefined"
-->

## Basic Example
A basic `<input>` element using [Bootstrap 5](https://getbootstrap.com/docs/5.3/forms/input-group/) for styling. This component binds the input to a Harness-Vue filter. The harness-vue-bootstrap-input component is flexible and can accept various HTML5 `<input>` types.

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
### Page Definition
```js
import { components } from '@rtidatascience/harness-vue-bootstrap'
components['harnessVueBootstrapInput'] // array syntax
components.harnessVueBootstrapInput // object syntax
'harnessVueBootstrapInput' // string syntax if mixin is installed
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


<harness-vue-bootstrap-input :filter="getFilterDefinition('exampleInput8')" :appendHTML="'@rti.org'"/>

```html
<harness-vue-bootstrap-input 
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
<harness-vue-bootstrap-input 
    :appendHTML="component"
    />
```
***

### datalist
Use the [datalist](https://getbootstrap.com/docs/5.3/forms/form-control/#datalists) feature from Bootstrap to autocomplete based on the harness-vue options.
* **Type**: `Boolean`
* **Required**: No
* **Default**: `false`

#### Example
<harness-vue-bootstrap-input :filter="{key: 'exampleInputDatalist', label: 'Input With Datalist'}" :datalist="true" :helperText="`Click this input to see autocomplete options.`"/>

```html
<harness-vue-bootstrap-input :datalist="true"/>
```

***
### helperText
This property allows a developer to specify helper text to be rendered as [Bootstrap help text](https://getbootstrap.com/docs/4.6/components/forms/#help-text).
* **Type**: `String`
* **Required**: No
* **Default**: `''`
***
#### Example
<harness-vue-bootstrap-input :filter="getFilterDefinition('exampleInput5')" :helperText="'Helper text with contextual information'"/>

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
<harness-vue-bootstrap-input :filter="getFilterDefinition('exampleInput6')" :helperText="'Helper text with contextual information, styled as text-success'" :helperTextClass="'text-success'" />

```html
<harness-vue-bootstrap-input 
    :helperText="'Helper text with contextual information, styled as text-success'"
    :helperTextClass="'text-success'"
    />
```
***
### inputClearButton
Adds a clear button to the end of the input group.
* **Type**: `Boolean`
* **Required**: No
* **Default**: `False`

#### Example
<harness-vue-bootstrap-input :filter="getFilterDefinition('exampleInput9')" :inputClearButton="true"/>
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
    * `'floating'`
* **Default**: `'horizontal'`

#### Horizontal Example
<harness-vue-bootstrap-input :filter="getFilterDefinition('exampleInput0')" />
```html
<harness-vue-bootstrap-input :labelPosition="'horizontal'" />
```
***
#### Vertical Example
<harness-vue-bootstrap-input :filter="getFilterDefinition('exampleInput1')" :labelPosition="'vertical'" />
***
```html
<harness-vue-bootstrap-input :labelPosition="'vertical'" />
```

#### Floating Example
<harness-vue-bootstrap-input :filter="getFilterDefinition('exampleInput14')" :labelPosition="'floating'" />
Note: Floating labels take precendence over append/prepend behavior, which is incompatible with floating labels.
***
```html
<harness-vue-bootstrap-input :labelPosition="'floating'" />
```
#### None Example
<harness-vue-bootstrap-input :filter="getFilterDefinition('exampleInput2')" :labelPosition="'none'" />

```html
<harness-vue-bootstrap-input :labelPosition="'none'" />
```
***
### labelColumnSize
When used with `:labelPosition="'horizontal'"`, this controls the width of the label in respect to the input. Horizontal layouts use the [Bootstrap Grid](https://getbootstrap.com/docs/5.2/forms/layout/), which functions on subdivisions of 12. The number given to this property will be the subdivision of 12 used to control the label portion of the row - for example, a `labelColumnSize="4"` would use `col-4` for the label and `col-8` for the input.
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
<harness-vue-bootstrap-input :filter="getFilterDefinition('exampleInput10')" :placeholder="'Your Input Here'" />
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

<harness-vue-bootstrap-input :filter="getFilterDefinition('exampleInput7')" :prependHTML="'@'"/>
```html
<harness-vue-bootstrap-input 
    :prependHTML="'@'"
    />
```
***
### prependComponent
Specify a component to be prepended to the input using a [bootstrap input group](https://getbootstrap.com/docs/5.3/forms/input-group/). The component must be a div with class `input-group-prepend`.
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
This property controls whether or not the filter automatically triggers Harness-Vue's `loadData` lifecycle hook on change. A 'synchronous' filter is 'in sync' with Harness-Vue's lifecycle, and therefore does trigger `loadData` when it changes.
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

<harness-vue-bootstrap-input :filter="getFilterDefinition('examplePasswordInput')" :type="'password'"/>

```html
<harness-vue-bootstrap-input 
    :type="password"
    />
```

<harness-vue-bootstrap-input :filter="getFilterDefinition('exampleInput11')" :type="'range'" :min="1" :max="10" :step="2"/>

```html
<harness-vue-bootstrap-input 
    :type="range"
    :min="1"
    :max="10"
    :step="2"
    />
```

***
### min
For number inputs, this sets the minimum allowed value.
* **Type**: `Number`
* **Required**: No

### max
For number inputs, this sets the maximum allowed value.
* **Type**: `Number`
* **Required**: No

### step
For number inputs, this sets the step on click.
* **Type**: `Number`
* **Required**: No

#### Example
<!-- Password type looks no different? Looks just like a text input-->

<harness-vue-bootstrap-input :filter="getFilterDefinition('exampleInputMinMaxStep')" :type="'number'" :min="0.05" :max="0.24" :step="0.001"/>

```html
<harness-vue-bootstrap-input 
    :type="number"
    :type="'number'"
    :min="0.05"
    :max="0.24"
    :step="0.001"
    />
```