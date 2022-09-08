
import DefaultTheme from 'vitepress/theme'
import { createPinia } from "pinia";
import { harnessPlugin, harnessMixin, harnessStore } from "@rtidatascience/harness-vue"
import { harnessVueBootstrap } from "../../../src/harness-vue-bootstrap"
import pages from "../../harness-pages/manifest"
import 'bootstrap'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css'
import '../../../node_modules/bootstrap-icons/font/bootstrap-icons.css';

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    const pinia = createPinia();
    ctx.app.use(pinia);
    // note: router has to come after harness ?
    ctx.app.use(harnessPlugin, { pinia, pages });
    ctx.app.mixin(harnessMixin(pinia));
    ctx.app.use(harnessVueBootstrap);

    const harness = harnessStore(pinia)
    const page = harness.getPageStores['examplePage'](pinia)
    page.loadData()
  }
}
