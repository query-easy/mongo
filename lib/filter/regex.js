'use strict';

const lo = require('lodash');

const assert = require('../util/assert');

/**
 * @dev check value in `path` is follows specified regular expression
 * @param  {...any} args Array of arguments
 * @returns {ThisParameterType} `this` argument
 */
function regex(...args) {
  while (Array.isArray(args[0])) args = lo.flatten(args);
  assert.type('path', args[0], 'string');
  assert.type('regex', args[1], 'regexp');
  if (Array.isArray(this.filter)) {
    const compiled = {};
    compiled[args[0]] = { $regex: args[1] };
    this.filter.push(compiled);
  } else {
    this.filter[args[0]] = { $regex: args[1] };
  }
  return this;
}

module.exports = regex;
