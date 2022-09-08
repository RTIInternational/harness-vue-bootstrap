# Introduction
harness-UI Filters are a configurable components that bind harness filter functionality to Bootstrap 4 form components.

## Styling Classes
All inputs add contextual classes to the sub-parts of their components. These classes should follow this pattern:

```
harness-vue-bootstrap-<type>-<sub-part>-option
```
For example, styling the `label` element for the `harness-vue-bootstrap-select` component would refer to `.harness-vue-bootstrap-select-label`, or optionally `.harness-vue-bootstrap-select-label-horizontal`.

Additionally, contextual classes for [dirty inputs]() are applied to labels, inputs and structural wrappers for both as `.dirty-filter-<type>`. For example, using the `harness-vue-bootstrap-select` component, one could target `.dirty-filter-select`, `.dirty-filter-label`, and `.dirty-filter-wrapper`.

## Mapping Filters to Components
All harness-UI filters expect a `filter` prop that contains an object. As a convention, harness-UI requires that the key representing the filter is also included in this object. For example, to create a `harnessVueBootstrapSelect` filter for a filter named `exampleFilter`, one would write the following (assuming the `filter` variable contains the filter from the harness page definition):
```html
<harnessVueBootstrapSelect :filter="{ key: 'exampleFilter', ...filter }" />
```

Additionally, you can include the `key` field in your filter definition in your page file to avoid having to re-pack this functionality. Many projects have also chosen to use `FilterGrid` components for their layouts, which abstracts the implementation of components in templates and avoids this process as well.

For more information on this convention, see the [filterGrid]() component for how this is used programattically.

## Mapping Charts and Tables to Components
All harness-UI charts and tables expect a `chart` prop that contains an object. As a convention, harness-UI requires that the key representing the chart is also included in this object. For example, to create a `DataTable508` table for a chart named `exampleChart`, one would write the following (assuming the `chart` variable contains the chart from the harness page definition):
```html
<DataTable508 :chart="{ key: 'exampleChart' }" />
```

Many projects have also chosen to use `ChartGrid` components for their layouts, which abstracts the implementation of components in templates and avoids this process as well.

For more information on this convention, see the [chartGrid]() component for how this is used programattically.