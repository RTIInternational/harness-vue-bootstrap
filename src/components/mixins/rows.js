/* eslint-disable */
import subset from './subset'
export default {
  mixins: [subset],
  props: {
    columns: {
      type: Number,
      required: false,
      default: 1,
      validator: function (value) {
        return 12 % value === 0
      }
    },
    spread: {
      type: Boolean,
      required: false,
      default: true
    },
    rowClass: {
      type: String,
      required: false,
      default: null
    },
    colClass: {
      type: String,
      required: false,
      default: null
    },
    componentClass: {
      type: String,
      required: false,
      default: null
    },
  },
  methods: {
    rows (set) {
      const items = this.subset(set)
      const itemKeys = Object.keys(items)
      const numItems = itemKeys.length
      const numRows = Math.ceil(numItems / this.columns)
      let rows = [...Array(numRows).keys()]
      for (const row in rows) {
        let rowItems = []
        for (
          let i = row * this.columns;
          i <= row * this.columns + (this.columns - 1);
          i++
        ) {
          if (itemKeys[i]) {
            const itemObj = { ...items[itemKeys[i]] }
            itemObj['key'] = itemKeys[i]
            rowItems.push(itemObj)
          }
        }
        rows[row] = rowItems
      }
      return rows
    },
    colSize (row) {
      let colSize = 12 / this.columns
      if (row.length < this.columns && this.spread) {
        colSize = Math.floor(12 / row.length)
      }
      return colSize
    }
  }
}
