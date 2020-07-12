const assert = require('../util/assert');

const definitions = {
  eq: {
    alias: ['eq', '='],
    _sym: Symbol.for('eq')
  },
  neq: {
    alias: ['neq', '<>', '!='],
    _sym: Symbol.for('neq')
  },
  lt: {
    alias: ['lt', '<'],
    _sym: Symbol.for('lt')
  },
  gt: {
    alias: ['gt', '>'],
    _sym: Symbol.for('gt')
  },
  lte: {
    alias: ['lte', '<='],
    _sym: Symbol.for('lte')
  },
  gte: {
    alias: ['gte', '>='],
    _sym: Symbol.for('gte')
  },
  regex: {
    alias: ['regex'],
    _sym: Symbol.for('regex')
  },
  exists: {
    alias: ['exists'],
    _sym: Symbol.for('exists')
  },
  type: {
    alias: ['type'],
    _sym: Symbol.for('type')
  },
  in: {
    alias: ['in'],
    _sym: Symbol.for('in')
  },
  nin: {
    alias: ['nin', 'notin'],
    _sym: Symbol.for('nin')
  },
  all: {
    alias: ['all'],
    _sym: Symbol.for('all')
  },
  size: {
    alias: ['size'],
    _sym: Symbol.for('size')
  },
  not: {
    alias: ['not'],
    _sym: Symbol.for('not')
  },
  and: {
    alias: ['and', '&&'],
    _sym: Symbol.for('and')
  },
  or: {
    alias: ['or', '||'],
    _sym: Symbol.for('or')
  },
  nor: {
    alias: ['nor'],
    _sym: Symbol.for('nor')
  }
};

let conditions = [], mapping = {};

Object.keys(definitions).forEach((def) => {
  conditions = conditions.concat(definitions[def].alias);
  definitions[def].alias.forEach((_alias) => mapping[_alias] = definitions[def]._sym);
});

/**
 * @dev get Symbol for condition
 * @param {string} condition
 * @returns {Symbol} throws `AssertionError` when no matches found
 */
function getSym(condition) {
  assert.type('condition', condition, 'string');
  condition = condition.toLowerCase();
  assert.value('condition', condition, conditions, true);
  return mapping[condition];
}

module.exports = {
  definitions, mapping,
  getSym
};