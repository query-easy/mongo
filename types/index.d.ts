// Type definitions for [@query-easy/mongo]
// Project: [Query Easy - Mongo]
// Definitions by: [Akash Kansara] [https://github.com/akash-kansara]

/// <reference path="filter.d.ts" />

declare module "@query-easy/mongo" {

  interface queryCB {
    (queryCb: Filter): void
  }

  interface MongoQuery {
    filter: object
    options: object
  }

  function eq(path: string, value: any): Query;
  function neq(path: string, value: any): Query;
  function lt(path: string, value: any): Query;
  function gt(path: string, value: any): Query;
  function lte(path: string, value: any): Query;
  function gte(path: string, value: any): Query;
  function regex(path: string, regex: RegExp): Query;
  function exists(path: string, exists: boolean): Query;
  function type(path: string, bsonType: string): Query;
  function _in(path: string, arr: any[]): Query;
  function _in(path: string, ...arr: any[]): Query;
  function nin(path: string, arr: any[]): Query;
  function nin(path: string, ...arr: any[]): Query;
  function all(path: string, arr: any[]): Query;
  function all(path: string, ...arr: any[]): Query;
  function size(path: string, size: number): Query;
  function not(path: string, value: any): Query;
  function and(andCB: queryCB): Query;
  function or(orCB: queryCB): Query;
  function nor(norCB: queryCB): Query;

  function limit(limit: number): Query;
  function offset(offset: number): Query;
  function sort(order: string, path: string[]): Query;
  function sort(order: string, ...path: string[]): Query;
  function select(select: boolean, path: string[]): Query;
  function select(select: boolean, ...path: string[]): Query;

  function raw(type: string, args: any[]): Query;
  function raw(type: string, ...args: any[]): Query;
  function raws(rawArr: any[][]): Query;

  function toQuery(): MongoQuery;

  interface Query {
    eq: typeof eq,
    neq: typeof neq,
    lt: typeof lt,
    gt: typeof gt,
    lte: typeof lte,
    gte: typeof gte,
    regex: typeof regex,
    exists: typeof exists,
    type: typeof type,
    in: typeof _in,
    nin: typeof nin,
    all: typeof all,
    size: typeof size,
    not: typeof not,
    and: typeof and,
    or: typeof or,
    nor: typeof nor,

    limit: typeof limit,
    offset: typeof offset,
    sort: typeof sort,
    select: typeof select,

    raw: typeof raw,
    raws: typeof raws,

    toQuery: typeof toQuery
  }

  function qeMongo(collection: string): Query;

  export = qeMongo;
}