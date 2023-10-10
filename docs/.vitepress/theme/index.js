
import DefaultTheme from 'vitepress/theme'
import { createPinia } from "pinia";
import { harnessPlugin, harnessMixin, useHarnessStore } from "@rtidatascience/harness-vue"
import { harnessVueBootstrap } from "../../../src/harness-vue-bootstrap"
import barchart from './barchart.vue'
import pages from "../harness-pages/manifest"

import 'bootstrap/scss/bootstrap.scss'
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
    if(!import.meta.env.SSR){
      // this function syncs dark mode to bootstrap
      // vitepress uses "dark" as a class on the HTML element
      // bootstrap uses an attribute called "data-bs-theme"
        function darkModeSyncer(mutationList, observer){
          mutationList.forEach(mutation => {
            // sync dark mode to dark
            if(mutation.target.classList.contains("dark") && mutation.target.getAttribute("data-bs-theme") !== "dark"){
              mutation.target.setAttribute("data-bs-theme", "dark");
            }
        
            // sync dark mode to light
            if(!mutation.target.classList.contains("dark") && mutation.target.getAttribute("data-bs-theme") === "dark"){
              mutation.target.setAttribute("data-bs-theme", "");
            }
          })
        }
        const html = document.querySelector('html');
        const observer = new MutationObserver(darkModeSyncer)
      observer.observe(html, {attributes: true})
    }
    
    
    const harness = useHarnessStore(pinia)
    const page = harness.getPageStores['examplePage'](pinia)    
    page.loadData()
    
    
  }
}
