'use strict';

const lo = require('lodash');

const assert = require('../util/assert');

/**
 * @dev set a offset after which records should be fetched
 * @param  {...any} args Array of arguments
 * @returns {ThisParameterType} `this` argument
 */
function offset(...args) {
  while (Array.isArray(args[0])) args = lo.flatten(args);
  assert.type('offset', args[0], 'number');
  this.option.skip = args[0];
  return this;
}

module.exports = offset;
