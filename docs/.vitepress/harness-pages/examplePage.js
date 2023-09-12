import { compileScript } from "vue/compiler-sfc";

export default class ExamplePage {
  title = "Example Page";
  key = "examplePage";
  pageComponent = {};
  pageProps = {};
  loadData = async (state, pageObject, hs) => {
    return {
      exampleChartWithTable: {
        labels: Array(5)
          .fill("Category")
          .map((cat, idx) => `${cat} ${idx + 1}`),
        datasets: [
          {
            label: "Example Data",
            data: Array(5)
              .fill(1)
              .map((c) => Math.floor(Math.random() * 100 * c)),
          },
        ],
      },
      exampleTable: [
        { key: "value", key2: "value2" },
        { key: "value3", key2: "value4" },
        { key: "value5", key2: "value6" },
      ],
      exampleTable2: [
        { key: "value", key2: "value2" },
        { key: "value3", key2: "value4" },
        { key: "value5", key2: "value6" },
        { key: "value7", key2: "value8" },
        { key: "value9", key2: "value10" },
        { key: "value11", key2: "value12" },
        { key: "value13", key2: "value14" },
        { key: "value15", key2: "value16" },
        { key: "value17", key2: "value18" },
      ],
    };
  };
  filters = function () {
    let searchableOptions = [
      {
        key: "RTI International",
        label: "RTI International",
      },
      {
        key: "RTI International Center for Data Science",
        label: "RTI International Center for Data Science",
      },
      {
        key: "CDS",
        label: "CDS",
      },
      {
        key: "RTI CDS",
        label: "RTI CDS",
      },
      {
        key: "Data Science",
        label: "Data Science",
      },
      {
        key: "foo",
        label: "foo",
      },
      {
        key: "Harness",
        label: "Harness",
      },
      {
        key: "Harness-vue-bootstrap",
        label: "Harness-vue-bootstrap",
      },
      {
        key: "@rtidatascience/harness",
        label: "@rtidatascience/harness",
      },
      {
        key: "@rtidatascience/Harness-vue-bootstrap",
        label: "@rtidatascience/Harness-vue-bootstrap",
      },
    ];

    let range = [...Array(15).keys()];
    let generatedFilters = {
      exampleSelect: {
        key: "exampleSelect",
        label: "Example Select",
        component: "HarnessVueBootstrapSelect",
        props: {
          filterType: "internal",
        },
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
      },
      exampleMultiSelect: {
        key: "exampleMultiSelect",
        label: "Example Multiselect",
        component: "HarnessVueBootstrapSelect",
        props: {
          multiple: true,
          filterType: "MultiSelect Group",
        },
        options: [
          {
            key: "exampleOption",
            label: "Example Option",
          },
          {
            key: "exampleOption2",
            label: "Example Option 2",
            default: true,
          },
          {
            key: "exampleOption3",
            label: "Example Option 3",
            default: true,
          },
        ],
      },
      exampleInput: {
        key: "exampleInput",
        label: "Example Input",
        component: "HarnessVueBootstrapInput",
        props: {
          filterType: "Input Group",
        },
        options: [],
      },
      exampleInputDatalist: {
        label: "Example Input With Datalist",
        component: "HarnessVueBootstrapInput",
        options: [{key: "", value: ""}, ...searchableOptions],
      },
      exampleInputMinMaxStep: {
        key: "exampleInputMinMaxStep",
        label: "Example Input",
        component: "HarnessVueBootstrapInput",
        props: {
          type: 'number',
          min: 0.05,
          max: 0.24,
          step: 0.001
        },
        options: [],

      },
      exampleOptionInput: {
        key: "exampleOptionInput",
        label: "Example Input with Option",
        component: "HarnessVueBootstrapInput",
        props: {
          filterType: "internal",
        },
        options: [
          {
            key: "Example Input Option",
          },
        ],
      },
      examplePasswordInput: {
        key: "examplePasswordInput",
        label: "Example Password Input",
        component: "HarnessVueBootstrapInput",
        props: {
          type: "password",
          filterType: "internal",
        },
        options: [
          {
            key: "Example Password Input",
          },
        ],
      },
      exampleCheckboxGroup: {
        key: "exampleCheckboxGroup",
        label: "Example Checkbox Group",
        component: "HarnessVueBootstrapCheckboxGroup",
        props: {
          multiple: true,
          filterType: "internal",
        },
        options: [
          {
            key: "exampleOption",
            label: "Example Option",
          },
          {
            key: "exampleOption2",
            label: "Example Option2",
          },
          {
            key: "exampleOption3",
            label: "Example Option3",
          },
        ],
      },
      exampleTable2TableOptions: {
        key: "exampleTable2TableOptions",
        label: "Example Table 2 Table Options",
        props: {
          filterType: "internal",
        },
        component: {},
        options: [],
      },
    };
    range.forEach((num) => {
      generatedFilters[`exampleCheckboxGroup${num}`] = {
        key: `exampleCheckboxGroup${num}`,
        label: "Example Checkbox Group",
        component: "HarnessVueBootstrapCheckboxGroup",
        props: {
          multiple: true,
          filterType: "checkbox_group",
        },
        options: [
          {
            key: "exampleOption",
            label: "Example Option",
          },
          {
            key: "exampleOption2",
            label: "Example Option2",
          },
          {
            key: "exampleOption3",
            label: "Example Option3",
          },
        ],
      };
      generatedFilters[`exampleInput${num}`] = {
        key: `exampleInput${num}`,
        label: "Example Input",
        component: "HarnessVueBootstrapInput",
        props: {
          filterType: "internal",
        },
        options: [],
      };

      generatedFilters[`exampleInputTypeahead`] = {
        key: "exampleInputTypeahead",
        label: "Example Typeahead",
        component: "HarnessVueBootstrapInput",
        options: [{ key: "", default: true }, ...searchableOptions],
        props: {
          typeahead: true,
          strict: true,
          type: "text",
          filterType: "internal",
        },
      };

      generatedFilters["exampleMultiselectListbox"] = {
        label: "Example Multiselect Listbox",
        component: "HarnessVueBootstrapMultiselectListbox",
        options: searchableOptions,
        props: {
          multiple: true,
        },
      };

      generatedFilters["exampleMultiselectListboxSearchable"] = {
        label: "Example Multiselect Listbox",
        component: "HarnessVueBootstrapMultiselectListbox",
        options: searchableOptions,
        props: {
          multiple: true,
          searchable: true,
          typeahead: true,
        },
      };

      generatedFilters[`exampleRadioGroup${num}`] = {
        key: `exampleRadioGroup${num}`,
        label: "Example Radio Group",
        component: "HarnessVueBootstrapRadioGroup",
        props: {
          filterType: "radio_group",
        },
        options: [
          {
            key: "exampleOption",
            label: "Example Option",
          },
          {
            key: "exampleOption2",
            label: "Example Option2",
          },
        ],
      };
      generatedFilters[`exampleSelect${num}`] = {
        key: `exampleSelect${num}`,
        label: "Example Select",
        component: "HarnessVueBootstrapSelect",
        props: {
          filterType: "select_group",
        },
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
      };
      generatedFilters[`exampleMultiSelect${num}`] = {
        key: `exampleMultiSelect${num}`,
        label: "Example Multiselect",
        component: "HarnessVueBootstrapSelect",
        props: {
          multiple: true,
          filterType: "internal",
        },
        options: [
          {
            key: "exampleOption",
            label: "Example Option",
          },
          {
            key: "exampleOption2",
            label: "Example Option 2",
            default: true,
          },
          {
            key: "exampleOption3",
            label: "Example Option 3",
            default: true,
          },
        ],
      };
    });
    return generatedFilters;
  };

