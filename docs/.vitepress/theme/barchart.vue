<template>
    <div>
        ![Chart Placeholder Image](./chart.png)
        <img src="/chart.png" />
    </div>    
</template>
<script>
    export default {
        name: 'barchart',
        props: {
            chart: {
                required: true,
                type: Object
            }
        }
    }
</script>