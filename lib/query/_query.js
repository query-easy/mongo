const assert = require('../util/assert');

const filterDef = require('../filter/_condition').definitions;
const optionDef = require('../option/_type').definitions;

const definitions = {
  filter: { _sym: Symbol.for('filter') },
  option: { _sym: Symbol.for('option') }
};

const queries = {
  filter: [],
  option: []
};

Object.keys(filterDef).forEach((def) => {
  queries.filter = queries.filter.concat(filterDef[def].alias);
});

Object.keys(optionDef).forEach((def) => {
  queries.option = queries.option.concat(optionDef[def].alias);
});

/**
 * @dev get Symbol for query
 * @param {string} query
 * @returns {Symbol} throws `AssertionError` when no matches found
 */
function getSym(query) {
  if (queries.filter.includes(query)) {
    return definitions.filter._sym;
  } else if (queries.option.includes(query)) {
    return definitions.option._sym;
  } else {
    assert.value('query', query, [...queries.filter].concat([...queries.option]), true);
    return;
  }
}

module.exports = {
  definitions,
  getSym
};
