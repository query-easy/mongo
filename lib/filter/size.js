'use strict';

const lo = require('lodash');

const assert = require('../util/assert');

/**
 * @dev check value in `path` has array size equal to specified value
 * @param  {...any} args Array of arguments
 * @returns {ThisParameterType} `this` argument
 */
function size(...args) {
  while (Array.isArray(args[0])) args = lo.flatten(args);
  assert.type('path', args[0], 'string');
  assert.type('size', args[1], 'number');
  if (Array.isArray(this.filter)) {
    const compiled = {};
    compiled[args[0]] = { $size: args[1] };
    this.filter.push(compiled);
  } else {
    this.filter[args[0]] = { $size: args[1] };
  }
  return this;
}

module.exports = size;
