<template>
  <div>
    <div>
      <div class="row py-2">
        <div class="col-sm-3">
          <div class="row form-row">
            <div class="offset-1 col-4">
              <select
                class="form-control harness-vue-bootstrap-interactivetable-select"
                :id="chart.key + 'NumRowsSelect'"
                aria-label="Amount of rows to paginate by"
                v-model="paginationAmount"
              >
                <option
                  v-for="option in numRowOptions"
                  :key="option"
                  :value="option"
                >
                  {{ option }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div class="col-sm-4 offset-sm-5 text-right">
          <div class="row form-row">
            <div class="offset-4 col-8 pr-4">
              <input
                type="text"
                class="form-control harness-vue-bootstrap-interactivetable-text-input"
                :id="chart.key + 'SearchQueryInput'"
                aria-label="Table search"
                v-model="searchText"
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="validatedChartData && validatedChartData.length"
        :id="chart.key + '_data_table'"
        class="harness-vue-bootstrap-interactivetable-datatable"
      >
        <table
          :class="
            'harness-vue-bootstrap-interactivetable-table table ' + tableClass
          "
        >
          <thead :class="headerClass">
            <tr>
              <th
                v-for="(column, idx) in columnHeaders"
                scope="col"
                :key="idx"
                :class="'table-header ' + labelClass"
                @click="setColumnFilter(column)"
              >
                <button
                  class="harness-vue-bootstrap-interactivetable-column-header"
                >
                  {{ column }}
                </button>
                <span
                  v-if="isActiveAndDescending(column)"
                  :class="['activeCol']"
                  >&#9660;</span
                >
                <span v-if="isActiveAndAscending(column)" :class="['activeCol']"
                  >&#9650;</span
                >
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(row, idx) in validatedChartData"
              :key="idx"
              :class="rowClass"
            >
              <template v-for="(column, idx2) in columnHeaders">
                <th
                  v-if="idx2 === 0 && rowHeaderCol"
                  :key="idx2"
                  :class="cellClass"
                  v-html="row[column]"
                  scope="row"
                />
                <td
                  v-else
                  :key="`${idx2}-else`"
                  :class="cellClass"
                  v-html="row[column]"
                />
              </template>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-2 text-center">
        <nav
          aria-label="Table pagination navigation"
          class="navigation text-center harness-vue-bootstrap-interactivetable-pagination-navigation"
        >
          <ul
            class="pagination harness-vue-bootstrap-interactivetable-pagination"
          >
            <li
              :class="`page-link ${pageNumber <= 1 ? 'disabled' : ''}`"
              @click="setPageNum(1)"
            >
              <i class="bi-chevron-double-left"></i>
            </li>
            <li
              :class="`page-link ${pageNumber <= 1 ? 'disabled' : ''}`"
              @click="pageNumber != 1 ? setPageNum(pageNumber - 1) : ''"
            >
              <i class="bi-chevron-left"></i>
            </li>
            <li
              v-for="index in paginationOptions"
              :key="index"
              :class="[
                'page-item',
                'harness-vue-bootstrap-interactivetable-pagination-pageitem',
                index === pageNumber ? ' active' : '',
              ]"
            >
              <button :class="'page-link'" @click="setPageNum(index)">
                {{ index }}
              </button>
            </li>
            <li
              :class="`page-link ${pageNumber <= 1 ? 'disabled' : ''}`"
              @click="
                pageNumber < numberOfPages.length
                  ? setPageNum(pageNumber + 1)
                  : ''
              "
            >
              <i class="bi-chevron-right"></i>
            </li>
            <li
              :class="`page-link ${pageNumber <= 1 ? 'disabled' : ''}`"
              @click="setPageNum(numberOfPages.length)"
            >
              <i class="bi-chevron-double-right"></i>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
