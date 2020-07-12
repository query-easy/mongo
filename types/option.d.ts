// Type definitions for [@query-easy/mongo]
// Project: [Query Easy - Mongo]
// Definitions by: [Akash Kansara] [https://github.com/akash-kansara]

interface Option {
  limit: typeof limit,
  offset: typeof offset,
  sort: typeof sort,
  select: typeof select,
  raw: typeof raw,
  raws: typeof raws
}

declare function limit(limit: number): Option;
declare function offset(offset: number): Option;
declare function sort(order: string, path: string[]): Option;
declare function sort(order: string, ...path: string[]): Option;
declare function select(select: boolean, path: string[]): Option;
declare function select(select: boolean, ...path: string[]): Option;
declare function raw(type: string, args: any[]): Option;
declare function raw(type: string, ...args: any[]): Option;
declare function raws(rawArr: any[][]): Option;

declare function option(collection: string): Option;
