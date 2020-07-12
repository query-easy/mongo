'use strict';

const lo = require('lodash');
const kindof = require('kindof');

const assert = require('../util/assert');
const type = require('./_type');

const limit = require('./limit');
const offset = require('./offset');
const sort = require('./sort');
const select = require('./select');

/**
 * @dev Build option from raw input
 */
function raw(...args) {
  while (Array.isArray(args[0])) args = lo.flatten(args);
  const sym = type.getSym(args[0]);
  let f;
  switch (sym) {
    case type.definitions.limit._sym: {
      f = limit.bind(this); break;
    }
    case type.definitions.offset._sym: {
      f = offset.bind(this); break;
    }
    case type.definitions.sort._sym: {
      f = sort.bind(this); break;
    }
    case type.definitions.select._sym: {
      f = select.bind(this); break;
    }
  }
  f(args.slice(1, args.length));
  return this;
}

function raws(...args) {
  assert.type('raws', args, 'array');
  while (args.length === 1) args = lo.flatten(args);
  if (kindof(args[0]) != 'array')
    args = [args];
  for (let i = 0; i < args.length; i++) {
    assert.type('raw', args[i], 'array');
    raw.call(this, args[i]);
  }
  return this;
}

function option(collection) {
  assert.type('collection', collection, 'string');
  this.collection = collection;
  this.option = {};
  this.limit = limit.bind(this);
  this.offset = offset.bind(this);
  this.sort = sort.bind(this);
  this.select = select.bind(this);
  this.raw = raw.bind(this);
  this.raws = raws.bind(this);
  return this;
}

module.exports = option;
