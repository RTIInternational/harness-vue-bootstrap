# Input
[[toc]]
<!-- *** Changing input value is triggering this error every time in console:
Error in render: "TypeError: Cannot read property '_modulesNamespaceMap' of undefined"
-->

## Basic Example
A basic `<input>` element using [Bootstrap 4](https://getbootstrap.com/docs/4.0/components/forms/) for styling. This component binds the input to a harness filter. The harness-vue-bootstrap-input component is flexible and can accept various HTML5 `<input>` types.

<harness-vue-bootstrap-input :filter="getFilterDefinition('exampleInput')" />