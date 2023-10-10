# About Harness-Vue-Bootstrap

Harness-Vue-Bootstrap is a Bootstrap 5.x component library for building web dashboards with Harness Vue. This library includes robust, configurable and accessible HTML inputs of various types that are pre-configured for use with the Harness Vue library. Additionally, this library includes flexible filter/chart grid layouts that use Harness Vue to render components, as well as accessible tables for use with the Harness Vue tableAdapter functionality.

## Prerequisites and Dependencies
This library requires your Vue 3.x application to use [Harness-Vue](https://www.harnessjs.org). Additionally, this library uses [Bootstrap 5.3.x](https://getbootstrap.com/) and [Bootstrap Icons 1.x](https://icons.getbootstrap.com/).

## Installation

Download Harness-Vue-Bootstrap with your package manager of choice:

```sh
npm install -S @rtidatascience/harness-vue-bootstrap
```

## Plugin Installation
The Harness-Vue-Bootstrap package exports a Vue plugin and a component manifest. Installing the plugin will globally register all Harness-Vue-Bootstrap components:

```js
import { createApp } from "vue";
import { harnessVueBootstrap } from "@rtidatascience/harness-vue-bootstrap"

const app = createApp(App);
//
// install pinia and Harness Vue
//
app.use(harnessVueBootstrap)
```

## Styles and Interactivity
This library requires bootstrap's styles and icons to be included in your application. We recommend importing Bootstrap's stylesheets in your main sass file, though you can install it directly through your main.js file as well.

```js
// in your main.js file
import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap-icons/font/bootstrap-icons.css'
```

```scss
// in sass
@import 'bootstrap/scss/bootstrap.scss';
@import 'bootstrap-icons/font/bootstrap-icons.css';
```