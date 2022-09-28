<template>
    <div>
        {{chart.key}}
        <Bar 
            :chart-data="getChartData(chart.key)"
            :chart-options="{responsive: true}"
        />
    </div>    
</template>
<script>
    import { Bar } from 'vue-chartjs'
    import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
    ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
    
    export default {
        name: 'barchart',
        components: {Bar},
        props: {
            chart: {
                required: true,
                type: Object
            }
        }
    }
</script>