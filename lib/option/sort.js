'use strict';

const lo = require('lodash');

const assert = require('../util/assert');

/**
 * @dev set a sorting mechanism
 * @param  {...any} args Array of arguments
 * @returns {ThisParameterType} `this` argument
 */
function sort(...args) {
  while (Array.isArray(args[0])) args = lo.flatten(args);
  assert.value('order', args[0], ['asc', 'desc'], true);
  const sort = args[0];
  args = args.slice(1, args.length);
  let i = 0;
  for (; i < args.length; i++) {
    assert.type('path', args[i], 'string');
  }
  if (sort === 'desc') {
    i = 0;
    for (; i < args.length; i++) {
      lo.set(this.option, `sort.${args[i]}`, -1);
    }
  } else {
    i = 0;
    for (; i < args.length; i++) {
      lo.set(this.option, `sort.${args[i]}`, 1);
    }
  }
  return this;
}

module.exports = sort;