  charts = function () {
    let range = [...Array(5).keys()];
    let generatedCharts = {};
    range.forEach((num) => {
      generatedCharts[`barChart${num}`] = {
        title: "",
        component: "ChartWithTable",
        props: {
          chartComponent: "barchart",
          tableAdapter: function (chart, filters, data) {
            let map = {
              network: "Transformed network",
              MAU: "Transformed MAU",
            };
            let newData = [];
            data.forEach((datum) => {
              newData.push(
                Object.keys(datum).reduce((acc, key) => {
                  acc[map[key]] =
                    typeof datum[key] === "string"
                      ? datum[key].toUpperCase() + " TRANSFORMED UPPERCASE"
                      : datum[key].toLocaleString();
                  return acc;
                }, {})
              );
            });
            return newData;
          },
          refName: `barChart${num}`,
        },
      };
    });
    generatedCharts.exampleChartWithTable = {
      title: "Example Chart",
      component: "ChartWithTable",
      props: {
        chartComponent: "barchart",
        title: "Example Chart",
        tableAdapter: function (chart, filters, data) {
          let newData = {};
          data.labels.forEach((label, idx) => {
            newData[label] = data.datasets[0].data[idx];
          });
          return [newData];
        },
        refName: "exampleChartWithTable",
      },
    };
    generatedCharts.exampleTable = {
      title: "Example Table",
      component: "DataTable508",
      props: {
        chartComponent: "barchart",
        tableAdapter: function (chart, filters, data) {
          let map = {
            key: "Transformed key",
            key2: "Transformed key 2",
          };
          let newData = [];
          data.forEach((datum) => {
            newData.push(
              Object.keys(datum).reduce((acc, key) => {
                acc[map[key]] =
                  datum[key].toUpperCase() + " TRANSFORMED UPPERCASE";
                return acc;
              }, {})
            );
          });
          return newData.length ? newData : [];
        },
        refName: "exampleTable",
      },
    };
    generatedCharts.exampleTable2 = {
      title: "Example Table 2",
      component: "DataTable508",
      props: {
        chartComponent: "barchart",
        tableAdapter: function (chart, filters, data) {
          let map = {
            key: "Transformed key",
            key2: "Transformed key 2",
          };
          let newData = [];
          data.forEach((datum) => {
            newData.push(
              Object.keys(datum).reduce((acc, key) => {
                acc[map[key]] =
                  datum[key].toUpperCase() + " TRANSFORMED UPPERCASE";
                return acc;
              }, {})
            );
          });
          return newData.length ? newData : [];
        },
        refName: "exampleTable2",
      },
    };
    return generatedCharts;
  };
}
