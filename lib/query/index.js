'use strict';

const lo = require('lodash');
const kindof = require('kindof');

const assert = require('../util/assert');
const query = require('./_query');

const Filter = require('../filter');
const Option = require('../option');

/**
 * @dev Build option from raw input
 */
function raw(...args) {
  while (Array.isArray(args[0])) args = lo.flatten(args);
  const sym = query.getSym(args[0]);
  let f;
  switch (sym) {
    case query.definitions.filter._sym: {
      f = this.filRaw; break;
    }
    case query.definitions.option._sym: {
      f = this.optRaw; break;
    }
  }
  f(args);
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

/**
 * @dev Give query output
 * @returns {object} Mongo query output
 */
function toQuery() {
  return {
    filter: this._filter.filter,
    options: this._option.option
  };
}

class Query {
  constructor(collection) {
    assert.type('collection', collection, 'string');
    // Filter
    this._filter = Filter.call(this, collection);
    this.eq = this._filter.eq;
    this.neq = this._filter.neq;
    this.lt = this._filter.lt;
    this.gt = this._filter.gt;
    this.lte = this._filter.lte;
    this.gte = this._filter.gte;
    this.regex = this._filter.regex;
    this.exists = this._filter.exists;
    this.type = this._filter.type;
    this.in = this._filter.in;
    this.nin = this._filter.nin;
    this.all = this._filter.all;
    this.size = this._filter.size;
    this.not = this._filter.not;
    this.and = this._filter.and;
    this.or = this._filter.or;
    this.nor = this._filter.nor;
    this.filRaw = this._filter.raw;
    // Filter
    // Option
    this._option = Option.call(this, collection);
    this.limit = this._option.limit;
    this.offset = this._option.offset;
    this.sort = this._option.sort;
    this.select = this._option.select;
    this.optRaw = this._option.raw;
    // Option
    this.raw = raw.bind(this);
    this.raws = raws.bind(this);
    this.toQuery = toQuery.bind(this);
  }
}

/**
 * @dev Construct and return a query object
 * @param {string} collection Mongo collection
 * @returns {Query} query object
 */
function queryEasy(collection) {
  const queryObj = new Query(collection);
  return queryObj;
}

module.exports = queryEasy;
