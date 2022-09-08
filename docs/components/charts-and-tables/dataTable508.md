# Data Table 508
[[toc]]
## Basic Example
A basic `<DataTable508>` element using [Bootstrap 4](https://getbootstrap.com/docs/4.0/components/forms/) for styling. This component takes an array of objects and renders a 508-compliant data table where each key/value pair corresponds to a column header/value. If the data is not in this format, you can include a `tableAdapter` function that accepts your data and transforms it into the necessary format.
**TODO: Link to harness tableAdapter docs**

<DataTable508 :chart="{ key: 'exampleTable' }"  />

## Usage
### kebab-case
``` html
    <data-table-508 :chart="{ key: 'exampleTable' }" />
```
### PascalCase
```html
    <DataTable508 :chart="{ key: 'exampleTable' }" />
```
### Page File
```js
import { components } from '@rtidatascience/harness-vue-bootstrap'
components['DataTable508'] // array syntax
components.DataTable508 // object syntax
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
<DataTable508 :chart="{ key: 'exampleTable' }" class="table-hover"/>

```html
<DataTable508 class="table-hover" />
```

### headerClass
A string appended to the class of the `<thead>` element, for applying [bootstrap table options](https://getbootstrap.com/docs/4.0/content/tables/). This can also be used for applying user-created classes as well.
* **Type**: `String`
* **Required**: No
* **Default**: null

#### Example thead-dark
<DataTable508 :chart="{ key: 'exampleTable' }" headerClass="thead-dark"/>

```html
<DataTable508 headerClass="thead-dark" />
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
<DataTable508 :chart="{ key: 'exampleTable' }" rowClass="table-success"/>

```html
<DataTable508 rowClass="table-success" />
```

### cellClass
A string appended to the class of each `<td>` element, for applying [bootstrap table options](https://getbootstrap.com/docs/4.0/content/tables/). This can also be used for applying user-created classes as well.
* **Type**: `String`
* **Required**: No
* **Default**: null

#### Example table-danger
<DataTable508 :chart="{ key: 'exampleTable' }" cellClass="table-danger"/>

```html
<DataTable508 cellClass="table-danger" />
```

### rowHeaderCol
Adds `scope="row"` to the first cell in each row to make it a row header
* **Type**: `Boolean`
* **Required**: No
* **Default**: false

#### Example true
<DataTable508 :chart="{ key: 'exampleTable' }" :rowHeaderCol="true"/>

```html
<DataTable508 :rowHeaderCol="true" />
```
