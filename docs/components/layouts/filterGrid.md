# Filter Grid
[[toc]]
## Basic Example
A basic `<FilterGrid>` element using [Bootstrap 4](https://getbootstrap.com/docs/4.0/components/forms/) for styling. The `FilterGrid` component automatically lays out all of your filters defined in harness, bound to the appopriate getters/actions. This component can accept a subset of filters, and can be made synchronous/asynchronous. Each filter and label is classed and given an id based on the name of the filter it represents.

<FilterGrid :only="['exampleCheckboxGroup-0', 'exampleInput-0', 'exampleRadioGroup-0', 'exampleSelect-0']" :columns="2"/>

## Usage
### kebab-case
``` html
    <filter-grid :columns="2" />
```
### PascalCase
```html
    <FilterGrid :columns="2" />
```

## Props

### clearButton
If true, includes a button to clear all filters and set them to their defaults. This button is consistent with the `synchronous` behavior.
* **Type**: `Boolean`
* **Required**: No
* **Default**: true

#### No Clear Filter Button Example
<FilterGrid :only="['exampleCheckboxGroup-1', 'exampleInput-1', 'exampleRadioGroup-1', 'exampleSelect-1']" :columns="2" :clearButton="false" />

```html
<FilterGrid :columns="2" :clearButton="false"/>
```

***

### buttonPosition
Sets the button alignment in the bottom row. If `none`, it will not display any buttons.
* **Type**: `String`
* **Required**: No
* **Options:**
    * `'left'`
    * `'center'`
    * `'right'`
    * `'none'`
* **Default**: `'center'`

#### Clear Filter Button Right Example
<FilterGrid :only="['exampleCheckboxGroup-2', 'exampleInput-2', 'exampleRadioGroup-2', 'exampleSelect-2']" :columns="2" :buttonPosition="'right'" />

```html
<FilterGrid :columns="2" :buttonPosition="'right'" />
```

#### Clear Filter Button Left Example
<FilterGrid :only="['exampleCheckboxGroup-3', 'exampleInput-3', 'exampleRadioGroup-3', 'exampleSelect-3']" :columns="2" :buttonPosition="'left'" />

```html
<FilterGrid :columns="2" :buttonPosition="'left'" />
```

## Mixin Props

### columns
The number of columns to use in each row of the grid. Must be a divisor of 12, as this uses the [Bootstrap Grid](https://getbootstrap.com/docs/4.0/layout/grid/). Default is 1.
* **Type**: `Number`
* **Required**: No
* **Options:**
    * `1` - `12`
* **Default**: `1`

#### 4 Column Example
<FilterGrid :only="['exampleCheckboxGroup-4', 'exampleInput-4', 'exampleRadioGroup-4', 'exampleSelect-4']" :columns="4" />

```html
<FilterGrid :columns="4" />
```

#### 1 Column Example
<FilterGrid :only="['exampleCheckboxGroup-5', 'exampleInput-5', 'exampleRadioGroup-5', 'exampleSelect-5']" />

```html
<FilterGrid />
```

***

### labelPosition
Controls the position of the label in respect to the input. If this is set on the grid, it will be used as the default for any input that does not specify it.
* **Type**: `String`
* **Required**: No
* **Options:**
    * `'horizontal'`
    * `'vertical'`
    * `'none'`
* **Default**: `'horizontal'`

#### Vertical Example
<FilterGrid :columns="2" :only="['exampleCheckboxGroup-6', 'exampleInput-6', 'exampleRadioGroup-6', 'exampleSelect-6']" :labelPosition="'vertical'" />

```html
<FilterGrid :columns="2" :labelPosition="'vertical'" />
```

#### Horizontal Example
<FilterGrid :only="['exampleCheckboxGroup-7', 'exampleInput-7', 'exampleRadioGroup-7', 'exampleSelect-7']" :columns="2" :labelPosition="'horizontal'" />

```html
<FilterGrid :columns="2" :labelPosition="'horizontal'" />
```

*** 

### synchronous

This property controls whether or not the filters automatically triggers Harness-Vue's `loadData` lifecycle hook on change. A 'synchronous' filter is 'in sync' with Harness-Vue's lifecycle, and therefore does trigger `loadData` when it changes.

* **Type**: `Boolean`
* **Required**: No
* **Default**: `false`

***

### labelColumnSize 
When used with `:labelPosition="'horizontal'"`, this controls the width of the label in respect to the input. Horizontal layouts use the [Bootstrap Grid](https://getbootstrap.com/docs/4.0/layout/grid/), which functions on subdivisions of 12. The number given to this property will be the subdivision of 12 used to control the label portion of the row - for example, a `labelColumnSize="4"` would use `col-4` for the label and `col-8` for the input.

* **Type**: `Number`
* **Required**: No
* **Default**: 6

#### Example 4
<FilterGrid :only="['exampleCheckboxGroup-8', 'exampleInput-8', 'exampleRadioGroup-8', 'exampleSelect-8']" :columns="2" :labelColumnSize="4"/>

```html
<FilterGrid :columns="2" :labelColumnSize="4"/>
```
#### Example 8
<FilterGrid :only="['exampleCheckboxGroup-9', 'exampleInput-9', 'exampleRadioGroup-9', 'exampleSelect-9']":columns="2" :labelColumnSize="8"/>

```html
<FilterGrid :columns="2" :labelColumnSize="8"/>
```
***
### only
Only filters with keys in this array will be rendered. Filters will be rendered in the order created on the harness page.
* **Type**: `Array`
* **Required**: No

#### Only ['exampleInput', 'exampleSelect'] Example
<FilterGrid :columns="2" :only="['exampleInput-10', 'exampleSelect-10']"/>

```html
<FilterGrid :columns="2" :only="['exampleInput', 'exampleSelect']"/>
```
***
### orderByOnly
Pairs with `order` prop to order `FilterGrid` based on the order of filters in `only`.
* **Type**: `Boolean`
* **Required**: No
* **Default**: `false`

#### Ordered ['exampleInput', 'exampleSelect'] Example
<FilterGrid :columns="2" :only="['exampleInput-11', 'exampleSelect-11']" :order-by-only="true"/>

```html
<FilterGrid :columns="2" :only="['exampleInput', 'exampleSelect']" :order-by-only="true" />
```
***
### except
Only filters with keys not in this array will be rendered.
* **Type**: `Array`
* **Required**: No

#### Except ['exampleInput', 'exampleSelect'] Example
<FilterGrid :columns="2" :only="['exampleCheckboxGroup-10', 'exampleRadioGroup-10']"/>

```html
<FilterGrid :columns="2" :except="['exampleInput', 'exampleSelect']" />
```
***
### rowClass
A string appended to the class of each row `div` element, for applying [bootstrap grid options](https://getbootstrap.com/docs/4.0/layout/grid/). This can also be used for applying user-created classes as well.
* **Type**: `String`
* **Required**: No
* **Default**: `null`

#### align-items-end Class Example
<FilterGrid :only="['exampleCheckboxGroup-11', 'exampleInput-12', 'exampleRadioGroup-11', 'exampleSelect-12']" :columns="2" :row-class="'align-items-end'"/>

```html
<FilterGrid :columns="2" :row-class="'align-items-end'"/>
```
***
### colClass
A string appended to the class of each col `div` element, for applying [bootstrap grid options](https://getbootstrap.com/docs/4.0/layout/grid/). This can also be used for applying user-created classes as well.
* **Type**: `String`
* **Required**: No
* **Default**: `null`

#### align-self-end Class Example
<FilterGrid :only="['exampleCheckboxGroup-12', 'exampleInput-13', 'exampleRadioGroup-12', 'exampleSelect-13']" :columns="2" :col-class="'align-self-end'"/>

```html
<FilterGrid :columns="2" :col-class="'align-self-end'" />
```
***
### componentClass
A string appended to the class of each component element, for applying [bootstrap classes](https://getbootstrap.com/docs/4.0/). This can also be used for applying user-created classes as well.
* **Type**: `String`
* **Required**: No
* **Default**: `null`

#### alert-success Class Example
<FilterGrid :only="['exampleCheckboxGroup-13', 'exampleInput-14', 'exampleRadioGroup-13', 'exampleSelect-14']" :columns="2" :component-class="'alert-success'"/>

```html
<FilterGrid :columns="2" :component-class="'alert-success'"/>
```
