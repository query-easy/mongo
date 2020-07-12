'use strict';

const lo = require('lodash');

const assert = require('../util/assert');

/**
 * @dev check type of value in `path` is equal to specified `mongo bson type`
 * @param  {...any} args Array of arguments
 * @returns {ThisParameterType} `this` argument
 */
function type(...args) {
  while (Array.isArray(args[0])) args = lo.flatten(args);
  assert.type('path', args[0], 'string');
  assert.type('bson type', args[1], 'string');
  if (Array.isArray(this.filter)) {
    const compiled = {};
    compiled[args[0]] = { $type: args[1] };
    this.filter.push(compiled);
  } else {
    this.filter[args[0]] = { $type: args[1] };
  }
  return this;
}

module.exports = type;
