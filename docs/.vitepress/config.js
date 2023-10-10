export default {
    title: 'Harness-Vue-Bootstrap',
    description: '',
    themeConfig: {
        sidebar: [
            {
                text: 'Introduction',
                collapsible: true,
                items: [
                    {text: 'About', link: '/introduction/'},
                    {text: 'Usage', link: '/introduction/usage'}
                ]
            },
            {
                text: 'Layouts',
                collapsible: true,
                items: [
                    {text:'Filter Grid', link: '/components/layouts/filterGrid'},
                    {text:'Chart Grid', link: '/components/layouts/chartGrid'},
                ]
            },
            {
                text: 'Filters',
                collapsible: true,
                items: [
                    {text: 'Input', link: '/components/filters/input'},
                    {text: 'Select', link: '/components/filters/select'},
                    {text: 'Checkbox Group', link: '/components/filters/checkboxGroup'},
                    {text: 'Multi-Select Listbox', link: '/components/filters/multiselectListbox'},
                    {text: 'Validation, Styling, Accessibility', link: '/components/filters/validationAndStyling'},
                ]
            },
            {
                text: 'Charts and Tables',
                collapsible: true,
                items: [
                    {text: 'Basic Table', link: '/components/charts-and-tables/basicTable'},
                    {text: 'Chart with Table', link: '/components/charts-and-tables/chartWithTable'}
                ]
            }
        ],
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Built by <span class="vp-doc"><a href="https://www.rti.org">RTI International</a></span> Center for Data Science'
        },
        nav: [
            { text: 'Guide', link: '/introduction/' },
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/RTIInternational/harness-vue-bootstrap' }
        ]
    }
  }