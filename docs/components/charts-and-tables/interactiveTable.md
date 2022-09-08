# Interactive Table
[[toc]]
## Basic Example
A basic `<InteractiveTable>` element using [Bootstrap 4](https://getbootstrap.com/docs/4.0/components/forms/) for styling. This component takes an array of objects and renders a 508-compliant data table where each key/value pair corresponds to a column header/value. If the data is not in this format, you can include a `tableAdapter` function that accepts your data and transforms it into the necessary format. This tabular data is searchable, sortable, and paginated, either through the built-in functionality or through developer-defined functionality in the `loadData()` function. For more information on the `tablleAdapter` function, check out the harness documentation on [Defining Charts](https://www.harnessjs.org/getting-started/usage.html#defining-charts)


<InteractiveTable :chart="{ key: 'exampleTable2' }" :numRowOptions="[5, 10, 25]" :defaultSortColumn="'Transformed key'" />

## Usage
### kebab-case
``` html
<interactive-table :chart="{ key: 'exampleTable2' }" :numRowOptions="[5, 10, 25]" :defaultSortColumn="'Transformed key'"/>
```
### PascalCase
```html
<InteractiveTable :chart="{ key: 'exampleTable2' }" :numRowOptions="[5, 10, 25]" :defaultSortColumn="'Transformed key'" />
```
### Page File
```js
import { components } from '@rtidatascience/harness-vue-bootstrap'
components['InteractiveTable'] // array syntax
components.InteractiveTable // object syntax
```
## Props

### local
Object that sets whether harness or the developer will handle the search, sort, and pagination functionality. If any of the properties are set to `false`, then harness will hand off that corresponding functionality to the developer to handle in `loadData()`. If a property is missing, or the value is set to true, then harness will automatically handle the functionality.
* **Type**: `Object`
* **Required**: No

### Example Page File With local Prop
```js
charts = function () {
  return {
    exampleTable2: {
      title: 'Example Table',
      component: components['InteractiveTable'],
      props: {
        local: {
          'search': true,
          'sort': false,
          'paginate': true
        }
      }
    }
  }
}
```

If any of the `local` properties are set to false, the developer will need to define a filter for the chart in order for the necessary values to be assigned and accessed. The filter should follow the naming convention of `chart.key + 'TableOptions'`. 

### Example Page File With exampleTable2TableOptions Filter
```js
filters = function () {
  return {
    exampleChart2TableOptions: {
      key: 'exampleChart2TableOptions',
      label: 'Example Chart 2 Table Options',
      component: {},
      options: []
    }
  }
}
```

When accessing the filter in `loadData()`, the filter value will be an object with the following properties:
* **pageNumber**: The current page the table is on
* **searchQuery**: The current value of the search input field
* **columnSelector**: The current column being sorted
* **columnSort**: Either `'asc'` or `'desc'`, based on the current column's sort type
* **paginationAmount**: The maxinum number of rows that can be displayed per page
* **numberOfPages**: The current number of pages in the table. This is calculated based on the total number of rows in the chart data and the maxinum number of rows per page.
***
### numRowOptions
Array of integers that define the options for the amount of rows to paginate by.
* **Type**: `Array`
* **Required**: Yes

#### Example numRowOptions [3, 6, 9]
<InteractiveTable :chart="{ key: 'exampleTable2' }" :numRowOptions="[3, 6, 9]" :defaultSortColumn="'Transformed key'"/>

```html
<InteractiveTable :chart="{ key: 'exampleTable2' }" :numRowOptions="[3, 6, 9]" :defaultSortColumn="'Transformed key'"/>
```
***
### defaultSortColumn
String value of the key for the default column header to sort by.
* **Type**: `String`
* **Required**: Yes

#### Example defaultSortColumn 'Transformed key 2'
<InteractiveTable :chart="{ key: 'exampleTable2' }" :numRowOptions="[5, 10, 25]" :defaultSortColumn="'Transformed key 2'"/>

```html
<InteractiveTable :chart="{ key: 'exampleTable2' }" :numRowOptions="[5, 10, 25]" :defaultSortColumn="'Transformed key'"/>
```
***
### defaultSortOrder
String value telling the table to sort by ascending or descending order by default
* **Type**: `String`
* **Required**: No
* **Default**: `'asc'`
* **Options:**
    * `'asc'`
    * `'desc'`

#### Example defaultSortColumn 'Transformed key 2'
<InteractiveTable :chart="{ key: 'exampleTable2' }" :numRowOptions="[5, 10, 25]" :defaultSortColumn="'Transformed key 2'"/>

```html
<InteractiveTable :chart="{ key: 'exampleTable2' }" :numRowOptions="[5, 10, 25]" :defaultSortColumn="'Transformed key'"/>
```
***
### chart
The chart object to render (Note: this is automatically handled by `ChartGrid`, so if you are using the grid you don't need this in your page definition)
* **Type**: `Object`
* **Required**: Yes
***
### tableClass
A string appended to the class of the table, for applying [bootstrap table options](https://getbootstrap.com/docs/4.0/content/tables/). This can also be used for applying user-created classes as well.
* **Type**: `String`
* **Required**: No
* **Default**: null

#### Example table-hover
<InteractiveTable :chart="{ key: 'exampleTable2' }" :numRowOptions="[5, 10, 25]" :defaultSortColumn="'Transformed key'" class="table-hover" />

```html
<InteractiveTable :chart="{ key: 'exampleTable2' }" :numRowOptions="[5, 10, 25]" :defaultSortColumn="'Transformed key'" class="table-hover"/>
```

***
### headerClass
A string appended to the class of the `<thead>` element, for applying [bootstrap table options](https://getbootstrap.com/docs/4.0/content/tables/). This can also be used for applying user-created classes as well.
* **Type**: `String`
* **Required**: No
* **Default**: null

#### Example thead-dark
<InteractiveTable :chart="{ key: 'exampleTable2' }"   :numRowOptions="[5, 10, 25]" :defaultSortColumn="'Transformed key'" headerClass="thead-dark"/>

```html
<InteractiveTable :chart="{ key: 'exampleTable2' }" :numRowOptions="[5, 10, 25]" :defaultSortColumn="'Transformed key'" headerClass="thead-dark"/>
```

***
### labelClass
A string appended to the class of each `<th>` element, for applying [bootstrap table options](https://getbootstrap.com/docs/4.0/content/tables/). This can also be used for applying user-created classes as well.
* **Type**: `String`
* **Required**: No
* **Default**: null

***

### rowClass
A string appended to the class of each `<tr>` element, for applying [bootstrap table options](https://getbootstrap.com/docs/4.0/content/tables/). This can also be used for applying user-created classes as well.
* **Type**: `String`
* **Required**: No
* **Default**: null

#### Example table-success
<InteractiveTable :chart="{ key: 'exampleTable2' }"   :numRowOptions="[5, 10, 25]" :defaultSortColumn="'Transformed key'" rowClass="table-success"/>

```html
<InteractiveTable :chart="{ key: 'exampleTable2' }" :numRowOptions="[5, 10, 25]" :defaultSortColumn="'Transformed key'" rowClass="table-success"/>
```
***
### cellClass
A string appended to the class of each `<td>` element, for applying [bootstrap table options](https://getbootstrap.com/docs/4.0/content/tables/). This can also be used for applying user-created classes as well.
* **Type**: `String`
* **Required**: No
* **Default**: null

#### Example table-danger
<InteractiveTable :chart="{ key: 'exampleTable2' }" :numRowOptions="[5, 10, 25]" :defaultSortColumn="'Transformed key'" cellClass="table-danger"/>

```html
<InteractiveTable :chart="{ key: 'exampleTable2' }" :numRowOptions="[5, 10, 25]" :defaultSortColumn="'Transformed key'" cellClass="table-danger"/>
```
***
### rowHeaderCol
Adds `scope="row"` to the first cell in each row to make it a row header
* **Type**: `Boolean`
* **Required**: No
* **Default**: false

#### Example true
<InteractiveTable :chart="{ key: 'exampleTable2' }" :numRowOptions="[5, 10, 25]" :defaultSortColumn="'Transformed key'" :rowHeaderCol="true" />

```html
<InteractiveTable :chart="{ key: 'exampleTable2' }" :numRowOptions="[5, 10, 25]" :defaultSortColumn="'Transformed key'" :rowHeaderCol="true"/>
```
