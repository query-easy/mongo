import kindof from 'kindof';
import {Filter, Option} from '../models';
import {optionMap, queryMap} from '../utils';

export function raw(filter: Filter, option: Option, ...params: any[]) {
  if (optionMap.get(params[0])) {
    option.raw(...params);
  } else if (queryMap.get(params[1])) {
    filter.raw(...params);
  }
}

export function rawJson(filter: Filter, option: Option, obj: any) {
  if (kindof(obj) === 'object') {
    const keys = Object.keys(obj);
    for (const key of keys) {
      if (optionMap.get(key)) {
        option.rawJson({[key]: obj[key]});
      } else {
        filter.rawJson({[key]: obj[key]});
      }
    }
  }
}
