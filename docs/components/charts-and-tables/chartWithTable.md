# Chart With Table
[[toc]]
## Basic Example
A basic `<ChartWithTable>` element using [Bootstrap 4](https://getbootstrap.com/docs/4.0/components/forms/) for styling. This component renders both a chart and a [508-compliant table](/components/charts-and-tables/dataTable508), and additionally adds a function to download the source data as CSV. It is worth noting that this accepts the chart component as a prop, so in your page definition you would choose this component as your chart's `component` value, then include the actual chart you'd like to render as a prop called `chartComponent`.

<ChartGrid :only="['exampleChartWithTable']" />

## Usage
### kebab-case
``` html
<chart-with-table :chart="{ key: 'exampleChartWithTable' }" :chartComponent="barChart"/>
```
### PascalCase
```html
<ChartWithTable :chart="{ key: 'exampleChartWithTable' }" :chartComponent="barChart" />
```
### Page Definition
```js
import { components } from '@rtidatascience/harness-vue-bootstrap'
components['ChartWithTable'] // array syntax
components.ChartWithTable // object syntax
```
### Component File
```js
import barChart from 'components/barChart.vue'
```
## Props

### chart
The chart object to render (Note: this is automatically handled by `ChartGrid`, so if you are using the grid you don't need this in your page definition).
* **Type**: `Object`
* **Required**: Yes
***
### chartComponent
The component you would like to be rendered for the chart portion of this component.
* **Type**: `[Object, Function]`
* **Required**: Yes
***
### tableDisplay
Toggle shows the chart, and allows the user to toggle between the chart and table. `'bottom'` displays the table below the chart.
* **Type**: `String`
* **Required**: No
* **Options:**
    * `'toggle'`
    * `'bottom'`
* **Default**: `'toggle'`

#### Example tableDisplay bottom
<chart-with-table :chart="{key: 'exampleChartWithTable'}" :chartComponent="'barchart'" :refName="'table-display-bottom-example'" :tableDisplay="'bottom'"/>

```html
<ChartWithTable :chart="{ key: 'exampleChartWithTable' }" :chartComponent="barChart" :tableDisplay="'bottom'"/>
```
***
### downloadable
Adds a download button that downloads a CSV representation of the chart data.
* **Type**: `Boolean`
* **Required**: No
* **Default**: `true`

#### Example downloadable false
<chart-with-table :chart="{key: 'exampleChartWithTable'}" :chartComponent="'barchart'" :refName="'downloadable-false-example'" :downloadable="false"/>

```html
<ChartWithTable :chart="{ key: 'exampleChartWithTable' }" :chartComponent="barChart" :downloadable="false"/>
```
***
### card
Renders this component as a [bootstrap card](https://getbootstrap.com/docs/4.0/components/card/).
* **Type**: `Boolean`
* **Required**: No
* **Default**: `true`

#### Example card false

<chart-with-table :chart="{key: 'exampleChartWithTable'}" :chartComponent="'barchart'" :refName="'card-false-example'" :card="false"/>

```html
<ChartWithTable :chart="{ key: 'exampleChartWithTable' }" :chartComponent="barChart" :card="false"/>
```
***
### buttonPosition
Puts buttons as part of the header or footer.
* **Type**: `String`
* **Required**: No
* **Options:**
    * `'top'`
    * `'bottom'`
* **Default**: `'top'`

#### Example button bottom
<chart-with-table :chart="{key: 'exampleChartWithTable'}" :chartComponent="'barchart'" :refName="'button-bottom-example'" :buttonPosition="'bottom'"/>

```html
<ChartWithTable :chart="{ key: 'exampleChartWithTable' }" :chartComponent="barChart" :buttonPosition="'bottom'"/>
```
***
### saveImageButton
If this exists, a "save image" button will render in the button row that calls this function.
* **Type**: `Function`
* **Required**: No
***
### collapsible
Renders a button to the right of the title that will collapse the chart and table body when clicked.
* **Type**: `Boolean`
* **Required**: No
* **Default**: `false`

#### Example collapsible true
<chart-with-table :chart="{key: 'exampleChartWithTable'}" :chartComponent="'barchart'" :refName="'collapsible-example'" :collapsible="true"/>

```html
<ChartWithTable :chart="{ key: 'exampleChartWithTable' }" :chartComponent="barChart" :collapsible="true"/>
```
***
### collapsibleFunc
If this exists, the function will run each time the collapse button is clicked. Useful if you need to dispose of a chart on collapse. Intended to be used when `collapsible` is set to `true`.
* **Type**: `Function`
* **Required**: No
* **Default**: `() => true`

#### Example collapsibleFunc alert
<chart-with-table :chart="{key: 'exampleChartWithTable'}" :chartComponent="'barchart'" :refName="'collapse-func-example'" :collapsible="true" :collapsibleFunc="() => alert('Chart has been collapsed')"/>

```html
<ChartWithTable
    :chart="{ key: 'exampleChartWithTable' }"
    :chartComponent="barChart"
    :collapsible="true"
    :collapsibleFunc="() => alert('Chart has been collapsed')"
/>
```
***
### startCollapsed
 If `true`, chart will appear as collapsed when first rendered. Intended to be used when `collapsible` is set to `true`.
* **Type**: `Boolean`
* **Required**: No
* **Default**: `false`

#### Example startCollapsed true
<chart-with-table :chart="{key: 'exampleChartWithTable'}" :chartComponent="'barchart'"
    :refName="'start-collapsed-example'"
    :collapsible="true"
    :startCollapsed="true"
/>

```html
<ChartWithTable
    :chart="{ key: 'exampleChartWithTable' }"
    :chartComponent="barChart"
    :collapsible="true"
    :startCollapsed="true"
/>
```
***