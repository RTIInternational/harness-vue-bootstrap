# Multiselect Listbox
[[toc]]
## Basic Example
This Multiselect-Listbox component allows a user to choose from their options (the left-hand box) to populate their filter (the right-hand box). Optionally searchable with typeahead, this component is useful for multi-select filters with a wide range of options so that users can select their options without having to keep track of OS-specific keybindings to go down a list.

<harness-vue-bootstrap-multiselect-listbox :filter="{'key': 'exampleMultiselectListbox', 'label': 'Example Multiselect Listbox'}"  />

## Usage
### kebab-case
``` html
    <harness-vue-bootstrap-multiselect-listbox :filter="{'key': 'exampleInput', ...}" />
```
### PascalCase
```html
    <harnessVueBootstrapMultiselectListbox :filter="{'key': 'exampleInput', ...}" />
```
### Page File
```js
import { components } from '@rtidatascience/harness-vue-bootstrap'
components['harnessVueBootstrapMultiselectListbox'] // array syntax
components.harnessVueBootstrapMultiselectListbox // object syntax
```
## Props

Please note that for this component to function, the prop `multiple` must always be set to `true`. This prop tells Harness to represent the filter's value as an array rather than a string.

### searchable
Enables a text input that filters the values in the left-hand box.
* **Type**: `Boolean`
* **Required**: No
* **Default**: `false`

### typeahead
If the search bar is enabled, includes bloodhound typeahead functionality.
* **Type**: `Boolean`
* **Required**: No
* **Default**: `false`

#### Searchable Example with Typeahead
<harness-vue-bootstrap-multiselect-listbox :filter="{'key': 'exampleMultiselectListboxSearchable', 'label': 'Example Multiselect Listbox (Searchable)'}" :searchable="true" :typeahead="true" />

### synchronous
This property controls whether or not the filter automatically triggers harness's `loadData` lifecycle hook on change. A 'synchronous' filter is 'in sync' with harness's lifecycle, and therefore does trigger `loadData` when it changes.
* **Type**: `Boolean`
* **Required**: No
* **Default**: `true`