/**
 * Description
 * @param {Object} props the props object
 * @param {Object} set a set of filters/charts
 * @returns {Object} a subset of filters/charts based on the only/except syntax
 */
export function subset(props, set) {
  if (props.only || props.except) {
    let charts = Object.keys(set)
      .filter((key) =>
        props.only ? props.only.includes(key) : !props.except.includes(key),
      )
      .reduce((obj, key) => {
        obj[key] = set[key];
        return obj;
      }, {});
    if (props.orderByOnly && !props.except) {
      let newChartsObj = {};
      props.only.forEach((chartKey) => {
        newChartsObj[chartKey] = charts[chartKey];
      });
      charts = newChartsObj;
    }
    return charts;
  }
  return set;
}

/**
 * For a given set of filters or charts, separate them into rows based on the columns prop
 * @param {Object} props the props object
 * @param {Object} set a set of filters or charts
 * @returns {Object} key/value pairs of indexes and rows
 */
export function rows(props, set) {
  const items = subset(props, set);
  const itemKeys = Object.keys(items);
  const numItems = itemKeys.length;
  const numRows = Math.ceil(numItems / props.columns);
  let rows = [...Array(numRows).keys()];
  for (const row in rows) {
    let rowItems = [];
    for (
      let i = row * props.columns;
      i <= row * props.columns + (props.columns - 1);
      i++
    ) {
      if (itemKeys[i]) {
        const itemObj = { ...items[itemKeys[i]] };
        itemObj["key"] = itemKeys[i];
        rowItems.push(itemObj);
      }
    }
    rows[row] = rowItems;
  }
  return rows;
}

/**
 * For a given number of rows, calculate the appropriate column size
 * @param {Int} row
 * @returns {Int} column size
 */
export function colSize(row) {
  let colSize = 12 / this.columns;
  if (row.length < this.columns && this.spread) {
    colSize = Math.floor(12 / row.length);
  }
  return colSize;
}

export const gridProps = {
  columns: {
    type: Number,
    required: false,
    default: 1,
    validator: function (value) {
      return 12 % value === 0;
    },
  },
  spread: {
    type: Boolean,
    required: false,
    default: true,
  },
  rowClass: {
    type: String,
    required: false,
    default: null,
  },
  colClass: {
    type: String,
    required: false,
    default: null,
  },
  componentClass: {
    type: String,
    required: false,
    default: null,
  },
};
