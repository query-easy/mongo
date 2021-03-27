import kindof from 'kindof';
import {Query} from '../enum';
import {QueryStore} from '../models';
import {filterMap} from '../utils';

import * as filter from '.';

export function raw(querySt: QueryStore, ...params: any[]) {
  let q = filterMap.get(params[1]);
  switch (q) {
    case Query.eq: {
      filter.eq(querySt, params[0], params[2]);
      return;
    }
    case Query.neq: {
      filter.neq(querySt, params[0], params[2]);
      return;
    }
    case Query.gt: {
      filter.gt(querySt, params[0], params[2]);
      return;
    }
    case Query.gte: {
      filter.gte(querySt, params[0], params[2]);
      return;
    }
    case Query.lt: {
      filter.lt(querySt, params[0], params[2]);
      return;
    }
    case Query.lte: {
      filter.lte(querySt, params[0], params[2]);
      return;
    }
    case Query.in: {
      filter.inQ(querySt, params[0], params[2]);
      return;
    }
    case Query.nin: {
      filter.nin(querySt, params[0], params[2]);
      return;
    }
    case Query.all: {
      filter.all(querySt, params[0], params[2]);
      return;
    }
    case Query.size: {
      filter.size(querySt, params[0], params[2]);
      return;
    }
    case Query.exists: {
      filter.exists(querySt, params[0], params[2]);
      return;
    }
    case Query.type: {
      filter.type(querySt, params[0], params[2]);
      return;
    }
    case Query.regex: {
      filter.regex(querySt, params[0], params[2]);
      return;
    }
    case Query.not: {
      filter.not(querySt, params[0], params[2]);
      return;
    }
  }
  q = filterMap.get(params[0]);
  switch (q) {
    case Query.and: {
      filter.and(querySt, params[1]);
      return;
    }
    case Query.or: {
      filter.or(querySt, params[1]);
      return;
    }
    case Query.nor: {
      filter.nor(querySt, params[1]);
      return;
    }
  }
}

export function rawJson(querySt: QueryStore, obj: any) {
  if (kindof(obj) === 'object') {
    const keys = Object.keys(obj);
    for (const key of keys) {
      const keyKind = kindof(obj[key]);
      if (keyKind === 'object') {
        const queryKeys = Object.keys(obj[key]);
        if (queryKeys && typeof queryKeys[0] === 'string') {
          raw(querySt, key, queryKeys[0], obj[key][queryKeys[0]]);
        }
      } else if (keyKind === 'array') {
        raw(querySt, key, obj[key]);
      }
    }
  }
}
