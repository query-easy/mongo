// Type definitions for [@query-easy/mongo]
// Project: [Query Easy - Mongo]
// Definitions by: [Akash Kansara] [https://github.com/akash-kansara]

interface Filter {
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
  raw: typeof raw,
  raws: typeof raws
}

interface filterCB {
  (filterCb: Filter): void
}

declare function eq(path: string, value: any): Filter;
declare function neq(path: string, value: any): Filter;
declare function lt(path: string, value: any): Filter;
declare function gt(path: string, value: any): Filter;
declare function lte(path: string, value: any): Filter;
declare function gte(path: string, value: any): Filter;
declare function regex(path: string, regex: RegExp): Filter;
declare function exists(path: string, exists: boolean): Filter;
declare function type(path: string, bsonType: string): Filter;
declare function _in(path: string, arr: any[]): Filter;
declare function _in(path: string, ...arr: any[]): Filter;
declare function nin(path: string, arr: any[]): Filter;
declare function nin(path: string, ...arr: any[]): Filter;
declare function all(path: string, arr: any[]): Filter;
declare function all(path: string, ...arr: any[]): Filter;
declare function size(path: string, size: number): Filter;
declare function not(path: string, value: any): Filter;
declare function and(andCB: filterCB): Filter;
declare function or(orCB: filterCB): Filter;
declare function nor(norCB: filterCB): Filter;
declare function raw(type: string, args: any[]): Filter;
declare function raw(type: string, ...args: any[]): Filter;
declare function raws(rawArr: any[][]): Filter;

declare function filter(collection: string, result: object | object[]): Filter;
