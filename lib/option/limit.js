'use strict';

const lo = require('lodash');

const assert = require('../util/assert');

/**
 * @dev set a limit to number of records fetched
 * @param  {...any} args Array of arguments
 * @returns {ThisParameterType} `this` argument
 */
function limit(...args) {
  while (Array.isArray(args[0])) args = lo.flatten(args);
  assert.type('limit', args[0], 'number');
  this.option.limit = args[0];
  return this;
}

module.exports = limit;
