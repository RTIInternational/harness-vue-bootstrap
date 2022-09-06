import components from "./manifest";
import jquery from "jquery";
if (typeof window !== "undefined") {
  window.$ = window.jQuery = jquery;
}

export const harnessVueBootstrap = {
  // eslint-disable-next-line
    install(Vue, options) {
    // // globally register components
    Object.keys(components).forEach((name) => {
      Vue.component(name, components[name]);
    });
  },
};

export { default as components } from "./manifest";
