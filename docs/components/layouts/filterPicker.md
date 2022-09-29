# Filter Picker
[[toc]]
## Basic Example
A basic `<FilterPicker>` element using [Bootstrap 4](https://getbootstrap.com/docs/4.0/components/forms/) for styling. The `FilterPicker` component generates an "Add Filter" and "Remove Filter" dropdown. By selecting filters from the "Add Filter" dropdown, you can dynamically add new filters automatically arranged in a `FilterGrid`. To remove them, either select the specific filter from the "Remove Filter" dropdown, or use the "Remove All Filters" button. Each filter and label is classed and given an id based on the name of the filter it represents. The `FilterPicker` also accepts all of the same props as `FilterGrid` and propagates them down.

<FilterPicker :columns="2" :validFilters="['exampleSelect-0', 'exampleInput-0', 'exampleMultiSelect-0']" :labelPosition="'vertical'" />

## Usage
### kebab-case
``` html
  <filter-picker :columns="2" :validFilters="['exampleSelect', 'exampleInput', 'exampleMultiSelect']" />
```
### PascalCase
```html
  <FilterPicker :columns="2" :validFilters="['exampleSelect', 'exampleInput', 'exampleMultiSelect']"/>
```

## Props

### validFilters
An `Array` of valid filter keys to render in the dropdowns.
* **Type**: `Array`
* **Required**: Yes

***
### removeButtonPosition
Sets the "Remove All Filters" button alignment in the bottom row.
* **Type**: `String`
* **Required**: No
* **Options:**
    * `'left'`
    * `'center'`
    * `'right'`
* **Default**: `'center'`

#### Remove Filters Button Right Example
<FilterPicker :columns="2" :removeButtonPosition="'right'" :validFilters="['exampleSelect-1', 'exampleInput-1', 'exampleMultiSelect-1']" :labelPosition="'vertical'"/>

```html
<FilterPicker :columns="2" :removeButtonPosition="'right'" :validFilters="['exampleSelect', 'exampleInput', 'exampleMultiSelect']" />
```

#### Remove Filters Button Left Example
<FilterPicker :columns="2" :removeButtonPosition="'left'" :validFilters="['exampleSelect-2', 'exampleInput-2', 'exampleMultiSelect-2']" :labelPosition="'vertical'"/>

```html
<FilterPicker :columns="2" :removeButtonPosition="'left'" :validFilters="['exampleSelect', 'exampleInput', 'exampleMultiSelect']"/>
```

***
### columnSize
Set the bootstrap grid column size for the `FilterPicker`.
* **Type**: `Number`
* **Required**: No
* **Options:**
    * `1` - `12`
* **Default**: `12`

#### Column Size 6 Example
<FilterPicker :columnSize="6" :columns="2" :removeButtonPosition="'right'" :validFilters="['exampleSelect-3', 'exampleInput-3', 'exampleMultiSelect-3']" :labelPosition="'vertical'"/>

```html
<FilterPicker :columnSize="6" :columns="2" :removeButtonPosition="'right'" :validFilters="['exampleSelect', 'exampleInput', 'exampleMultiSelect']"/>
```
