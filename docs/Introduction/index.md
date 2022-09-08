# About Harness Vue Bootstrap

Harness Vue Bootstrap is a Bootstrap 4.x component library for building web dashboards with Harness Vue. This library includes robust, configurable and accessible HTML inputs of various types that are pre-configured for use with the Harness Vue library. Additionally, this library includes flexible filter/chart grid layouts that use Harness Vue to render components, as well as accessible tables for use with the Harness Vue tableAdapter functionality.

## Prerequisites and Dependencies
This library requires your Vue 3.x application to use [Harness Vue](https://next.harnessjs.org). Additionally, this library uses [Bootstrap 4.6.x](https://getbootstrap.com/docs/4.6/getting-started/introduction/) and [Bootstrap Icons 1.x](https://icons.getbootstrap.com/).

This library also requires jquery for the input typeahead feature. If you are not using this feature, you do not need to install jquery.

## Installation

Download Harness Vue Bootstrap with your package manager of choice:

```sh
npm install -S @rtidatascience/harness-vue-bootstrap
# or with yarn
yarn add @rtidatascience/harness-vue-bootstrap
```

## Usage
The Harness Vue Bootstrap package exports a Vue plugin and a component manifest. Installing the plugin will globally register all Harness Vue Bootstrap components:

```js
import { createApp } from "vue";
import { harnessVueBootstrap } from "@rtidatascience/harness-vue-bootstrap"

const app = createApp(App);
//
// install pinia and Harness Vue
//
app.use(harnessVueBootstrap)
```

If you would not like to globally register components, you can access the component manifest at any time by importing `components` from `@rtidatascience/harness-vue-bootstrap`.

## Styles and Interactivity
Three stylesheets are required for this library. These can be retrieved from the following locations and can be installed using the CSS importer or preprocessor of your choice:


If your application will leverage components with interactivity such as the `ChartWithTable`, `MultiSelectListbox` or `InteractiveTable` components, make sure to also add `import "bootstrap"` to your Vue application to include the bootstrap javascript functionality.