const assert = require('../util/assert');

const definitions = {
  limit: {
    alias: ['limit'],
    _sym: Symbol.for('limit')
  },
  offset: {
    alias: ['offset', 'skip'],
    _sym: Symbol.for('offset')
  },
  sort: {
    alias: ['sort'],
    _sym: Symbol.for('sort')
  },
  select: {
    alias: ['select'],
    _sym: Symbol.for('select')
  }
};

let types = [], mapping = {};

Object.keys(definitions).forEach((def) => {
  types = types.concat(definitions[def].alias);
  definitions[def].alias.forEach((_alias) => mapping[_alias] = definitions[def]._sym);
});

/**
 * @dev get Symbol for type
 * @param {string} type
 * @returns {Symbol} throws `AssertionError` when no matches found
 */
function getSym(type) {
  assert.type('type', type, 'string');
  type = type.toLowerCase();
  assert.value('type', type, types, true);
  return mapping[type];
}

module.exports = {
  definitions, mapping,
  getSym
};