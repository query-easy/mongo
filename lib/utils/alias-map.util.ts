import {Query} from '../enum';

const filMap = new Map<Query, string[]>();
const optMap = new Map<Query, string[]>();

filMap.set(Query.eq, [Query.eq, '=']);
filMap.set(Query.neq, [Query.neq, '<>', '!=']);
filMap.set(Query.gt, [Query.gt, '>']);
filMap.set(Query.gte, [Query.gte, '>=']);
filMap.set(Query.lt, [Query.lt, '<']);
filMap.set(Query.lte, [Query.lte, '<=']);
filMap.set(Query.in, [Query.in]);
filMap.set(Query.nin, [Query.nin, 'notin']);
filMap.set(Query.all, [Query.all]);
filMap.set(Query.size, [Query.size]);
filMap.set(Query.exists, [Query.exists]);
filMap.set(Query.type, [Query.type]);
filMap.set(Query.regex, [Query.regex]);
filMap.set(Query.and, [Query.and, '&&']);
filMap.set(Query.or, [Query.or, '||']);
filMap.set(Query.nor, [Query.nor]);
filMap.set(Query.not, [Query.not]);

optMap.set(Query.limit, [Query.limit]);
optMap.set(Query.offset, [Query.offset, 'skip']);
optMap.set(Query.select, [Query.select]);
optMap.set(Query.sort, [Query.sort]);

const filterMap = new Map<string, Query>();
const optionMap = new Map<string, Query>();
const queryMap = new Map<string, Query>();

for (const [key, value] of filMap) {
  for (const a of value) {
    filterMap.set(a, key);
    queryMap.set(a, key);
  }
}

for (const [key, value] of optMap) {
  for (const a of value) {
    optionMap.set(a, key);
    queryMap.set(a, key);
  }
}

export {filterMap, optionMap, queryMap};
