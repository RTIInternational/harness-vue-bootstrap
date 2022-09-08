# Chart Grid
[[toc]]
## Basic Example
A basic `<ChartGrid>` element using [Bootstrap 4](https://getbootstrap.com/docs/4.0/) for styling. The `ChartGrid` component works largely the same as the [FilterGrid](/components/layouts/filterGrid) - it renders the components specified for each chart in the page definition into a bootstrap grid. It can also accept a subset and a number of columns.

<!-- loadDataShim is a necessary component to trigger the retrieveData function in examplePage.js -->
<loadDataShim  />

<ChartGrid :only="['exampleChartWithTable', 'exampleTable']"/>

## Usage
### kebab-case
``` html
    <chart-grid />
```
### PascalCase
```html
    <ChartGrid />
```

## Props

### only
Only filters with keys in this array will be rendered. Filters will be rendered in the order created on the harness page.
* **Type**: `Array`
* **Required**: No

#### Only ['exampleTable'] Example
<ChartGrid :only="['exampleTable']"/>

```html
<ChartGrid :only="['exampleTable']"/>
```
***
### orderByOnly
Pairs with `order` prop to order `ChartGrid` based on the order of filters in `only`.
* **Type**: `Boolean`
* **Required**: No
* **Default**: `false`

#### orderByOnly ['exampleTable', 'exampleChartWithTable'] Example
<ChartGrid :only="['exampleTable', 'barChart-0']" :order-by-only="true"/>

```html
<ChartGrid :only="['exampleTable', 'exampleChartWithTable']" :order-by-only="true"/>
```
***
### except
Only filters with keys not in this array will be rendered. Filters will be rendered in the order created on the harness page.
* **Type**: `Array`
* **Required**: No

#### Except ['exampleChartWithTable'] Example
<ChartGrid :only="['exampleTable']"/>

```html
<ChartGrid :except="['exampleChartWithTable']"/>
```
***
### columns
The number of columns to use in each row of the grid. Must be a divisor of 12, as this uses the [Bootstrap Grid](https://getbootstrap.com/docs/4.0/layout/grid/). Default is 1.
* **Type**: `Number`
* **Required**: No
* **Options:**
    * `1` - `12`
* **Default**: `1`

#### columns 2 Example
<ChartGrid :only="['exampleTable', 'barChart-1']" :columns="2"/>

```html
<ChartGrid :columns="2"/>
```
***
### rowClass
A string appended to the class of each row `div` element, for applying [bootstrap grid options](https://getbootstrap.com/docs/4.0/layout/grid/). This can also be used for applying user-created classes as well.
* **Type**: `String`
* **Required**: No
* **Default**: `null`

#### rowClass align-items-end Example
<ChartGrid :only="['exampleTable', 'barChart-2']" :columns="2" :row-class="'align-items-end'"/>

```html
<ChartGrid :columns="2" :row-class="'align-items-end'"/>
```
***
### colClass
A string appended to the class of each col `div` element, for applying [bootstrap grid options](https://getbootstrap.com/docs/4.0/layout/grid/). This can also be used for applying user-created classes as well.
* **Type**: `String`
* **Required**: No
* **Default**: `null`

#### colClass align-self-end Example
<ChartGrid :only="['exampleTable', 'barChart-3']" :columns="2" :col-class="'align-self-end'"/>

```html
<ChartGrid :columns="2" :col-class="'align-self-end'"/>
```
***
### componentClass
A string appended to the class of each component element, for applying [bootstrap classes](https://getbootstrap.com/docs/4.0/). This can also be used for applying user-created classes as well.
* **Type**: `String`
* **Required**: No
* **Default**: `null`

#### componentClass alert-success Example
<ChartGrid :only="['exampleTable', 'barChart-4']" :component-class="'alert-success'"/>

```html
<ChartGrid :component-class="'alert-success'"/>
```
***
### spread
If `true`, any rows with less charts than columns will expand to fill the space rather than enforce the grid size set by `columns`.
* **Type**: `Boolean`
* **Required**: No
* **Default**: `false`

#### spread false Example
<ChartGrid :only="['exampleTable']" :columns="2" :spread="false"/>

```html
<ChartGrid :columns="2" :spread="false" :component-class="'alert-success'"/>
```

#### spread true Example
<ChartGrid :only="['exampleTable']" :columns="2" :spread="true"/>

```html
<ChartGrid :columns="2" :spread="true" :component-class="'alert-success'"/>
```