
import DefaultTheme from 'vitepress/theme'
import { createPinia } from "pinia";
import { harnessPlugin, harnessMixin, harnessStore } from "@rtidatascience/harness-vue"
import { harnessVueBootstrap } from "../../../src/harness-vue-bootstrap"
import barchart from './barchart.vue'
import pages from "../../harness-pages/manifest"

import "corejs-typeahead";
import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import './main.css'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    const pinia = createPinia();
    ctx.app.use(pinia);
    // note: router has to come after harness ?
    ctx.app.use(harnessPlugin, { pinia, pages });
    ctx.app.mixin(harnessMixin(pinia));
    ctx.app.use(harnessVueBootstrap);
    ctx.app.component('barchart', barchart)

    const harness = harnessStore(pinia)
    const page = harness.getPageStores['examplePage'](pinia)    
    page.loadData()
  }
}
