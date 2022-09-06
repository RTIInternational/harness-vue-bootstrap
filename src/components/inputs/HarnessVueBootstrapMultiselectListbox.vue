<template>
  <div>
    <label
      class="harness-ui-select-label harness-ui-multiselect-listbox-top-label"
      >{{ this.filter.label }}</label
    >
    <div class="row" v-if="searchable">
      <div class="col">
        <input
          type="text"
          :id="`harness-ui-multiselect-listbox-search-${filter.key}`"
          class="form-control harness-ui-input harness-ui-multiselect-listbox-search-input"
          :disabled="searchDisabled"
          v-model="search"
        />
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-5">
        <label
          class="col-form-label harness-ui-select-label harness-ui-multiselect-listbox-select-label harness-ui-select-label-vertical"
          >Options</label
        >
        <select
          class="form-control harness-ui-select harness-ui-multiselect-listbox-select harness-ui-multiselect-listbox-select-left"
          multiple="true"
          v-model="leftBox"
        >
          <option
            v-for="option in leftBoxOptions"
            :key="option.key"
            :value="option.key"
            :title="option.label"
          >
            {{ option.label }}
          </option>
        </select>
      </div>
      <div class="col-2">
        <div class="text-center">
          <button class="btn btn-xs" @click="rightToLeft">
            <i class="bi bi-caret-left-fill"></i>
          </button>
          <button class="btn btn-xs" @click="leftToRight">
            <i class="bi bi-caret-right-fill"></i>
          </button>
        </div>
      </div>
      <div class="col-5">
        <label
          class="col-form-label harness-ui-select-label harness-ui-multiselect-listbox-select-label harness-ui-select-label-vertical"
          >Selected</label
        >
        <select
          class="form-control harness-ui-select harness-ui-multiselect-listbox-select harness-ui-multiselect-listbox-select-right"
          multiple="true"
          v-model="rightBox"
        >
          <option
            v-for="option in rightBoxOptions"
            :key="option.key"
            :value="option.key"
            :title="option.label"
          >
            {{ option.label }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>
<script>
import inputProps from "../mixins/inputProps";
import inputFilter from "../mixins/inputFilter";
import jquery from "jquery";
export default {
  name: "HarnessVueBootstrapMultiselectListbox",
  mixins: [inputProps, inputFilter],
  props: {
    searchable: {
      type: Boolean,
      required: false,
      default: false,
    },
    typeahead: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      bloodhound: null,
      leftBox: [],
      rightBox: [],
      search: "",
      searchDisabled: false,
    };
  },
  computed: {
    leftBoxOptions() {
      return this.unselectedOptions.filter(
        (f) =>
          this.search === "" ||
          f.label.toLowerCase().includes(this.search.toLowerCase())
      );
    },
    rightBoxOptions() {
      return this.getOptionsForFilter(this.filter.key).filter((f) =>
        this.getFilter(this.filter.key).includes(f.key)
      );
    },
    unselectedOptions() {
      return this.getOptionsForFilter(this.filter.key).filter(
        (f) => !this.getFilter(this.filter.key).includes(f.key)
      );
    },
  },
  methods: {
    leftToRight() {
      const newVal = this.getFilter(this.filter.key).concat(this.leftBox);
      this.setFilterLoadData(this.filter.key, newVal);
      this.lifecycleBloodhound();
    },
    rightToLeft() {
      const newVal = this.getFilter(this.filter.key).filter(
        (f) => !this.rightBox.includes(f)
      );
      this.setFilterLoadData(this.filter.key, newVal);
      this.lifecycleBloodhound();
    },
    lifecycleBloodhound() {
      if (this.bloodhound) {
        this.bloodhound.clear();
        if (this.unselectedOptions.length) {
          this.searchDisabled = false;
          this.bloodhound.add(this.unselectedOptions.map((f) => f.label));
        } else {
          this.searchDisabled = true;
        }
      }
    },
    initTypeahead() {
      // lazy-loading corejs
      window.$ = window.jQuery = jquery;
      const Bloodhound = require("corejs-typeahead");
      // create Bloodhound instance with flattened/tokenized list of option labels
      this.bloodhound = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.ngram,
        queryTokenizer: Bloodhound.tokenizers.ngram,
        local: this.leftBoxOptions.map((f) => f.label),
      });

      const classnames = [
        "input",
        "hint",
        "menu",
        "dataset",
        "suggestion",
        "empty",
        "open",
        "cursor",
        "highlight",
      ].reduce((acc, cn) => {
        acc[cn] = `harness-ui-multiselect-listbox-typeahead-${cn}`;
        return acc;
      }, {});

      // instantiate typeahead
      window
        .$(`#harness-ui-multiselect-listbox-search-${this.filter.key}`)
        .typeahead(
          {
            highlight: true,
            minLength: 1,
            classNames: classnames,
          },
          {
            name: this.filter.key,
            limit: 10,
            source: this.bloodhound,
          }
        )
        .bind("typeahead:select", (ev, selection) => {
          this.search = selection;
        })
        .bind("typeahead:autocomplete", (ev, selection) => {
          this.search = selection;
        });
    },
  },
  mounted() {
    if (this.searchable && this.typeahead) {
      this.initTypeahead();
    }
  },
};
</script>
<style>
.harness-ui-multiselect-listbox-typeahead-input {
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  width: 100%;
}

.harness-ui-multiselect-listbox-typeahead-hint {
  color: #999;
}

.harness-ui-multiselect-listbox-typeahead-menu {
  max-width: 100%;
  margin-top: 5px;
  padding: 5px 0;
  background-color: white;
  border: 1px solid black;
  border: 1px solid rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
}

.harness-ui-multiselect-listbox-typeahead-suggestion {
  padding: 5px 10px;
}

.harness-ui-multiselect-listbox-typeahead-suggestion.harness-ui-multiselect-listbox-typeahead-cursor {
  color: #fff;
  background-color: #0097cf;
}
.harness-ui-multiselect-listbox-typeahead-suggestion p {
  margin: 0;
}
.twitter-typeahead {
  width: 100%;
}

.harness-ui-multiselect-listbox-select-label {
  font-size: 80% !important;
}
</style>
