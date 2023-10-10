# Basic Table
[[toc]]
## Basic Example
A basic `<BasicTable>` element using [Bootstrap 5](https://getbootstrap.com/docs/5.3/content/tables/) for styling. This component takes an array of objects and renders an accessible (508 compliant) data table where each key/value pair corresponds to a column header/value. If the data is not in this format, you can include a `tableAdapter` function that accepts your data and transforms it into the necessary format. For more information on Harness-Vue `tableAdapter` functions see the [section on Structured Data and Tables](https://next.harnessjs.org/usage/charts.html#structured-data-and-tables) in the Harness-Vue documentation.


<BasicTable :chart="{ key: 'exampleTable' }"  />

## Usage
### kebab-case
``` html
    <basic-table :chart="{ key: 'exampleTable' }" />
```
### PascalCase
```html
    <BasicTable :chart="{ key: 'exampleTable' }" />
```
### Page Definition
```js
import { components } from '@rtidatascience/harness-vue-bootstrap'
components['BasicTable'] // array syntax
components.BasicTable // object syntax
'BasicTable' // string syntax if mixin installed
```
## Props

### chart
The chart object to render (Note: this is automatically handled by `ChartGrid`, so if you are using the grid you don't need this in your page definition)
* **Type**: `Object`
* **Required**: Yes

### tableClass
A string appended to the class of the table, for applying [bootstrap table options](https://getbootstrap.com/docs/4.0/content/tables/). This can also be used for applying user-created classes as well.
* **Type**: `String`
* **Required**: No
* **Default**: null

#### Example table-hover
<BasicTable :chart="{ key: 'exampleTable' }" :tableClass="'table-hover'"/>

```html
<BasicTable class="table-hover" />
```

### headerClass
A string appended to the class of the `<thead>` element, for applying [bootstrap table options](https://getbootstrap.com/docs/4.0/content/tables/). This can also be used for applying user-created classes as well.
* **Type**: `String`
* **Required**: No
* **Default**: null

#### Example thead-dark
<BasicTable :chart="{ key: 'exampleTable' }" headerClass="thead-dark"/>

```html
<BasicTable headerClass="thead-dark" />
```

### labelClass
A string appended to the class of each `<th>` element, for applying [bootstrap table options](https://getbootstrap.com/docs/4.0/content/tables/). This can also be used for applying user-created classes as well.
* **Type**: `String`
* **Required**: No
* **Default**: null

### rowClass
A string appended to the class of each `<tr>` element, for applying [bootstrap table options](https://getbootstrap.com/docs/4.0/content/tables/). This can also be used for applying user-created classes as well.
* **Type**: `String`
* **Required**: No
* **Default**: null

#### Example table-success
<BasicTable :chart="{ key: 'exampleTable' }" rowClass="table-success"/>

```html
<BasicTable rowClass="table-success" />
```

### cellClass
A string appended to the class of each `<td>` element, for applying [bootstrap table options](https://getbootstrap.com/docs/4.0/content/tables/). This can also be used for applying user-created classes as well.
* **Type**: `String`
* **Required**: No
* **Default**: null

#### Example table-danger
<BasicTable :chart="{ key: 'exampleTable' }" cellClass="table-danger"/>

```html
<BasicTable cellClass="table-danger" />
```

### rowHeaderCol
Adds `scope="row"` to the first cell in each row to make it a row header
* **Type**: `Boolean`
* **Required**: No
* **Default**: false

#### Example true
<BasicTable :chart="{ key: 'exampleTable' }" :rowHeaderCol="true"/>

```html
<BasicTable :rowHeaderCol="true" />
```
