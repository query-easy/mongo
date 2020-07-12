'use strict';

const assert = require('assert').strict;
const kindof = require('kindof');

/**
 * @dev Assert type of variable
 * @param {string} variable name of variable
 * @param {any} val value to be tested
 * @param {string} type type of value
 * @returns {undefined} throws `AssertionError` if type does not match
 */
function type(variable, val, type) {
  return assert.equal(
    kindof(val),
    type,
    `"${variable}" should be of type "${type}"`
  );
}

/**
 * @dev Assert that 2 values are equal
 * @param {string} variable name of variable
 * @param {any} val value to be tested
 * @param {Array<any> | any} lookup Check against array of values or single value
 * @param {boolean=} arrayCheck Check against a value in array of `lookup` values
 * @returns {undefined} throws `AssertionError` if type does not match
 */
function value(variable, val, lookup, arrayCheck = false) {
  if (arrayCheck) {
    type('lookup', lookup, 'array');
    let i = 0, n = lookup.length, found = false;
    for (; i < n && !found; i++) {
      try {
        assert.deepStrictEqual(val, lookup[i]);
        found = true;
      } catch (err) {
        // empty
      }
    }
    if (found)
      return;
    else
      throw new assert.AssertionError({ message: `"${variable}" value must be one of [${lookup.join(', ')}]` });
  } else {
    assert.deepStrictEqual(val, lookup, `${variable} value must be equal to ${lookup}`);
  }
}

module.exports = {
  type,
  value
};