import tables from "./mixins/tables";
export default {
  name: "InteractiveTable",
  mixins: [tables],
  props: {
    local: {
      type: Object,
      required: false,
      default: () => {},
    },
    numRowOptions: {
      type: Array,
      required: true,
    },
    defaultSortColumn: {
      type: String,
      required: true,
    },
    defaultSortOrder: {
      type: String,
      required: false,
      default: "asc",
      validator: function (value) {
        return ["asc", "desc"].includes(value);
      },
    },
    numPaginationOptions: {
      type: Number,
      required: false,
      default: 5,
    },
  },
  data() {
    return {
      sortedDescending: this.defaultSortOrder === "desc",
      pageNumber: 1,
      searchQuery: "",
      columnSelector: this.defaultSortColumn,
      columnSort: this.defaultSortOrder,
      paginationAmount: 5,
    };
  },
  methods: {
    setColumnFilter(columnName) {
      if (columnName === this.columnSelector) {
        this.sortedDescending = !this.sortedDescending;
      }
      this.columnSelector = columnName;
      this.columnSort = this.sortedDescending ? "desc" : "asc";
      if (this.tableOptions.length) {
        this.setFilter(this.chart.key + "TableOptions", [
          {
            pageNumber: this.pageNumber,
            searchQuery: this.searchQuery,
            columnSelector: this.columnSelector,
            columnSort: this.sortedDescending ? "desc" : "asc",
            paginationAmount: this.paginationAmount,
            numberOfPages: this.numberOfPages,
          },
        ]);
      }
      if (!this.isSearchable || !this.isSortable || !this.isPaginated) {
        this.loadData();
      }
    },
    setPageNum(index) {
      this.pageNumber = index;
      if (this.tableOptions.length) {
        this.setFilter(this.chart.key + "TableOptions", {
          pageNumber: this.pageNumber,
          searchQuery: this.searchQuery,
          columnSelector: this.columnSelector,
          columnSort: this.columnSort,
          paginationAmount: this.paginationAmount,
          numberOfPages: this.numberOfPages,
        });
      }
      if (!this.isSearchable || !this.isSortable || !this.isPaginated) {
        this.loadData();
      }
    },
    isActiveAndDescending(columnName) {
      return this.columnSort === "desc" && this.columnSelector === columnName;
    },
    isActiveAndAscending(columnName) {
      return this.columnSort === "asc" && this.columnSelector === columnName;
    },
  },
  computed: {
    tableOptions() {
      let filters = [];
      if (Object.keys(this.filters).includes(this.chart.key + "TableOptions")) {
        filters = this.getOptionsForFilter(this.chart.key + "TableOptions");
      }
      return filters;
    },
    tableAdaptedData() {
      let filteredData = this.getChartData(this.chart.key) || null;
      let tableAdapter =
        this.getChartProps(this.chart.key).tableAdapter || null;
      if (filteredData && tableAdapter) {
        try {
          filteredData = tableAdapter(this.chart, this.filters, filteredData);
        } catch (error) {
          throw String(
            "There was an error in the formatted text from your tableAdapter function: " +
              String(error)
          );
        }
      }
      return filteredData;
    },
    chartData() {
      let filteredData = this.tableAdaptedData;
      if (filteredData) {
        // searching
        if (this.isSearchable) {
          filteredData = filteredData.filter((row) => {
            return Object.values(row).reduce((acc, cell) => {
              if (!acc) {
                if (cell) {
                  return cell
                    .toLowerCase()
                    .includes(this.searchQuery.toLowerCase());
                }
                return false;
              }
              return acc;
            }, false);
          });
        }
        // sorting
        if (this.isSortable) {
          if (this.columnSort === "asc") {
            filteredData = filteredData.sort((a, b) => {
              return a[this.columnSelector]
                .toString()
                .localeCompare(b[this.columnSelector], "en", {
                  sensitivity: "base",
                });
            });
          } else if (this.columnSort === "desc") {
            filteredData = filteredData.sort((a, b) => {
              return b[this.columnSelector]
                .toString()
                .localeCompare(a[this.columnSelector], "en", {
                  sensitivity: "base",
                });
            });
          }
        }
        // pagination
        if (this.isPaginated) {
          let currentPageNum = this.pageNumber;
          let tableRows = filteredData.length;
          let rowsPerPage = parseInt(this.paginationAmount);
          let lastVisibleRow =
            currentPageNum * rowsPerPage > tableRows
              ? tableRows
              : currentPageNum * rowsPerPage;
          let firstVisibleRow = (currentPageNum - 1) * rowsPerPage;
          filteredData = filteredData.slice(firstVisibleRow, lastVisibleRow);
        }
        return filteredData;
      }
      return filteredData;
    },
    isSearchable() {
      if (this.local) {
        return (
          !Object.keys(this.local).includes("search") ||
          (Object.keys(this.local).includes("search") &&
            this.local.search !== false)
        );
      }
      return true;
    },
    isSortable() {
      if (this.local) {
        return (
          !Object.keys(this.local).includes("sort") ||
          (Object.keys(this.local).includes("sort") &&
            this.local.sort !== false)
        );
      }
      return true;
    },
    isPaginated() {
      if (this.local) {
        return (
          !Object.keys(this.local).includes("paginate") ||
          (Object.keys(this.local).includes("paginate") &&
            this.local.paginate !== false)
        );
      }
      return true;
    },
    numberOfPages() {
      let filteredData = this.tableAdaptedData;
      // searching
      if (filteredData) {
        filteredData = filteredData.filter((row) => {
          return Object.values(row).reduce((acc, cell) => {
            if (!acc) {
              if (cell) {
                return cell
                  .toLowerCase()
                  .includes(this.searchQuery.toLowerCase());
              }
              return false;
            }
            return acc;
          }, false);
        });
      }
      let pageRange = [1];
      let rowsPerPage = parseInt(this.paginationAmount);
      let totalRows = this.validateChartData(filteredData, this.chart.key)
        ? this.validateChartData(filteredData, this.chart.key).length
        : 0;
      let numPages = Math.ceil(totalRows / rowsPerPage);
      for (let i = 2; i <= numPages; i++) {
        pageRange.push(i);
      }
      return pageRange;
    },
    searchText: {
      get() {
        return this.searchQuery;
      },
      set(value) {
        this.searchQuery = value;
        this.pageNumber = 1;
        if (this.tableOptions.length) {
          this.setFilter(this.chart.key + "TableOptions", {
            pageNumber: this.pageNumber,
            searchQuery: this.searchQuery,
            columnSelector: this.columnSelector,
            columnSort: this.columnSort,
            paginationAmount: this.paginationAmount,
            numberOfPages: this.numberOfPages,
          });
        }
        if (!this.isSearchable || !this.isSortable || !this.isPaginated) {
          this.loadData();
        }
      },
    },
    paginationOptions() {
      if (this.pageNumber <= this.numPaginationOptions) {
        return this.numberOfPages.slice(0, this.numPaginationOptions);
      } else {
        return this.numberOfPages.slice(
          this.pageNumber - this.numPaginationOptions,
          this.pageNumber
        );
      }
    },
  },
  beforeUpdate() {
    if (this.pageNumber > this.numberOfPages.length) {
      this.pageNumber = 1;
      if (this.tableOptions.length) {
        this.setFilter(this.chart.key + "TableOptions", {
          pageNumber: this.pageNumber,
          searchQuery: this.searchQuery,
          columnSelector: this.columnSelector,
          columnSort: this.columnSort,
          paginationAmount: this.paginationAmount,
          numberOfPages: this.numberOfPages,
        });
      }
      this.loadData();
    }
  },
};
</script>
<style scoped>
.harness-vue-bootstrap-interactivetable-column-header {
  background-color: inherit;
  border: none;
}
.harness-vue-bootstrap-interactivetable-column-header:focus,
.harness-vue-bootstrap-interactivetable-column-header:hover {
  outline: none;
  border-bottom: 2px solid gray;
}
</style>
