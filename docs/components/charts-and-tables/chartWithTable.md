# Chart With Table
[[toc]]
## Basic Example
A basic `<ChartWithTable>` element using [Bootstrap 5](https://getbootstrap.com/docs/5.3/content/tables/) for styling. This component renders both a chart and a [basicTable component](/components/charts-and-tables/basicTable), and additionally adds a function to download the source data as CSV. It is worth noting that this accepts the chart component as a prop, so in your page definition you would choose this component as your chart's `component` value, then include the actual chart you'd like to render as a prop called `chartComponent`.

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
### Page Definition Example
```js
// in a page definition's charts section
{
    chartKey: {
        title: "chart title",
        component: "HarnessVueBootstrapChartWithTable",
        props: {
            chartComponent: yourChartComponentHere
        }
    }
}
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
### showDownloadButton
Adds a download button that downloads a CSV representation of the chart data.
* **Type**: `Boolean`
* **Required**: No
* **Default**: `true`

#### Example downloadable false
<chart-with-table :chart="{key: 'exampleChartWithTable', title: 'Example Chart'}" :chartComponent="'barchart'" :refName="'downloadable-false-example'" :showDownloadButton="false"/>

```html
<ChartWithTable :chart="{ key: 'exampleChartWithTable' }" :chartComponent="barChart" :downloadable="false"/>
```
***

### buttonPosition
Directs butttons to be in the card header or footer.
* **Type**: `String`
* **Required**: No
* **Options:**
    * `'header'`
    * `'footer'`
* **Default**: `'header'`

#### Example button bottom
<chart-with-table :chart="{key: 'exampleChartWithTable', title: 'Example Chart'}" :chartComponent="'barchart'" :refName="'button-bottom-example'" :buttonPosition="'footer'"/>

```html
<ChartWithTable :chart="{ key: 'exampleChartWithTable' }" :chartComponent="barChart" :buttonPosition="'bottom'"/>
```
***

### showTableButtonText
Allows a user-specified label for the toggle button to show the table component.
* **Type**: `String`
* **Required**: No
* **Default**: `'Show Table'`

### showChartButtonText
Allows a user-specified label for the toggle button to show the chart component.
* **Type**: `String`
* **Required**: No
* **Default**: `'Show Chart'`

### downloadButtonText
Allows a user-specified label for the download button.
* **Type**: `String`
* **Required**: No
* **Default**: `'Download as CSV'`

#### Example with custom button labels
<chart-with-table :chart="{key: 'exampleChartWithTable', title: 'Example Chart'}" :chartComponent="'barchart'" :refName="'downloadable-false-example'" :showChartButtonText="'Show Me The Chart'" :showTableButtonText="'Show Me The Table'" :downloadButtonText="'Give Me The CSV'"/>

```html
<ChartWithTable :chart="{ key: 'exampleChartWithTable' }" :chartComponent="barChart" :showChartButtonText="'Show Me The Chart'" :showTableButtonText="'Show Me The Table'" :downloadButtonText="'Give Me The CSV'"/>
```

### showTitleForViews
Allows user to specify when title is displayed.
* **Type**: `Array`
* **Required**: No
* **Default**: `["chart", "table"]`

***
## Slots

This component also has [named slots](https://vuejs.org/guide/components/slots.html#named-slots) for adding additional content such as buttons and text elements.

### Additional Buttons

```html
<chart-with-table>
    <template v-slot:additional-buttons>
        <button class="btn btn-sm">Custom Button</button>
    </template>
</chart-with-table>
```
<chart-with-table :chart="{key: 'exampleChartWithTable', title: 'Example Chart'}" :chartComponent="'barchart'" :refName="'downloadable-false-example'" :showChartButtonText="'Show Me The Chart'" :showTableButtonText="'Show Me The Table'" :downloadButtonText="'Give Me The CSV'">
    <template v-slot:additional-buttons>
        <button class="btn btn-sm">Custom Button</button>
    </template>
</chart-with-table>


### Above and Below Chart Options
```html
<chart-with-table>
    <template v-slot:above-chart>
        <p class="lead">This is some additional data about the chart.</p>
    </template>
    <template v-slot:below-chart>
        <h3>References</h3>
        <ul>
            <li>Reference 1</li>
            <li>Reference 2</li>
        </ul>
    </template>
</chart-with-table>
```
<chart-with-table :chart="{key: 'exampleChartWithTable', title: 'Example Chart'}" :chartComponent="'barchart'" :refName="'downloadable-false-example'" :showChartButtonText="'Show Me The Chart'" :showTableButtonText="'Show Me The Table'" :downloadButtonText="'Give Me The CSV'">
    <template v-slot:above-chart>
        <p class="lead text-center">This is some additional data about the chart.</p>
    </template>
    <template v-slot:below-chart>
        <p class="small d-flex justify-content-end align-items-center">
        Here are some chart notes.
        </p>
    </template>
</chart-with-table>