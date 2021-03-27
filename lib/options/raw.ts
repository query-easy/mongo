import kindof from 'kindof';
import {Query} from '../enum';
import {QueryStore} from '../models';
import {optionMap} from '../utils';

import * as option from '.';

export function raw(querySt: QueryStore, ...params: any[]) {
  const q = optionMap.get(params[0]);
  switch (q) {
    case Query.limit: {
      option.limit(querySt, params[1]);
      return;
    }
    case Query.offset: {
      option.offset(querySt, params[1]);
      return;
    }
    case Query.select: {
      option.select(querySt, params[1], params[2]);
      return;
    }
    case Query.sort: {
      option.sort(querySt, params[1], params[2]);
      return;
    }
  }
}

export function rawJson(querySt: QueryStore, obj: any) {
  if (kindof(obj) === 'object') {
    const keys = Object.keys(obj);
    for (const key of keys) {
      const q = optionMap.get(key);
      if (q === Query.sort && kindof(obj[key]) === 'object') {
        Object.keys(obj[key]).forEach(order => {
          raw(querySt, key, obj[key][order], order);
        });
      } else if (q === Query.select && kindof(obj[key]) === 'object') {
        const select: string[] = [];
        const deSelect: string[] = [];
        Object.keys(obj[key]).forEach(prop => {
          if (obj[key][prop]) {
            select.push(prop);
          } else {
            deSelect.push(prop);
          }
          if (select.length) {
            raw(querySt, Query.select, select, true);
          }
          if (deSelect.length) {
            raw(querySt, Query.select, deSelect, false);
          }
        });
      } else {
        raw(querySt, key, obj[key]);
      }
    }
  }
}
