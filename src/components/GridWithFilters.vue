<template>
  <div>
    <h1 class="display-4">{{ page.title }}</h1>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header">Filters</div>
          <div class="card-body">
            <FilterGrid />
          </div>
        </div>
      </div>
    </div>
    <ChartGrid :columns="columns" />
  </div>
</template>

<script>
export default {
  name: "GridWithFilters",
  props: ["columns"],
};
</script>
