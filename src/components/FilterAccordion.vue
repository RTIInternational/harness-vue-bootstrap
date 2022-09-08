<template>
  <div class="row">
    <div class="accordion col-12" id="filters-accordion">
      <div
        class="card"
        v-for="(filterType, key) in filterTypes"
        :id="filterType + '-card'"
        :key="key"
      >
        <div
          class="card-header"
          :id="filterType + '-heading'"
          @click="toggle"
          data-toggle="collapse"
          :data-target="'#collapse-' + filterType"
        >
          <h2 class="mb-0">
            <div class="row">
              <div class="col-6" :id="filterType + '-col1'">
                <i
                  :class="
                    'bi bi-ui-checks ' +
                    (dirtyFilterString(filterType).length ? 'active' : '')
                  "
                  :id="filterType + '-checks'"
                />
                <button
                  class="btn btn-link"
                  :id="filterType + '-button'"
                  type="button"
                  aria-expanded="false"
                  :aria-controls="'collapse-' + filterType"
                >
                  {{ filterMapping(filterType) }}
                </button>
                <small
                  v-if="dirtyFilterString(filterType).length"
                  :id="filterType + '-small'"
                >
                  {{ dirtyFilterString(filterType) }}
                </small>
              </div>
              <div class="col-6 text-right" :id="filterType + '-col2'">
                <button
                  class="btn btn-link text-right"
                  :id="filterType + '-collapsebutton'"
                  @click="toggle"
                >
                  <i
                    class="bi bi-caret-down-square"
                    :id="filterType + '-icon'"
                    @click="toggle"
                  />
                </button>
              </div>
            </div>
          </h2>
        </div>
        <div
          :id="'collapse-' + filterType"
          class="collapse"
          :aria-labelledby="filterType + '-heading'"
          data-parent="#filters-accordion"
        >
          <div class="card-body">
            <FilterGrid
              :columns="filterGridLayout(filterType).columns"
              :label-position="filterGridLayout(filterType).labelPosition"
              :spread="filterGridLayout(filterType).spread"
              :only="subsetFiltersByType(filterType)"
              :clear-button="false"
            />
            <div
              class="row button-row harness-vue-bootstrap-filtergrid-row harness-vue-bootstrap-filtergrid-buttonrow"
            >
              <div class="col-md-12 text-center">
                <button
                  class="btn btn-primary btn-sm harness-vue-bootstrap-filtergrid-clearbutton"
                  role="button"
                  @click="clearFilterTypeFilters(filterType)"
                >
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FiltersAccordion",
  props: {
    validFilters: {
      type: Array,
      required: true,
    },
    mappingFunction: {
      type: Function,
      required: false,
    },
    filterLayout: {
      type: Object,
      required: false,
    },
  },
  computed: {
    filterTypes() {
      return Object.keys(this.filters).reduce((acc, filter) => {
        filter = this.filters[filter];
        if (
          filter.props &&
          !acc.includes(filter.props.filterType) &&
          filter.props.filterType !== "internal" &&
          filter.props.filterType
        ) {
          acc.push(filter.props.filterType);
        }
        return acc;
      }, []);
    },
  },
  methods: {
    subsetFiltersByType(type) {
      return Object.keys(this.filters).filter(
        function (filter) {
          if (this.filters[filter].props) {
            return (
              this.filters[filter].props.filterType === type &&
              this.validFilters.includes(filter)
            );
          }
        }.bind(this)
      );
    },
    filterMapping(filterType) {
      if (!this.mappingFunction) {
        return `${filterType.replace("_", " ")}s`;
      }
      return this.mappingFunction(filterType);
    },
    // syncs the bootstrap collapse lifecycle with icons
    toggle(event) {
      event.preventDefault();
      let filterType = event.target.id.split("-")[0];

      // get icon
      let icon = document.getElementById(filterType + "-icon");
      // if icon is down, then we are opening this panel
      if (icon.classList.contains("bi-caret-down-square")) {
        // change from "down" to "up"
        icon.classList.remove("bi-caret-down-square");
        icon.classList.add("bi-caret-up-square");
        // ensure that all other icons are "down"
        this.filterTypes
          .filter((fType) => fType !== filterType)
          .forEach((fType) => {
            let icon = document.getElementById(fType + "-icon");
            if (icon.classList.contains("bi-caret-up-square")) {
              icon.classList.remove("bi-caret-up-square");
              icon.classList.add("bi-caret-down-square");
            }
          });
        // we are closing the only open panel
      } else if (icon.classList.contains("bi-caret-up-square")) {
        let icon = document.getElementById(filterType + "-icon");
        icon.classList.remove("bi-caret-up-square");
        icon.classList.add("bi-caret-down-square");
      }
    },
    dirtyFilterString(filterType) {
      return this.subsetFiltersByType(filterType)
        .filter((f) => this.isFilterDirty(f))
        .map((f) => this.getLabel(f))
        .join(", ");
    },
    clearFilterTypeFilters(filterType) {
      let filters = this.subsetFiltersByType(filterType);
      this.initializeDefaults(filters);
      this.loadData();
    },
    filterGridLayout(filterType) {
      if (!this.filterLayout) {
        return {
          columns: 4,
          labelPosition: "vertical",
          spread: true,
        };
      }
      return this.filterLayout[filterType];
    },
  },
};
</script>
