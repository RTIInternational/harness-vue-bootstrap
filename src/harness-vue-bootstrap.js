import components from "./manifest";
import "corejs-typeahead";

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
