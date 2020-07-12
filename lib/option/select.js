'use strict';

const lo = require('lodash');

const assert = require('../util/assert');

/**
 * @dev select / deselct fields
 * @param  {...any} args Array of arguments
 * @returns {ThisParameterType} `this` argument
 */
function select(...args) {
  while (Array.isArray(args[0])) args = lo.flatten(args);
  assert.type('select', args[0], 'boolean');
  const select = args[0];
  args = args.slice(1, args.length);
  let i = 0;
  for (; i < args.length; i++) {
    assert.type('path', args[i], 'string');
  }
  if (select) {
    i = 0;
    for (; i < args.length; i++) {
      lo.set(this.option, `projection.${args[i]}`, 1);
    }
  } else {
    i = 0;
    for (; i < args.length; i++) {
      lo.set(this.option, `projection.${args[i]}`, 0);
    }
  }
  return this;
}

module.exports = select;
