export default {
    title: 'Harness Vue Bootstrap',
    description: '',
    themeConfig: {
        sidebar: [
            {
                text: 'Introduction',
                collapsible: true,
                items: [
                    {text: 'About', link: '/introduction/'},
                    {text: 'Getting Started', link: '/introduction/getting-started'},
                    {text: 'Usage', link: '/introduction/usage'}
                ]
            },
            {
                text: 'Layouts',
                collapsible: true,
                items: [
                    {text:'Filter Grid', link: '/components/layouts/filterGrid'},
                    {text:'Filter Picker', link: '/components/layouts/filterPicker'},
                    {text:'Filter Accordion', link: '/components/layouts/filterAccordion'},
                    {text:'Chart Grid', link: '/components/layouts/chartGrid'},
                ]
            },
            {
                text: 'Filters',
                collapsible: true,
                items: [
                    {text: 'Input', link: '/components/filters/input'},
                    {text: 'Select', link: '/components/filters/select'},
                    {text: 'Radio Group', link: '/components/filters/radioGroup'},
                    {text: 'Checkbox Group', link: '/components/filters/checkboxGroup'},
                    {text: 'Multi-Select Listbox', link: '/components/filters/multiselectListbox'},
                ]
            },
            {
                text: 'Charts and Tables',
                collapsible: true,
                items: [
                    {text: 'Datatable 508', link: '/components/charts-and-tables/dataTable508'},
                    {text: 'Interactive Table', link: '/components/charts-and-tables/interactiveTable'},
                    {text: 'Chart with Table', link: '/components/charts-and-tables/chartWithTable'}
                ]
            }
        ]
    }
  }