'use strict';

const lo = require('lodash');

const assert = require('../util/assert');

/**
 * @dev check value in `path` is not equal to any of the specified values
 * @param  {...any} args Array of arguments
 * @returns {ThisParameterType} `this` argument
 */
function nin(...args) {
  while (Array.isArray(args[0])) args = lo.flatten(args);
  const value = Array.isArray(args[1]) ? args[1] : args.slice(1, args.length);
  assert.type('path', args[0], 'string');
  if (Array.isArray(this.filter)) {
    const compiled = {};
    compiled[args[0]] = { $nin: value };
    this.filter.push(compiled);
  } else {
    this.filter[args[0]] = { $nin: value };
  }
  return this;
}

module.exports = nin;
