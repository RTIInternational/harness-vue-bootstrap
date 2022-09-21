# About Harness Vue Bootstrap

Harness Vue Bootstrap is a Bootstrap 4.x component library for building web dashboards with Harness Vue. This library includes robust, configurable and accessible HTML inputs of various types that are pre-configured for use with the Harness Vue library. Additionally, this library includes flexible filter/chart grid layouts that use Harness Vue to render components, as well as accessible tables for use with the Harness Vue tableAdapter functionality.

## Prerequisites and Dependencies
This library requires your Vue 3.x application to use [Harness Vue](https://next.harnessjs.org). Additionally, this library uses [Bootstrap 4.6.x](https://getbootstrap.com/docs/4.6/getting-started/introduction/) and [Bootstrap Icons 1.x](https://icons.getbootstrap.com/).

## Installation

Download Harness Vue Bootstrap with your package manager of choice:

```sh
npm install -S @rtidatascience/harness-vue-bootstrap
# or with yarn
yarn add @rtidatascience/harness-vue-bootstrap
```

## Plugin Installation
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

If you would not like to globally register components, you can access the component manifest at any time by importing `components` from `@rtidatascience/harness-vue-bootstrap`. This manifest includes each component by key. For example, if you'd like to use `HarnessVueBootstrapSelect` without installing all components globally, you can access it this way: 

```js
import { components } from "@rtidatascience/harness-vue-bootstrap"

const select = components["HarnessVueBootstrapSelect"]
```

## Styles and Interactivity
This library includes component styles that require importing. These components additionally depend on bootstrap and bootstrap-icons. You can import these stylesheets as well as the library's stylesheets like so:

```js
// in your main.js file
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '@rtidatascience/harness-vue-bootstrap/dist/style.css'
```

```scss
// in sass
@import 'bootstrap/dist/css/bootstrap.css';
@import 'bootstrap-icons/font/bootstrap-icons.css';
@import '@rtidatascience/harness-vue-bootstrap/dist/style.css';
```

Additionally, if using any features that rely on bootstrap interactivity such as `ChartWithTable`, certain configurations of `HarnessVueBootstrapCheckboxGroup` or `HarnessVueInput`, make sure that you import bootstrap's Javascript:

```js
import 'bootstrap'
```