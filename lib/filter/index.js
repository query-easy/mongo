'use strict';

const lo = require('lodash');
const kindof = require('kindof');

const assert = require('../util/assert');
const condition = require('./_condition');

const eq = require('./eq');
const neq = require('./neq');
const lt = require('./lt');
const gt = require('./gt');
const lte = require('./lte');
const gte = require('./gte');
const regex = require('./regex');
const exists = require('./exists');
const type = require('./type');
const _in = require('./in');
const nin = require('./nin');
const all = require('./all');
const size = require('./size');
const not = require('./not');

/* eslint-disable no-unused-vars */
/**
 * @dev check that all conditions specified match
 * @param {Function} cb Callback function
 */
function not_deprecated(...args) {
  while (Array.isArray(args[0])) args = lo.flatten(args);
  assert.type('not callback', args[0], 'function');
  const nots = {};
  const fil = filter.call({}, this.collection, nots);
  if (Array.isArray(this.filter)) {
    this.filter.push({ $not: nots });
  } else {
    this.filter.$not = nots;
  }
  args[0](fil);
  return this;
}

/**
 * @dev check that all conditions specified match
 * @param {Function} cb Callback function
 */
function and(...args) {
  while (Array.isArray(args[0])) args = lo.flatten(args);
  assert.type('and callback', args[0], 'function');
  const ands = [];
  const fil = filter.call({}, this.collection, ands);
  if (Array.isArray(this.filter)) {
    this.filter.push({ $and: ands });
  } else {
    this.filter.$and = ands;
  }
  args[0](fil);
  return this;
}

/**
 * @dev check that at least one of the conditions specified match
 * @param {Function} cb Callback function
 */
function or(...args) {
  while (Array.isArray(args[0])) args = lo.flatten(args);
  assert.type('or callback', args[0], 'function');
  const ors = [];
  const fil = filter.call({}, this.collection, ors);
  if (Array.isArray(this.filter)) {
    this.filter.push({ $or: ors });
  } else {
    this.filter.$or = ors;
  }
  args[0](fil);
  return this;
}

/**
 * @dev logical nor operator on conditions specified
 * @param {Function} cb Callback function
 */
function nor(...args) {
  while (Array.isArray(args[0])) args = lo.flatten(args);
  assert.type('nor callback', args[0], 'function');
  const nors = [];
  const fil = filter.call({}, this.collection, nors);
  if (Array.isArray(this.filter)) {
    this.filter.push({ $nor: nors });
  } else {
    this.filter.$nor = nors;
  }
  args[0](fil);
  return this;
}

/**
 * @dev Build filter from raw input
 */
function raw(...args) {
  while (Array.isArray(args[0])) args = lo.flatten(args);
  const sym = condition.getSym(args[0]);
  let f;
  switch (sym) {
    case condition.definitions.eq._sym: {
      f = eq.bind(this); break;
    }
    case condition.definitions.neq._sym: {
      f = neq.bind(this); break;
    }
    case condition.definitions.lt._sym: {
      f = lt.bind(this); break;
    }
    case condition.definitions.gt._sym: {
      f = gt.bind(this); break;
    }
    case condition.definitions.lte._sym: {
      f = lte.bind(this); break;
    }
    case condition.definitions.gte._sym: {
      f = gte.bind(this); break;
    }
    case condition.definitions.regex._sym: {
      f = regex.bind(this); break;
    }
    case condition.definitions.exists._sym: {
      f = exists.bind(this); break;
    }
    case condition.definitions.type._sym: {
      f = type.bind(this); break;
    }
    case condition.definitions.in._sym: {
      f = _in.bind(this); break;
    }
    case condition.definitions.nin._sym: {
      f = nin.bind(this); break;
    }
    case condition.definitions.all._sym: {
      f = all.bind(this); break;
    }
    case condition.definitions.size._sym: {
      f = size.bind(this); break;
    }
    case condition.definitions.not._sym: {
      f = not.bind(this); break;
    }
    case condition.definitions.and._sym: {
      f = and.bind(this); break;
    }
    case condition.definitions.or._sym: {
      f = or.bind(this); break;
    }
    case condition.definitions.nor._sym: {
      f = nor.bind(this); break;
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

function filter(collection, filter = {}) {
  assert.type('collection', collection, 'string');
  this.collection = collection;
  this.filter = filter;
  this.eq = eq.bind(this);
  this.neq = neq.bind(this);
  this.lt = lt.bind(this);
  this.gt = gt.bind(this);
  this.lte = lte.bind(this);
  this.gte = gte.bind(this);
  this.regex = regex.bind(this);
  this.exists = exists.bind(this);
  this.type = type.bind(this);
  this.in = _in.bind(this);
  this.nin = nin.bind(this);
  this.all = all.bind(this);
  this.size = size.bind(this);
  this.not = not.bind(this);
  this.and = and.bind(this);
  this.or = or.bind(this);
  this.nor = nor.bind(this);
  this.raw = raw.bind(this);
  this.raws = raws.bind(this);
  return this;
}

module.exports = filter;
