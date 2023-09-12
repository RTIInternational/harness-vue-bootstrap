# Usage

## Layouts
The `<FilterGrid>` and `<ChartGrid>` components are intended for use in page components for laying out and automatically embedding filters and charts. As a general rule of thumb in this library, all props and fallthrough attributes are passed down the chain. For example, when you use `FilterGrid` to embed a filter from a Harness Vue page definition, it uses the following code snippet:

```html
<component
    :is="filter.component"
    v-bind="{ ...props, ...$attrs, filter, ...filter.props, }"
    :key="pageDefinition.key + '-filtergrid-' + filter.key"
    :class="componentClass"
/>
```

In this way, all components that are intended to display charts and filters should expect a `chart` or `filter` prop that includes the equivalent of the Harness Vue `getChartDefinition(key)` or `getFilterDefinition(key)` functions. By including all `$props` and `$attrs` from the grids themselves, this additionally allows you to define custom props and pass them down through all child components. For example, if a developer would like all of their Harness-Vue-Bootstrap inputs to use the `vertical` strategy for `labelPosition`, they can do the following and expect that all child components will receive `labelPosition`:

```html
<filterGrid :labelPosition="'vertical'" />
```

## Including Filters and Tables in Page Definitions
The filters and tables included in this library are intended to be used within Harness Vue page definitions. For example, with the Harness-Vue-Bootstrap plugin installed (and all components globally registered), a developer can define a filter like so:

```js
export default class ExamplePage {
    filters = () => {
        return {
            exampleSelect: {
            key: "exampleSelect",
            label: "Example Select",
            component: "harnessVueBootstrapSelect",
            options: [
            {
                key: "exampleOption",
                label: "Example Option",
                default: true,
            },
            {
                key: "exampleOption2",
                label: "Example Option 2",
            },
            {
                key: "exampleOption3",
                label: "Example Option 3",
            },
            ],
        }
        }
    }
}
```

If a developer chooses not to globally install all components, they must instead include the component as a `shallowRef` like so:

```js
import { shallowRef } from "vue";
import {components } from "@rtidatascience/harness-vue-bootstrap"
export default class ExamplePage {
    filters = () => {
        return {
            exampleSelect: {
            key: "exampleSelect",
            label: "Example Select",
            component: shallowRef(components.HarnessVueBootstrapSelect),
            options: [
            {
                key: "exampleOption",
                label: "Example Option",
                default: true,
            },
            {
                key: "exampleOption2",
                label: "Example Option 2",
            },
            {
                key: "exampleOption3",
                label: "Example Option 3",
            },
            ],
        }
        }
    }
}
```
